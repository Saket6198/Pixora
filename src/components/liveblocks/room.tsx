"use client";

import type { ReactNode } from "react";
import type React from "react";
import {
  ClientSideSuspense,
  LiveblocksProvider,
  RoomProvider,
} from "@liveblocks/react";
import { LiveList, LiveObject, LiveMap } from "@liveblocks/client";
import type { Layer } from "~/types";
import Image from "next/image";

export function Room({
  children,
  roomid,
}: {
  children: ReactNode;
  roomid: string;
}) {
  return (
    <>
      <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
        <RoomProvider
          id={roomid}
          initialPresence={{
            selection: [],
            cursor: null,
            penColor: null,
            pencilDraft: null,
          }}
          initialStorage={{
            roomColor: { r: 30, b: 30, g: 30 },
            layers: new LiveMap<string, LiveObject<Layer>>(),
            layerIds: new LiveList([]),
          }}
        >
          <ClientSideSuspense
        fallback={
          <p className="flex min-h-screen flex-col items-center justify-center gap-3 font-semibold">
            <Image
              className="h-10 w-10 animate-bounce"
              src="/icons/canva.svg"
              alt = "pixora-icon"
            ></Image>
            Loading...
          </p>
        }
      >
        {children}
      </ClientSideSuspense>
        </RoomProvider>
      </LiveblocksProvider>
      
    
    </>
  );
}
