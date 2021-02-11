import React from 'react';
import HeadCell from './HeadCell';


interface TableHeadInnerComponents {
  Cell: typeof HeadCell;
}

const TableHead: React.FC & TableHeadInnerComponents = ({ children }) => {
  return (
    <thead className="p-4 bg-gray-50">
      {children}
    </thead>
  );
};

TableHead.Cell = HeadCell;


export default TableHead;
