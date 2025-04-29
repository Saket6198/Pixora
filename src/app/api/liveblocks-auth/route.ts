import { Liveblocks } from "@liveblocks/node";
import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { env } from "~/env";


export async function POST() {
  const liveblocks = new Liveblocks({
    secret: process.env.LIVEBLOCKS_SECRET_KEY ?? "",
  });
  const userSession = await auth();
  const user = await db.user.findUnique({
    where: {
      id: userSession?.user?.id,
    },
  });
  if (!user) {
    return new Response("User not found", { status: 404 });
  }
  const session = liveblocks.prepareSession(user.id, {
    userInfo: {
      name: user?.email ?? "Anonymous",
    },
  });

  session.allow(`room:${"test"}`, session.FULL_ACCESS);

  const { status, body } = await session.authorize();
  console.log("Session Status:", status);
  console.log("Session Body:", body);

  return new Response(body, { status });
}
