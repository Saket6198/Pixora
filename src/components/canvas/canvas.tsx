"use client";

import { useMutation, useRoom, useStorage } from "@liveblocks/react";
import { colorToCss, pointerEventToCanvasPoint } from "~/utils";
import LayerComponent from "./layerComponent";
import {
  LayerType,
  type RectangleLayer,
  type Layer,
  type Point,
  type Camera,
  type EllipseLayer,
  CanvasMode,
} from "~/types";
import { LiveObject, nanoid } from "@liveblocks/core";
import React, { useEffect, useState } from "react";
import Toolbar from "../Toolbar/toolbar";
import { type CanvasState } from '~/types';

export default function Canvas() {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });
  const roomColor = useStorage((root) => root.roomColor);
  const layerIds = useStorage((root) => root.layerIds);
  const room = useRoom();
  const [camera, setCamera] = useState<Camera>({ x: 0, y: 0, zoom: 1 });
  const storagestatus = room.getStorageStatus();
  const insertLayer = useMutation(
    (
      { storage, setMyPresence },
      layerType: LayerType.Ellipse | LayerType.Rectangle | LayerType.Text,
      position: Point,
    ) => {
      const liveLayers = storage.get("layers");
      if (liveLayers.size > 80) {
        return;
      }

      const liveLayerIds = storage.get("layerIds");
      const layerId = nanoid();
      let layer: LiveObject<Layer> | null = null;

      if (layerType == LayerType.Rectangle) {
        layer = new LiveObject<RectangleLayer>({
          type: LayerType.Rectangle,
          x: position.x,
          y: position.y,
          height: 100,
          width: 100,
          fill: { r: 217, g: 217, b: 217 },
          opacity: 100,
          stroke: { r: 217, g: 217, b: 217 },
        });
      } else if (layerType == LayerType.Ellipse) {
        layer = new LiveObject<EllipseLayer>({
          type: LayerType.Ellipse,
          x: position.x,
          y: position.y,
          height: 100,
          width: 100,
          fill: { r: 217, g: 217, b: 217 },
          opacity: 100,
          stroke: { r: 217, g: 217, b: 217 },
        });
      }

      if (layer) {
        liveLayerIds.push(layerId);
        liveLayers.set(layerId, layer);

        setMyPresence({ selection: [layerId] }, { addToHistory: true });
      }
    },
    [],
  );
  const onPointerUp = useMutation(
    ({}, e: React.PointerEvent) => {
      const point = pointerEventToCanvasPoint(e, camera);
      if (canvasState.mode === CanvasMode.None) {
        setCanvasState({ mode: CanvasMode.None });
      } else if (canvasState.mode === CanvasMode.inserting) {
        insertLayer(canvasState.layerType, point);
      }
    },
    [setCanvasState, insertLayer, canvasState],
  );
  // const roomColor = {r: 255, g: 87, b: 51};
  return (
    <div className="flex h-screen w-full">
      <main className="fixed right-0 left-0 h-screen overflow-y-auto">
        <div
          style={{
            backgroundColor: roomColor ? colorToCss(roomColor) : "#1e1e1e",
          }}
          className="h-full w-full touch-none"
        >
          <svg onPointerUp={onPointerUp} className="h-full w-full">
            <g>
              {layerIds?.map((layerId) => (
                <LayerComponent key={layerId} id={layerId} />
              ))}
            </g>
          </svg>
        </div>
      </main>
      <Toolbar
        canvasState={canvasState}
        setCanvasState={(newState) => setCanvasState(newState)}
      />
    </div>
  );
}
