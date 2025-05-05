import type { EllipseLayer } from "~/types";
import { colorToCss } from "~/utils";

export default function Ellipse({
    id,
    layer,
}: {
    id: string,
    layer: EllipseLayer,
}) {
    return (
        <g>
            <ellipse style={{transform: `translate(${layer.x}px, ${layer.y}px)` }} 
            width={layer.width}
            strokeWidth="1"
            height={layer.height}
            cx={layer.width /2 }
            rx ={layer.width /2}
            ry ={layer.height /2}
            cy={layer.height /2}
            fill = {layer.fill ? colorToCss(layer.fill) : "#CCC"}
            stroke={layer.stroke ? colorToCss(layer.stroke) : "#000"}
            opacity={`${layer.opacity ?? 100}%`}
            />
        </g>
    );
}