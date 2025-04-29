"use client";

import { useMutation, useStorage } from "@liveblocks/react";
import { colorToCss } from "~/utils";
import LayerComponent from "./layerComponent";
import { LayerType, type RectangleLayer, type Layer, type Point } from "~/types";
import { LiveObject, nanoid } from "@liveblocks/core";
import { useEffect } from "react";

export default function Canvas() {
  const roomColor = useStorage((root) => root.roomColor);
  const layerIds = useStorage((root) => root.layerIds);
  const insertLayer = useMutation(({storage, setMyPresence}, layerType: LayerType.Ellipse | LayerType.Rectangle | LayerType.Text, position: Point) => {
    const liveLayers = storage.get("layers");
    if(liveLayers.size > 80){
      return;
    }
    
    const liveLayerIds = storage.get("layerIds");
    const layerId = nanoid();
    let layer: LiveObject<Layer> | null = null;

    if(layerType == LayerType.Rectangle) {
      layer = new LiveObject<RectangleLayer>({
        type: LayerType.Rectangle,
        x: position.x,
        y: position.y,
        height: 100,
        width: 100,
        fill: {r: 255, g: 255, b: 255},
        opacity: 1,
        stroke: {r: 0, g: 0, b: 0},
      });
    }

    if(layer) {
      liveLayerIds.push(layerId);
      liveLayers.set(layerId, layer);

      setMyPresence({selection: [layerId]}, {addToHistory: true})
    }
  }, []
);

useEffect(() => {
  insertLayer(LayerType.Rectangle, {x: 100, y: 100})
  }, []);

  // const roomColor = {r: 255, g: 87, b: 51};
  return (
    <div className="flex h-screen w-full">
      <main className="fixed right-0 left-0 h-screen overflow-y-auto">
        <div
          style={{
            backgroundColor: roomColor ? colorToCss(roomColor) : "#1E1E1E",
          }}
          className="h-full w-full touch-none"
        ></div>
        <svg className="h-full w-full">
          <g>
            {layerIds?.map((layerId) => (
              <LayerComponent key={layerId} id={layerId} />
            ))}
          </g>
        </svg>
      </main>
    </div>
  );
}


