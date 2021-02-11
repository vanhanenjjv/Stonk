import React from 'react';


type TableRowProps = { s?: unknown };

const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return (
    <tr>
      {children}
    </tr>
  );

};

export default TableRow;
