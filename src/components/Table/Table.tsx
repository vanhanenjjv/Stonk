import React from 'react';

import Pagination from '../Pagination';

import TableBody from './TableBody';
import TableHead from './TableHead';
import TableRow from './TableRow';


type Column<T> =
  { label: string,
    sorter?: (a: T, b: T) => number,
    formatter?: (field: unknown) => string };

type TableDefinition<T> =
  { columns: Record<keyof T, Column<T>> }

interface TableProps<T> {
  definition: TableDefinition<T>;
  rows: T[];
  rowKey: (record: T) => string;
}

function Table<T>({ definition, rowKey, rows }: TableProps<T>): ReturnType<React.FC<TableProps<T>>> {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const visibleRows = React.useMemo(
    () => rows.slice(page * rowsPerPage, (page + 1) * rowsPerPage),
    [rows, page, rowsPerPage]
  );

  return (
    <div className="flex flex-col rounded overflow-hidden shadow">
      <div className="overflow-x-auto">
        <div className="inline-flex min-w-full rounded-t-lg">
          <table className="divide-y divide-gray-200 flex-1">
            <TableHead>
              <TableRow>
                {Object.entries<Column<T>>(definition.columns).map(([prop, column]) => (
                  <TableHead.Cell key={prop}>{column.label}</TableHead.Cell>)
                )}
              </TableRow>
            </TableHead>
            <TableBody columns={definition.columns} rowKey={rowKey} rows={visibleRows} />
          </table>
        </div>
      </div>
      <div className="bg-gray-50 p-3 border-b border-t flex justify-end rounded-b-lg">
        <Pagination
          pages={Math.ceil(rows.length / 10)}
          page={page}
          onChangePage={setPage} />
      </div>
    </div>
  );
}

export { Table };
export type { TableDefinition, Column, TableProps };
