import React from 'react';

import { Button, PageHeader, Space } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

import github from '../github';


export interface HeaderProps {
  title: string
  onBack?: () => void
  extra?: React.ReactNode
}

export const Header: React.FC<HeaderProps> = ({ title, onBack, extra }) => {
  return (
    <PageHeader
      title={title}
      subTitle=""
      onBack={onBack}
      ghost={false}
      extra={
        <Space size="middle">
          {extra}
          <Button
            key="GitHub"
            shape="circle"
            size="large"
            rel="noopener"
            href={github.link}
            target="_blank">
            <GithubOutlined />
          </Button>
        </Space>
      } />
  );
};
