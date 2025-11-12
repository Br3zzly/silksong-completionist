import { useRef, useState, useEffect } from "react";
import type { ReactNode } from "react";
import ScrollThumb from "./ScrollThumb";

interface CustomScrollbarsProps {
  children: ReactNode;
  containerHeight?: number;
  containerWidth?: number;
  onScrollElementReady?: (element: HTMLDivElement) => void;
}

// Padding from container edges (top/bottom for vertical, left/right for horizontal)
export const THUMB_PADDING = 4;

export function CustomScrollbars({
  children,
  containerHeight,
  containerWidth,
  onScrollElementReady,
}: CustomScrollbarsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [verticalThumbHeight, setVerticalThumbHeight] = useState(0);
  const [verticalThumbTop, setVerticalThumbTop] = useState(0);

  const [horizontalThumbWidth, setHorizontalThumbWidth] = useState(0);
  const [horizontalThumbLeft, setHorizontalThumbLeft] = useState(0);

  // Use refs to avoid triggering re-renders during scroll/drag
  const rafIdRef = useRef<number | null>(null);

  // Notify parent when scroll element is ready
  useEffect(() => {
    if (scrollContainerRef.current && onScrollElementReady) {
      onScrollElementReady(scrollContainerRef.current);
    }
  }, [onScrollElementReady]);

  // Update scrollbar positions based on scroll using requestAnimationFrame
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const updateThumbPositions = () => {
      // Update vertical thumb
      const { scrollTop, scrollHeight, clientHeight } = container;

      if (scrollHeight <= clientHeight) {
        setVerticalThumbHeight(0);
      } else {
        const availableHeight = (containerHeight || clientHeight) - THUMB_PADDING * 2;
        const thumbHeightRatio = clientHeight / scrollHeight;
        const thumbHeight = Math.max(80, thumbHeightRatio * availableHeight);
        const maxThumbTop = availableHeight - thumbHeight;
        const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
        const thumbTop = THUMB_PADDING + scrollPercentage * maxThumbTop;

        setVerticalThumbHeight(thumbHeight);
        setVerticalThumbTop(thumbTop);
      }

      // Update horizontal thumb
      const { scrollLeft, scrollWidth, clientWidth } = container;

      if (scrollWidth <= clientWidth) {
        setHorizontalThumbWidth(0);
      } else {
        const availableWidth = (containerWidth || clientWidth) - THUMB_PADDING * 2;
        const thumbWidthRatio = clientWidth / scrollWidth;
        const thumbWidth = Math.max(80, thumbWidthRatio * availableWidth);
        const maxThumbLeft = availableWidth - thumbWidth;
        const scrollPercentage = scrollLeft / (scrollWidth - clientWidth);
        const thumbLeft = THUMB_PADDING + scrollPercentage * maxThumbLeft;

        setHorizontalThumbWidth(thumbWidth);
        setHorizontalThumbLeft(thumbLeft);
      }
    };

    const handleScroll = () => {
      // Cancel any pending animation frame
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }

      // Schedule update on next animation frame for smooth 60fps updates
      rafIdRef.current = requestAnimationFrame(updateThumbPositions);
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
  }, [containerHeight, containerWidth]);

  // Drag handlers are implemented via ScrollThumb and delegated back here
  const onThumbVerticalDragMove = (clientY: number, clickOffset: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const availableHeight = (containerHeight || container.clientHeight) - THUMB_PADDING * 2;
    const maxThumbTop = Math.max(0, availableHeight - verticalThumbHeight);
    const { scrollHeight, clientHeight } = container;
    const maxScrollTop = Math.max(0, scrollHeight - clientHeight);

    // Position thumb so that the click point stays under the mouse
    const relativeY = clientY - containerRect.top - THUMB_PADDING - clickOffset;
    const clampedY = Math.max(0, Math.min(relativeY, maxThumbTop));

    // Update thumb position for instant visual feedback
    setVerticalThumbTop(THUMB_PADDING + clampedY);

    // Convert thumb position to scroll percentage and update scroll
    const scrollPercentage = maxThumbTop > 0 ? clampedY / maxThumbTop : 0;
    const newScrollTop = scrollPercentage * maxScrollTop;
    container.scrollTop = newScrollTop;
  };

  const onThumbHorizontalDragMove = (clientX: number, clickOffset: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const availableWidth = (containerWidth || container.clientWidth) - THUMB_PADDING * 2;
    const maxThumbLeft = Math.max(0, availableWidth - horizontalThumbWidth);
    const { scrollWidth, clientWidth } = container;
    const maxScrollLeft = Math.max(0, scrollWidth - clientWidth);

    // Position thumb so that the click point stays under the mouse
    const relativeX = clientX - containerRect.left - THUMB_PADDING - clickOffset;
    const clampedX = Math.max(0, Math.min(relativeX, maxThumbLeft));

    setHorizontalThumbLeft(THUMB_PADDING + clampedX);

    const scrollPercentage = maxThumbLeft > 0 ? clampedX / maxThumbLeft : 0;
    const newScrollLeft = scrollPercentage * maxScrollLeft;
    container.scrollLeft = newScrollLeft;
  };

  // Show vertical scrollbar if content is taller
  const showVerticalScrollbar =
    verticalThumbHeight > 0 && (containerHeight ? verticalThumbHeight < containerHeight : true);

  // Show horizontal scrollbar if content is wider
  const showHorizontalScrollbar = horizontalThumbWidth > 0;

  return (
    <div className="relative" style={containerWidth ? { maxWidth: `${containerWidth}px` } : undefined}>
      <div
        ref={scrollContainerRef}
        style={containerHeight ? { maxHeight: `${containerHeight}px` } : undefined}
        className="overflow-auto scrollbar-hidden [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
      {showVerticalScrollbar && (
        <ScrollThumb
          orientation="vertical"
          pos={verticalThumbTop}
          length={verticalThumbHeight}
          onDragMove={onThumbVerticalDragMove}
        />
      )}
      {showHorizontalScrollbar && (
        <ScrollThumb
          orientation="horizontal"
          pos={horizontalThumbLeft}
          length={horizontalThumbWidth}
          onDragMove={onThumbHorizontalDragMove}
        />
      )}
    </div>
  );
}
