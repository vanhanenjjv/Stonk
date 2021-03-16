import React from 'react';

import { Table as AntdTable } from 'antd';
import dayjs from 'dayjs';

import { StockData } from '../../../types';


export interface TableProps {
  stockData: StockData[]
}

export const Table: React.FC<TableProps> = ({ stockData }) => {
  return (
    <AntdTable
      scroll={{ x: true }}
      columns={[
        {
          title: 'Date',
          dataIndex: 'date',
          render: date => dayjs(date).format('ll'),
          sorter: (a, b) => a.date.unix() - b.date.unix()
        },
        {
          title: 'Close',
          dataIndex: 'close',
          render: value => `$${value}`,
          sorter: (a, b) => a.close - b.close
        },
        {
          title: 'Volume',
          dataIndex: 'volume',
          sorter: (a, b) => a.volume - b.volume
        },
        {
          title: 'Open',
          dataIndex: 'open',
          render: value => `$${value}`,
          sorter: (a, b) => a.open - b.open
        },
        {
          title: 'High',
          dataIndex: 'high',
          render: value => `$${value}`,
          sorter: (a, b) => a.high - b.high
        },
        {
          title: 'Low',
          dataIndex: 'low',
          render: value => `$${value}`,
          sorter: (a, b) => a.low - b.low
        },
        {
          title: 'Change',
          dataIndex: 'priceChange',
          render: value => `$${value.toFixed(2)}`,
          sorter: (a, b) => a.priceChange - b.priceChange
        },
        {
          title: 'SMA5',
          dataIndex: 'sma5Percentage',
          render: value => value ? `${value.toFixed(2)}%` : 'n/a',
          sorter: (a, b) => (a.sma5Percentage ?? 0) - (b.sma5Percentage ?? 0)
        }
      ]}
      dataSource={stockData}
      rowKey={r => r.date.unix()} />
  );
};
