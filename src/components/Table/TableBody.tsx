import React from 'react';
import BodyCell from './BodyCell';
import { Column } from './Table';
import TableRow from './TableRow';


interface TableBodyProps<T> {
  columns: Record<keyof T, Column<T>>;
  rows: T[];
  rowKey: (row: T) => string;
}

function TableBody<T>(props: TableBodyProps<T>): ReturnType<React.FC<TableBodyProps<T>>> {
  const { columns, rows, rowKey } = props;

  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {rows.map((row, index) => (
        <TableRow key={rowKey(row)}>
          {(Object.entries<Column<T>>(columns).map(([name, column], index) => {
            const val = column.formatter
              ? column.formatter((row as any)[name])
              : (row as any)[name];

            return (
              <BodyCell key={index}>
                {val}
              </BodyCell>
            );
          }))}
        </TableRow>
      ))}
    </tbody>
  );
}


export default TableBody;
