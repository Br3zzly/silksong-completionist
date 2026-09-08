import type { ReactNode } from "react";

export interface TableCell<T = unknown> {
  header?: string;
  width?: string;
  cellClassName?: string | ((item: T) => string);
  headerClassName?: string;
  renderCell?: (item: T, rowIndex: number) => ReactNode;
}

export interface TableProps<T = unknown> {
  columns: TableCell<T>[];
  tableData?: T[];
  getRowKey: (item: T) => string;
  containerHeight?: number;
  estimatedRowHeight?: number;
  rowClassName?: string | ((item: T, rowIndex: number) => string);
  rowTitle?: string | ((item: T, rowIndex: number) => string | undefined);
  children?: ReactNode;
  isFixedLayout?: boolean;
  enableVirtualization?: boolean;
}
