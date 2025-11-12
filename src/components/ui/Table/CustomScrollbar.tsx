import { useRef, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface CustomScrollbarProps {
  children: ReactNode;
  containerHeight: number;
  onScrollElementReady?: (element: HTMLDivElement) => void;
}

export function CustomScrollbar({ children, containerHeight, onScrollElementReady }: CustomScrollbarProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [scrollThumbHeight, setScrollThumbHeight] = useState(0);
  const [scrollThumbTop, setScrollThumbTop] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Use refs to avoid triggering re-renders during scroll/drag
  const rafIdRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);

  const THUMB_VERTICAL_PADDING = 4; // Top and bottom padding for thumb positioning

  // Notify parent when scroll element is ready
  useEffect(() => {
    if (scrollContainerRef.current && onScrollElementReady) {
      onScrollElementReady(scrollContainerRef.current);
    }
  }, [onScrollElementReady]);

  // Update scrollbar position based on scroll using requestAnimationFrame
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const updateThumbPosition = () => {
      // Don't update thumb position while dragging to avoid conflict
      if (isDraggingRef.current) return;

      const { scrollTop, scrollHeight, clientHeight } = container;

      if (scrollHeight <= clientHeight) {
        setScrollThumbHeight(0);
        return;
      }

      const availableHeight = containerHeight - THUMB_VERTICAL_PADDING * 2;
      const thumbHeightRatio = clientHeight / scrollHeight;
      const thumbHeight = Math.max(80, thumbHeightRatio * availableHeight);
      const maxThumbTop = availableHeight - thumbHeight;
      const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
      const thumbTop = THUMB_VERTICAL_PADDING + scrollPercentage * maxThumbTop;

      setScrollThumbHeight(thumbHeight);
      setScrollThumbTop(thumbTop);
    };

    const handleScroll = () => {
      // Cancel any pending animation frame
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }

      // Schedule update on next animation frame for smooth 60fps updates
      rafIdRef.current = requestAnimationFrame(updateThumbPosition);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    const resizeObserver = new ResizeObserver(handleScroll);
    resizeObserver.observe(container);
    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [scrollContainerRef, containerHeight, THUMB_VERTICAL_PADDING]);

  // Handle drag with optimized RAF updates
  useEffect(() => {
    if (!isDragging) {
      isDraggingRef.current = false;
      return;
    }

    isDraggingRef.current = true;
    const container = scrollContainerRef.current;
    if (!container) return;

    // Cache container measurements at drag start
    const containerRect = container.getBoundingClientRect();
    const availableHeight = containerHeight - THUMB_VERTICAL_PADDING * 2;
    const maxThumbTop = availableHeight - scrollThumbHeight;
    const { scrollHeight, clientHeight } = container;
    const maxScrollTop = scrollHeight - clientHeight;

    let dragRafId: number | null = null;
    let pendingMouseY: number | null = null;

    const updateDragPosition = () => {
      if (pendingMouseY === null) {
        dragRafId = null;
        return;
      }

      const mouseY = pendingMouseY;
      pendingMouseY = null;

      // Calculate thumb position based on absolute mouse Y position
      const relativeY = mouseY - containerRect.top - THUMB_VERTICAL_PADDING;
      const clampedY = Math.max(0, Math.min(relativeY, maxThumbTop));

      // Update thumb position for instant visual feedback
      setScrollThumbTop(THUMB_VERTICAL_PADDING + clampedY);

      // Convert thumb position to scroll percentage
      const scrollPercentage = maxThumbTop > 0 ? clampedY / maxThumbTop : 0;
      const newScrollTop = scrollPercentage * maxScrollTop;

      // Update scroll position
      container.scrollTop = newScrollTop;

      // Schedule next frame if there's a pending update
      if (pendingMouseY !== null) {
        dragRafId = requestAnimationFrame(updateDragPosition);
      } else {
        dragRafId = null;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      pendingMouseY = e.clientY;

      // Start RAF loop if not already running
      if (dragRafId === null) {
        dragRafId = requestAnimationFrame(updateDragPosition);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      if (dragRafId !== null) {
        cancelAnimationFrame(dragRafId);
      }
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: false });
    document.addEventListener("mouseup", handleMouseUp);

    // Prevent text selection globally during drag
    document.body.style.userSelect = "none";

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = "";
      if (dragRafId !== null) {
        cancelAnimationFrame(dragRafId);
      }
    };
  }, [isDragging, containerHeight, scrollThumbHeight, THUMB_VERTICAL_PADDING]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const getThumbWidth = () => {
    if (isDragging) return "6px";
    if (isHovered) return "6px";
    return "4px";
  };

  const getThumbBackground = () => {
    if (isDragging) return "rgba(255, 255, 255, 0.4)";
    if (isHovered) return "rgba(255, 255, 255, 0.4)";
    return "rgba(255, 255, 255, 0.2)";
  };

  if (scrollThumbHeight === 0 || scrollThumbHeight >= containerHeight) {
    return (
      <div className="relative">
        <div
          ref={scrollContainerRef}
          style={{
            maxHeight: `${containerHeight}px`,
            overflow: "auto",
            scrollbarWidth: "none",
          }}
          className="[&::-webkit-scrollbar]:hidden"
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        style={{
          maxHeight: `${containerHeight}px`,
          overflow: "auto",
          scrollbarWidth: "none",
        }}
        className="[&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
      <div
        ref={thumbRef}
        onMouseDown={handleMouseDown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: "absolute",
          right: "2px",
          top: `${scrollThumbTop}px`,
          width: getThumbWidth(),
          height: `${scrollThumbHeight}px`,
          background: getThumbBackground(),
          borderRadius: "2px",
          cursor: "default",
          transition: isDragging ? "none" : "background 0.15s ease-out, width 0.15s ease-out",
          pointerEvents: "auto",
          willChange: "transform",
          zIndex: 20,
        }}
      />
    </div>
  );
}
