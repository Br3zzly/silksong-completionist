import type { Ref } from "react";
import type { TableCell, TableProps } from "./types";

export function TableHeader<T>({ columns, isFixedLayout }: Pick<TableProps<T>, "columns" | "isFixedLayout">) {
  return (
    <>
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
            <th key={index} scope="col" className={column.headerClassName || "px-2 py-3 text-gray-300 font-medium"}>
              {column.header || ""}
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
}

export function TableRow<T>({
  item,
  index,
  columns,
  rowClassName,
  rowTitle,
  measureRef,
}: {
  item: T;
  index: number;
  columns: TableCell<T>[];
  measureRef?: Ref<HTMLTableRowElement>;
} & Pick<TableProps<T>, "rowClassName" | "rowTitle">) {
  return (
    <tr
      ref={measureRef}
      data-index={index}
      className={typeof rowClassName === "function" ? rowClassName(item, index) : rowClassName || ""}
      title={typeof rowTitle === "function" ? rowTitle(item, index) : rowTitle}
    >
      {columns.map((column, colIndex) => (
        <td
          key={colIndex}
          className={
            "px-2 py-1 truncate group-hover:whitespace-normal group-hover:break-words " +
            (typeof column.cellClassName === "function" ? column.cellClassName(item) : column.cellClassName || "")
          }
        >
          {column.renderCell?.(item, index)}
        </td>
      ))}
    </tr>
  );
}
