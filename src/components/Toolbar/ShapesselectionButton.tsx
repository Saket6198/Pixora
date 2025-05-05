"use client";

import { useEffect, useRef, useState } from "react";
import { CanvasMode, LayerType, type CanvasState } from '../../types';
import {IoEllipseOutline, IoSquareOutline} from "react-icons/io5";
import IconButton from "./iconbutton";
export default function ShapeSelectionButton({
  isActive,
  canvasState,
  onClick,
}: {
  isActive: boolean;
  canvasState: CanvasState;
  onClick: (layerType: LayerType.Rectangle | LayerType.Ellipse) => void;
}) {
  const [isOpen, setisOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setisOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  const handleClick = (layerType: LayerType.Rectangle | LayerType.Ellipse) => {
    onClick(layerType);
    setisOpen(false);
  };

  return (
    <div className="relative flex" ref={menuRef}>
      <IconButton isActive={isActive} onClick={() => onClick(LayerType.Rectangle)}>
        {canvasState.mode !== CanvasMode.inserting && (
            <IoSquareOutline className="h-5 w-5" />
        )}

        {canvasState.mode === CanvasMode.inserting && 
            canvasState.layerType === LayerType.Rectangle && (
            <IoSquareOutline className="h-5 w-5" />
        )}

        {canvasState.mode === CanvasMode.inserting && 
            canvasState.layerType === LayerType.Ellipse && (
                <IoEllipseOutline className="h-5 w-5" />
        )}
      </IconButton>
      <button
        onClick={() => setisOpen(!isOpen)}
        className="ml-1 flex min-h-[28px] min-w-[28px] rotate-180 items-center justify-center rounded-md text-gray-500 opacity-60 hover:enabled:bg-gray-100 hover:enabled:text-gray-700 focus:enabled:bg-gray-100 focus:enabled:text-gray-700 active:enabled:bg-gray-100 active:enabled:text-gray-700 disabled:cursor-default"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-up"
        >
          <path d="M6 9l6 6 6-6"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute -top-20 mt-1 min-w-[150px] rounded-xl bg-[#1e1e1e] p-2 shadow-lg">
          <button
            className={`flex w-full items-center rounded-md p-1 text-white hover:bg-blue-500 ${canvasState.mode === CanvasMode.inserting && canvasState.layerType === LayerType.Rectangle ? "bg-blue-500" : ""}`}
            onClick={() => handleClick(LayerType.Rectangle)}
          >
            <span className="w-5 text-sm">
              {canvasState.mode === CanvasMode.inserting && canvasState.layerType === LayerType.Rectangle  && "✔"}
            </span>
            <IoSquareOutline className="mr-2 h-4 w-4" />
            <span className="text-xs">Rectangle</span>
          </button>
          <button
            className={`flex w-full items-center rounded-md p-1 text-white hover:bg-blue-500 ${canvasState.mode === CanvasMode.inserting && canvasState.layerType === LayerType.Ellipse  ? "bg-blue-500" : ""}`}
            onClick={() => handleClick(LayerType.Ellipse)}
          >
            <span className="w-5 text-sm">
              {canvasState.mode === CanvasMode.inserting && canvasState.layerType === LayerType.Ellipse  && "✔"}
            </span>
            <IoEllipseOutline className="mr-2 h-4 w-4" />
            <span className="text-xs">Ellipse</span>
          </button>
        </div>
      )}
    </div>
  );
}
