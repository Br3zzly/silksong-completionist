import { useRef, useState, useEffect } from "react";

interface CustomScrollbarProps {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  containerHeight: number;
}

export function CustomScrollbar({ scrollContainerRef, containerHeight }: CustomScrollbarProps) {
  const thumbRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [scrollThumbHeight, setScrollThumbHeight] = useState(0);
  const [scrollThumbTop, setScrollThumbTop] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const PADDING = 4; // Top and bottom padding

  // Update scrollbar position based on scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      // Don't update thumb position while dragging to avoid conflict
      if (isDragging) return;

      const { scrollTop, scrollHeight, clientHeight } = container;

      if (scrollHeight <= clientHeight) {
        setScrollThumbHeight(0);
        return;
      }

      const availableHeight = containerHeight - PADDING * 2;
      const thumbHeightRatio = clientHeight / scrollHeight;
      const thumbHeight = Math.max(80, thumbHeightRatio * availableHeight);
      const maxThumbTop = availableHeight - thumbHeight;
      const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
      const thumbTop = PADDING + scrollPercentage * maxThumbTop;

      setScrollThumbHeight(thumbHeight);
      setScrollThumbTop(thumbTop);
    };

    container.addEventListener("scroll", handleScroll);
    const resizeObserver = new ResizeObserver(handleScroll);
    resizeObserver.observe(container);
    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
    };
  }, [scrollContainerRef, containerHeight, isDragging, PADDING]);

  // Handle drag
  useEffect(() => {
    if (!isDragging) return;

    const container = scrollContainerRef.current;
    if (!container) return;

    // Cache container rect at drag start
    const containerRect = container.getBoundingClientRect();
    const availableHeight = containerHeight - PADDING * 2;
    const maxThumbTop = availableHeight - scrollThumbHeight;
    const { scrollHeight, clientHeight } = container;
    const maxScrollTop = scrollHeight - clientHeight;

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      // Calculate thumb position based on absolute mouse Y position
      const relativeY = e.clientY - containerRect.top - PADDING;
      const clampedY = Math.max(0, Math.min(relativeY, maxThumbTop));

      // Update thumb position immediately for instant visual feedback
      setScrollThumbTop(PADDING + clampedY);

      // Convert thumb position to scroll percentage
      const scrollPercentage = maxThumbTop > 0 ? clampedY / maxThumbTop : 0;
      const newScrollTop = scrollPercentage * maxScrollTop;

      // Update scroll position (scroll event handler won't interfere due to isDragging check)
      container.scrollTop = newScrollTop;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: false });
    document.addEventListener("mouseup", handleMouseUp);

    // Prevent text selection globally during drag
    document.body.style.userSelect = "none";

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = "";
    };
  }, [isDragging, scrollContainerRef, containerHeight, scrollThumbHeight, PADDING]);

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
    return null;
  }

  return (
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
  );
}
