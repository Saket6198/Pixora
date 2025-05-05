"use client";

import { useEffect, useRef, useState } from "react";
import { CanvasMode } from "../../types";
import IconButton from "./iconbutton";
import { BiPointer } from "react-icons/bi";
import { RiHand } from "react-icons/ri";
export default function SelectionButton({
  isActive,
  canvasMode,
  onClick,
}: {
  isActive: boolean;
  canvasMode: CanvasMode;
  onClick: (canvasMode: CanvasMode.None | CanvasMode.Dragging) => void;
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

  const handleClick = (canvasMode: CanvasMode.None | CanvasMode.Dragging) => {
    onClick(canvasMode);
    setisOpen(false);
  };
  return (
    <div className="relative flex" ref={menuRef}>
      <IconButton isActive={isActive} onClick={() => onClick(CanvasMode.None)}>
        {canvasMode !== CanvasMode.None &&
          canvasMode !== CanvasMode.Dragging && (
            <BiPointer className="h-5 w-5" />
          )}
        {canvasMode == CanvasMode.None && <BiPointer className="h-5 w-5" />}
        {canvasMode == CanvasMode.Dragging && <RiHand className="h-5 w-5" />}
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
            className={`flex w-full items-center rounded-md p-1 text-white hover:bg-blue-500 ${canvasMode === CanvasMode.None ? "bg-blue-500" : ""}`}
            onClick={() => handleClick(CanvasMode.None)}
          >
            <span className="w-5 text-sm">
              {canvasMode === CanvasMode.None && "✔"}
            </span>
            <BiPointer className="mr-2 h-4 w-4" />
            <span className="text-xs">Move</span>
          </button>
          <button
            className={`flex w-full items-center rounded-md p-1 text-white hover:bg-blue-500 ${canvasMode === CanvasMode.Dragging ? "bg-blue-500" : ""}`}
            onClick={() => handleClick(CanvasMode.Dragging)}
          >
            <span className="w-5 text-sm">
              {canvasMode === CanvasMode.Dragging && "✔"}
            </span>
            <RiHand className="mr-2 h-4 w-4" />
            <span className="text-xs">Drag</span>
          </button>
        </div>
      )}
    </div>
  );
}
