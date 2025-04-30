import type { RectangleLayer } from "~/types";
import { colorToCss } from "~/utils";

export default function Rectangle({
  id,
  layer,
}: {
  id: string;
  layer: RectangleLayer;
}) {
    return (
        <g>
            <rect style={{transform: `translate(${layer.x}px, ${layer.y}px)` }} 
            strokeWidth={1}
            width={layer.width}
            height={layer.height}
            fill = {layer.fill ? colorToCss(layer.fill) : "#CCC"}
            stroke={layer.stroke ? colorToCss(layer.stroke) : "#000"}
            opacity={`${layer.opacity ?? 100}%`}
            rx = {layer.cornerRadius ?? 0}
            ry = {layer.cornerRadius ?? 0}
            />
        </g>
    );
}
