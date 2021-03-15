import React from 'react';

import { Layout as AntLayout } from 'antd';


export const Layout: React.FC = ({ children }) => {
  return (
    <AntLayout style={{ height: '100%' }}>
      <AntLayout.Content
        style={{
          width: '100%',
          alignSelf: 'center',
          maxWidth: 900,
          padding: '0 16px',
          margin: '16px 0 0 0'
        }}>
        {children}
      </AntLayout.Content>
      <AntLayout.Footer style={{ textAlign: 'center' }}>
        COMMIT_HASH
      </AntLayout.Footer>
    </AntLayout>
  );
};
