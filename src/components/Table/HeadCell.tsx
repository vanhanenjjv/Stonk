import { randomInt } from 'crypto';
import React from 'react';


interface HeadCellProps {
  onSortBy?: (column: string) => void;
  sortedBy?: boolean;
}

const HeadCell: React.FC<HeadCellProps> = ({ children, onSortBy, sortedBy = false }) => {

  //
  return (
    <th scope="col"
      className="px-6 py-3 text-left text text-xs font-medium text-gray-500 uppercase tracking-wider"
      onClick={() => console.log('yeet')}>
      <span className="cursor-pointer">{children}</span>
    </th>
  );
};


export default HeadCell;
