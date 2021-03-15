import React from 'react';

import { Popover, Table as AntdTable, Typography } from 'antd';
import dayjs from 'dayjs';

import { StockData } from '../../../types';


export interface TableProps {
  records: StockData[]
}

export const Table: React.FC<TableProps> = ({ records }) => {
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
          render: SMA5Cell,
          sorter: (a, b) => (a.sma5Percentage ?? 0) - (b.sma5Percentage ?? 0)
        }
      ]}
      dataSource={records}
      rowKey={r => r.date.unix()} />
  );

  function SMA5Cell(value: number): JSX.Element {
    console.log(value);

    return value
      ? <span>{value.toFixed(2)}%</span>
      : (
        <Popover
          title="Error"
          content={
            <div>
              <Typography.Paragraph>
                Not enough prior days to calculate simple moving average for five days.
              </Typography.Paragraph>
            </div>
          }>
          n/a
        </Popover>
      );
  }
};
