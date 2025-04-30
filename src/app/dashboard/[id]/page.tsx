import Canvas from "~/components/canvas/canvas";
import { Room } from "~/components/liveblocks/room";
import { auth } from "~/server/auth";

type ParamsType = Promise<{id: string}>;

export default async function Page({params}: {params: ParamsType}) {
    const {id} = await params;
    const session = await auth();
    // session?.user?.id === id; // Check if the session user ID matches the ID in the URL

    return (
        <Room roomid={"room:" + id}>
            <Canvas /> 
        </Room>
    );
}

