"use client";

import { useRef, useState } from 'react';
import { CanvasMode } from '../../types';
import IconButton from './iconbutton';
import { BiPointer } from 'react-icons/bi';
export default function SelectionButton ({
    isActive,
    canvasMode,
    onClick,
}: {
    isActive: boolean;
    canvasMode: CanvasMode;
    onClick: (newState: CanvasMode.None) => void;
}){
    const [isOpen, setisOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    return (
        <div className="relative flex" ref={menuRef}>
            <IconButton
            isActive={isActive}
            onClick={() => onClick(CanvasMode.None)}
            >
                {canvasMode == CanvasMode.None && <BiPointer className='h-5 w-5'/>}
            </IconButton>
        </div>
    );
}