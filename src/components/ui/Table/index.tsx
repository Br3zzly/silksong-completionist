import { StandardTable } from "./StandardTable";
import { VirtualizedTable } from "./VirtualizedTable";
import type { TableProps } from "./types";

export function Table<T = unknown>(props: TableProps<T>) {
  const { enableVirtualization, tableData, ...rest } = props;

  // Use virtualized table for large datasets
  if (enableVirtualization && Array.isArray(tableData) && tableData.length > 0) {
    return <VirtualizedTable tableData={tableData} {...rest} />;
  }

  // Use standard table for small datasets or custom children
  return <StandardTable tableData={tableData} {...rest} />;
}

export type { TableCell, TableProps } from "./types";
