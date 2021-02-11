import React from 'react';


const Layout: React.FC = ({ children }) => {
  return (
    <div className="container my-4 mx-auto px-2">
      {children}
    </div>
  );
};


export default Layout;
