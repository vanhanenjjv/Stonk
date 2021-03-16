import React from 'react';

import { Layout as AntLayout, Typography } from 'antd';

import github from '../github';


export const Layout: React.FC = ({ children }) => {
  return (
    <AntLayout>
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
        <Typography.Link
          type="secondary"
          rel="noopener"
          target="_blank"
          href={`${github.link}/commit/${github.commitHash}`}>
          {github.commitHash}
        </Typography.Link>
      </AntLayout.Footer>
    </AntLayout>
  );
};
