import React from 'react';

import { Layout as AntLayout, Typography } from 'antd';
import { GitHub } from '../types';


export interface LayoutProps {
  github: GitHub
}

export const Layout: React.FC<LayoutProps> = ({ github, children }) => {
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
        <Typography.Link
          type="secondary"
          rel="noopener"
          target="_blank"
          href={github.link}>
          {github.commitHash}
        </Typography.Link>
      </AntLayout.Footer>
    </AntLayout>
  );
};
