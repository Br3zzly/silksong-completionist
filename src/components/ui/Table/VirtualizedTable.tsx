import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { CustomScrollbars } from "@/components/ui";
import { TableHeader, TableRow } from "./Presentation";
import type { TableProps } from "./types";

export function VirtualizedTable<T>({
  columns,
  tableData,
  getRowKey,
  rowClassName,
  rowTitle,
  isFixedLayout,
  estimatedRowHeight = 56,
  containerHeight = 800,
}: TableProps<T> & { tableData: T[] }) {
  const [scrollElement, setScrollElement] = useState<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLTableSectionElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const getItemKey = useCallback((index: number) => getRowKey(tableData[index]), [getRowKey, tableData]);
  const virtualizer = useVirtualizer({
    count: tableData.length,
    getScrollElement: () => scrollElement,
    getItemKey,
    estimateSize: () => estimatedRowHeight,
    scrollMargin: headerHeight,
    overscan: 10,
  });
  useLayoutEffect(() => {
    const header = bodyRef.current?.previousElementSibling;
    if (!header) return;
    const measure = () => setHeaderHeight(header.getBoundingClientRect().height);
    const observer = new ResizeObserver(measure);
    observer.observe(header);
    measure();
    return () => observer.disconnect();
  }, []);

  const virtualItems = virtualizer.getVirtualItems();
  const paddingTop = virtualItems.length ? Math.max(0, virtualItems[0].start - headerHeight) : 0;
  const paddingBottom = virtualItems.length
    ? Math.max(0, virtualizer.getTotalSize() - (virtualItems[virtualItems.length - 1].end - headerHeight))
    : 0;
  return (
    <CustomScrollbars containerHeight={containerHeight} onScrollElementReady={setScrollElement}>
      <table className={"w-full border-collapse " + (isFixedLayout ? "table-fixed" : "table-auto")}>
        <TableHeader columns={columns} isFixedLayout={isFixedLayout} />
        <tbody ref={bodyRef}>
          {!scrollElement && (
            <tr>
              <td colSpan={columns.length} style={{ height: containerHeight }}>
                <div className="flex items-center justify-center h-full text-gray-400">Loading...</div>
              </td>
            </tr>
          )}
          {paddingTop > 0 && (
            <tr aria-hidden="true">
              <td colSpan={columns.length} style={{ height: paddingTop, padding: 0 }} />
            </tr>
          )}
          {virtualItems.map(row => (
            <TableRow
              key={row.key}
              item={tableData[row.index]}
              index={row.index}
              columns={columns}
              rowClassName={rowClassName}
              rowTitle={rowTitle}
              measureRef={virtualizer.measureElement}
            />
          ))}
          {paddingBottom > 0 && (
            <tr aria-hidden="true">
              <td colSpan={columns.length} style={{ height: paddingBottom, padding: 0 }} />
            </tr>
          )}
        </tbody>
      </table>
    </CustomScrollbars>
  );
}
