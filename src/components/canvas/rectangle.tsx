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
            x = {layer.x}
            y = {layer.y}
            width={layer.width}
            height={layer.height}
            fill = {layer.fill ? colorToCss(layer.fill) : "#CCC"}
            strokeWidth={layer.stroke ? colorToCss(layer.stroke) : "#CCC"}
            opacity={layer.opacity}
            rx = {layer.cornerRadius ?? 0}
            ry = {layer.cornerRadius ?? 0}
            />
        </g>
    );
}
