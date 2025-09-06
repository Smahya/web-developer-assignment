import { TableColumn, TableProps } from "@/types/shared";
import { Loader } from "../Loader/Loader";
import { Paginator } from "./Paginator";
import { cn } from "@/lib/utils";
import { DEFAULT_PAGINATION_PARAMS } from "@/utils/constants";

export const TableComponent = <
  T extends Record<string, unknown> & { id: string | number }
>({
  columns,
  data,
  loading = false,
  total = 0,
  page = DEFAULT_PAGINATION_PARAMS.pageNumber,
  pageSize = DEFAULT_PAGINATION_PARAMS.pageSize,
  handleRowClick,
  setPage,
}: TableProps<T>) => {
  return (
    <div className="w-full grid grid-cols-[100%]">
      <div className="w-full rounded-lg border border-gray-200 overflow-x-auto">
        <table className="w-full table-fixed min-w-2xl">
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className="py-3 px-6 text-xs text-left font-medium text-gray-600 truncate overflow-hidden whitespace-nowrap"
                  style={{ width: column.width || "auto" }}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center h-[211.5px]"
                >
                  <Loader />
                </td>
              </tr>
            ) : (
              <TableContent
                data={data}
                columns={columns}
                handleRowClick={handleRowClick}
              />
            )}
          </tbody>
        </table>
      </div>
      {total ? (
        <div className="flex justify-end mt-6">
          <Paginator
            total={total}
            pageSize={pageSize}
            page={page}
            setPage={(page) => setPage?.(page)}
          />
        </div>
      ) : null}
    </div>
  );
};

function TableContent<
  T extends Record<string, unknown> & { id: string | number }
>({
  data,
  columns,
  handleRowClick,
}: {
  data: T[];
  columns: TableColumn<T>[];
  handleRowClick?: (row: T) => void;
}) {
  return (
    <>
      {data?.length ? (
        <>
          {data.map((row, i) => (
            <tr
              key={String(row.id)}
              className={cn(
                "hover:bg-gray-50",
                handleRowClick && "cursor-pointer"
              )}
              onClick={() => handleRowClick?.(row)}
            >
              {columns.map((column) => (
                <td
                  key={String(column.key)}
                  className={cn(
                    "py-4 px-6 text-sm font-medium border-b text-gray-600 ",
                    i === data.length - 1
                      ? "border-transparent"
                      : " border-gray-200"
                  )}
                  style={{ maxWidth: "0" }}
                >
                  <div className="truncate overflow-hidden whitespace-nowrap">
                    {column.render
                      ? column.render(row[column.key], row)
                      : String(row[column.key] ?? "")}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </>
      ) : (
        <tr>
          <td colSpan={columns.length} className="text-center h-[211.5px]">
            <p className="text-gray-600">No data available</p>
          </td>
        </tr>
      )}
    </>
  );
}
