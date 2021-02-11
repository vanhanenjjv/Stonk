import React from 'react';


const BodyCell: React.FC = ({ children }) => {
  return (
    <td className="px-6 py-4 whitespace-nowrap">
      {children}
    </td>
  );
};


export default BodyCell;
