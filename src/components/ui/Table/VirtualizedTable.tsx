import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { CustomScrollbar } from "./CustomScrollbar";
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
  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: tableData.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => estimatedRowHeight,
    overscan: 100,
  });

  const virtualItems = virtualizer.getVirtualItems();
  const paddingTop = virtualItems.length > 0 ? virtualItems[0].start : 0;
  const paddingBottom =
    virtualItems.length > 0 ? virtualizer.getTotalSize() - virtualItems[virtualItems.length - 1].end : 0;

  const renderRow = (virtualRow: (typeof virtualItems)[number]) => {
    const rowItem = tableData[virtualRow.index];
    const rowIndex = virtualRow.index;

    return (
      <tr
        key={virtualRow.key}
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
    <div>
      {/* Header table */}
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
      </table>

      {/* Scrollable body with custom scrollbar */}
      <div style={{ position: "relative" }}>
        <div
          ref={parentRef}
          className="virtual-scroll-container"
          style={{
            height: `${containerHeight}px`,
            overflow: "auto",
          }}
        >
          <table className={`w-full border-collapse ${isFixedLayout ? "table-fixed" : "table-auto"}`}>
            {isFixedLayout && (
              <colgroup>
                {columns.map((column, index) => (
                  <col key={index} style={column.width ? { width: column.width } : undefined} />
                ))}
              </colgroup>
            )}
            <tbody>
              {paddingTop > 0 && (
                <tr>
                  <td style={{ height: `${paddingTop}px` }} />
                </tr>
              )}
              {virtualItems.map(renderRow)}
              {paddingBottom > 0 && (
                <tr>
                  <td style={{ height: `${paddingBottom}px` }} />
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <CustomScrollbar scrollContainerRef={parentRef} containerHeight={containerHeight} />
      </div>
    </div>
  );
}
