import { useEffect, useRef, type ReactNode } from "react";

interface CustomScrollbarsProps {
  children: ReactNode;
  containerHeight?: number;
  containerWidth?: number;
  onScrollElementReady?: (element: HTMLDivElement) => void;
}

// Keep the existing component contract; the browser handles dragging, touch,
// keyboard scrolling, and content resizing without React updates per scroll.
export function CustomScrollbars({
  children,
  containerHeight,
  containerWidth,
  onScrollElementReady,
}: CustomScrollbarsProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) onScrollElementReady?.(ref.current);
  }, [onScrollElementReady]);
  return (
    <div className="relative" style={{ maxWidth: containerWidth }}>
      <div ref={ref} className="overflow-auto styled-scrollbar" style={{ maxHeight: containerHeight }}>
        {children}
      </div>
    </div>
  );
}
