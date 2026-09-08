import { CustomScrollbars } from "@/components/ui";
import { TableHeader, TableRow } from "./Presentation";
import type { TableProps } from "./types";

export function StandardTable<T>({
  columns,
  tableData,
  getRowKey,
  rowClassName,
  rowTitle,
  children,
  isFixedLayout,
  containerHeight = 800,
}: TableProps<T>) {
  return (
    <CustomScrollbars containerHeight={containerHeight}>
      <table className={"w-full border-collapse " + (isFixedLayout ? "table-fixed" : "table-auto")}>
        <TableHeader columns={columns} isFixedLayout={isFixedLayout} />
        <tbody>
          {Array.isArray(tableData)
            ? tableData.map((item, index) => (
                <TableRow
                  key={getRowKey(item)}
                  item={item}
                  index={index}
                  columns={columns}
                  rowClassName={rowClassName}
                  rowTitle={rowTitle}
                />
              ))
            : children}
        </tbody>
      </table>
    </CustomScrollbars>
  );
}
