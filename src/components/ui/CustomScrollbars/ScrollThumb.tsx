import { useRef, useEffect, useState, useCallback } from "react";

interface ScrollThumbProps {
  orientation: "vertical" | "horizontal";
  pos: number; // top or left in px
  length: number; // height (vertical) or width (horizontal) in px
  thickness?: string; // CSS width/height for the thumb (eg "4px" or "6px")
  background?: string;
  onDragStart?: () => void;
  onDragMove?: (clientPos: number, clickOffset: number) => void; // mouse position + offset from thumb edge
  onDragEnd?: () => void;
}

export default function ScrollThumb({
  orientation,
  pos,
  length,
  thickness = "4px",
  background = "rgba(255,255,255,0.2)",
  onDragStart,
  onDragMove,
  onDragEnd,
}: ScrollThumbProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // RAF batching for pointer moves
  const dragRafRef = useRef<number | null>(null);
  const pendingPosRef = useRef<number | null>(null);
  const hasMovedRef = useRef<boolean>(false); // Track if mouse has moved since click
  const clickOffsetRef = useRef<number>(0); // Offset from thumb edge where user clicked

  useEffect(() => {
    return () => {
      if (dragRafRef.current !== null) cancelAnimationFrame(dragRafRef.current);
    };
  }, []);

  const startDrag = () => {
    setIsDragging(true);
    if (onDragStart) onDragStart();
    // prevent text selection while dragging
    document.body.style.userSelect = "none";
  };

  const finishDrag = useCallback(() => {
    setIsDragging(false);
    if (onDragEnd) onDragEnd();
    document.body.style.userSelect = "";
    if (dragRafRef.current !== null) {
      cancelAnimationFrame(dragRafRef.current);
      dragRafRef.current = null;
    }
    pendingPosRef.current = null;
  }, [onDragEnd]);

  const frameLoop = useCallback(() => {
    const p = pendingPosRef.current;
    if (p === null) {
      dragRafRef.current = null;
      return;
    }
    // Only call parent if mouse has actually moved
    if (hasMovedRef.current && onDragMove) {
      onDragMove(p, clickOffsetRef.current);
    }
    pendingPosRef.current = null;
    dragRafRef.current = null;
  }, [onDragMove]);

  const handlePointerMove = useCallback(
    (clientPos: number) => {
      pendingPosRef.current = clientPos;
      if (dragRafRef.current === null) {
        dragRafRef.current = requestAnimationFrame(frameLoop);
      }
    },
    [frameLoop]
  );

  useEffect(() => {
    if (!isDragging) return;

    const onMove = (e: MouseEvent) => {
      const val = orientation === "vertical" ? e.clientY : e.clientX;
      e.preventDefault();
      hasMovedRef.current = true; // Mark that mouse has moved
      handlePointerMove(val);
    };

    const onUp = () => {
      finishDrag();
    };

    document.addEventListener("mousemove", onMove, { passive: false });
    document.addEventListener("mouseup", onUp);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
  }, [isDragging, orientation, handlePointerMove, finishDrag]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Calculate where on the thumb the user clicked
    if (ref.current) {
      const thumbRect = ref.current.getBoundingClientRect();
      if (orientation === "vertical") {
        clickOffsetRef.current = e.clientY - thumbRect.top;
      } else {
        clickOffsetRef.current = e.clientX - thumbRect.left;
      }
    }

    // Reset movement tracking
    hasMovedRef.current = false;

    startDrag();
  };

  // Dynamic visual states based on hover/drag
  const activeThickness = isDragging || isHovered ? "6px" : thickness;
  const activeBackground = isDragging || isHovered ? "rgba(255, 255, 255, 0.4)" : background;
  const isVertical = orientation === "vertical";

  const styleBase: React.CSSProperties = {
    position: "absolute",
    background: activeBackground,
    borderRadius: 2,
    cursor: "default",
    transition: isDragging ? "none" : "background 0.15s ease-out, width 0.15s ease-out, height 0.15s ease-out",
    pointerEvents: "auto",
    willChange: "transform",
    zIndex: 20,
    // Axis-specific positioning and dimensions
    ...(isVertical
      ? { right: "2px", top: `${pos}px`, width: activeThickness, height: `${length}px` }
      : { bottom: "2px", left: `${pos}px`, width: `${length}px`, height: activeThickness }),
  };

  return (
    <div
      ref={ref}
      onMouseDown={handleMouseDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={styleBase}
    />
  );
}
