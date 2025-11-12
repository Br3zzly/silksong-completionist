import { useRef, useState } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { CustomScrollbars } from "@/components/ui";
import type { TableCell } from "./types";

interface VirtualizedTableProps<T> {
  columns: TableCell<T>[];
  tableData: T[];
  rowClassName?: string | ((item: T, rowIndex: number) => string);
  rowTitle?: string | ((item: T, rowIndex: number) => string | undefined);
  isFixedLayout?: boolean;
  estimatedRowHeight?: number;
  containerHeight?: number;
}

export function VirtualizedTable<T>({
  columns,
  tableData,
  rowClassName,
  rowTitle,
  isFixedLayout,
  estimatedRowHeight = 40,
  containerHeight = 800,
}: VirtualizedTableProps<T>) {
  const scrollElementRef = useRef<HTMLDivElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  const handleScrollElementReady = (element: HTMLDivElement) => {
    scrollElementRef.current = element;
    setIsReady(true);
  };

  const virtualizer = useVirtualizer({
    count: tableData.length,
    getScrollElement: () => scrollElementRef.current,
    estimateSize: () => estimatedRowHeight,
    overscan: 10,
  });

  const virtualItems = virtualizer.getVirtualItems();

  const itemsToRender = isReady ? virtualItems : [];
  const paddingTop = itemsToRender.length > 0 ? itemsToRender[0].start : 0;
  const paddingBottom =
    itemsToRender.length > 0 ? virtualizer.getTotalSize() - itemsToRender[itemsToRender.length - 1].end : 0;

  const renderRow = (virtualRow: (typeof virtualItems)[number]) => {
    const rowItem = tableData[virtualRow.index];
    const rowIndex = virtualRow.index;
    return (
      <tr
        key={rowIndex}
        className={typeof rowClassName === "function" ? rowClassName(rowItem, rowIndex) : rowClassName || ""}
        title={typeof rowTitle === "function" ? rowTitle(rowItem, rowIndex) : rowTitle}
      >
        {columns.map((column, colIndex) => {
          let cellClass = "px-2 py-1 truncate group-hover:whitespace-normal group-hover:break-words";
          if (typeof column.cellClassName === "function") {
            cellClass += " " + column.cellClassName(rowItem);
          } else {
            cellClass += " " + (column.cellClassName || "");
          }

          return (
            <td key={colIndex} className={cellClass}>
              {column.renderCell ? column.renderCell(rowItem, rowIndex) : null}
            </td>
          );
        })}
      </tr>
    );
  };

  return (
    <CustomScrollbars containerHeight={containerHeight} onScrollElementReady={handleScrollElementReady}>
      <table className={`w-full border-collapse ${isFixedLayout ? "table-fixed" : "table-auto"}`}>
        {isFixedLayout && (
          <colgroup>
            {columns.map((column, index) => (
              <col key={index} style={column.width ? { width: column.width } : undefined} />
            ))}
          </colgroup>
        )}
        <thead className="bg-transparent">
          <tr className="text-left border-b border-gray-600">
            {columns.map((column, index) => (
              <th key={index} className={column.headerClassName || "px-2 py-3 text-gray-300 font-medium"}>
                {column.header || ""}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {!isReady ? (
            <tr>
              <td colSpan={columns.length} style={{ height: `${containerHeight}px` }}>
                <div className="flex items-center justify-center h-full text-gray-400">Loading...</div>
              </td>
            </tr>
          ) : (
            <>
              {paddingTop > 0 && (
                <tr>
                  <td style={{ height: `${paddingTop}px` }} />
                </tr>
              )}
              {itemsToRender.map(renderRow)}
              {paddingBottom > 0 && (
                <tr>
                  <td style={{ height: `${paddingBottom}px` }} />
                </tr>
              )}
            </>
          )}
        </tbody>
      </table>
    </CustomScrollbars>
  );
}
