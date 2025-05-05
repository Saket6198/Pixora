import type { Camera, Point } from "./types";

export function colorToCss(color: { r: number; g: number; b: number }): string {
    return `#${color.r.toString(16).padStart(2, "0")}${color.g.toString(16).padStart(2, "0")}${color.b.toString(16).padStart(2, "0")}`;
}

const pointerEventToCanvasPoint = (
    e: React.PointerEvent,
    camera: Camera
) : Point => {
    return {
        x: Math.round(e.clientX) - camera.x,
        y: Math.round((e.clientY) - camera.y),
    };
};

export {pointerEventToCanvasPoint};