import { CanvasMode, LayerType, type CanvasState } from "~/types";
import SelectionButton from "./selectionButton";
import ShapeSelectionButton from "./ShapesselectionButton";
import ZoomInButton from "./zoomInButton";
import ZoomOutButton from "./zoomOutButton";

export default function Toolbar({
  canvasState,
  setCanvasState,
  zoomIn,
  zoomOut,
  canZoomIn,
  canZoomOut,
}: {
  canvasState: CanvasState;
  setCanvasState: (newState: CanvasState) => void;
  zoomIn: () => void;
  zoomOut: () => void;
  canZoomIn: boolean;
  canZoomOut: boolean;
}) {
  return (
    <div className="fixed bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center rounded-lg bg-white p-1 shadow-[0_0_3px_rgba(0,0,0,0.18)]">
      <div className="flex items-center justify-center gap-3">
        <SelectionButton
          isActive={
            canvasState.mode === CanvasMode.None ||
            canvasState.mode === CanvasMode.Dragging
          }
          canvasMode={canvasState.mode}
          onClick={(canvasMode) =>
            setCanvasState(
              canvasMode === CanvasMode.Dragging
                ? { mode: CanvasMode.Dragging, origin: null }
                : { mode: CanvasMode.None },
            )
          }
        />
        <ShapeSelectionButton
          isActive={
            canvasState.mode === CanvasMode.inserting &&
            [LayerType.Rectangle, LayerType.Ellipse].includes(
              canvasState.layerType,
            )
          }
          canvasState={canvasState}
          onClick={(layerType) =>
            setCanvasState({
              mode: CanvasMode.inserting,
              layerType,
            })
          }
        ></ShapeSelectionButton>
        <div className="w-[1px] bg-black/10 self-stretch" />
        <div className="flex items-center justify-center">
            <ZoomInButton onClick={zoomIn} disabled={!canZoomIn} />
            <ZoomOutButton onClick={zoomOut} disabled={!canZoomOut} />

            
        </div>
      </div>
    </div>
  );
}
