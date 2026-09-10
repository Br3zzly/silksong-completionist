import { useEffect, useRef, useState, type DragEvent } from "react";

const isFileDrag = (event: DragEvent<HTMLElement>) =>
  event.dataTransfer.types.includes("Files") || event.dataTransfer.files.length > 0;

// React portal events bubble through the component tree, but dialogs are not part of this drop zone.
const isInside = (event: DragEvent<HTMLElement>) => event.currentTarget.contains(event.target as Node);

export function useFileDropZone(onFile: (file: File) => void) {
  const depth = useRef(0);
  const [active, setActive] = useState(false);
  const [hintTop, setHintTop] = useState(0);
  const reset = () => {
    depth.current = 0;
    setActive(false);
  };

  useEffect(() => {
    const resetDrag = () => {
      depth.current = 0;
      setActive(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") resetDrag();
    };
    window.addEventListener("drop", resetDrag);
    window.addEventListener("dragend", resetDrag);
    window.addEventListener("blur", resetDrag);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("drop", resetDrag);
      window.removeEventListener("dragend", resetDrag);
      window.removeEventListener("blur", resetDrag);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const showHint = (event: DragEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    setHintTop((Math.max(0, bounds.top) + Math.min(window.innerHeight, bounds.bottom)) / 2 - bounds.top);
    setActive(true);
  };

  return {
    active,
    hintTop,
    handlers: {
      onDragEnter(event: DragEvent<HTMLElement>) {
        if (!isInside(event) || !isFileDrag(event)) return;
        event.preventDefault();
        depth.current++;
        showHint(event);
      },
      onDragOver(event: DragEvent<HTMLElement>) {
        if (!isInside(event) || !isFileDrag(event)) return;
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
        depth.current = Math.max(1, depth.current);
        showHint(event);
      },
      onDragLeave(event: DragEvent<HTMLElement>) {
        if (!isInside(event)) return;
        depth.current = Math.max(0, depth.current - 1);
        if (!depth.current) setActive(false);
      },
      onDrop(event: DragEvent<HTMLElement>) {
        if (!isInside(event)) return;
        reset();
        if (!isFileDrag(event)) return;
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) onFile(file);
      },
    },
  };
}
