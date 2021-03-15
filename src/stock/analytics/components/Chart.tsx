import React from 'react';

import { Stock } from '@ant-design/charts';

import { StockData } from '../../../types';
import { Card } from 'antd';


export interface ChartProps {
  records: StockData[]
}

export const Chart: React.FC<ChartProps> = ({ records }) => {
  const data = React.useMemo(
    () => records.map(record => ({
      ...record,
      date: record.date.format('YYYY-MM-DD')
    })),
    [records]
  );

  return (
    <Card>
      <Stock
        width={400}
        height={500}
        xField="date"
        yField={['open', 'close', 'high', 'low']}
        data={data} />
    </Card>
  );
};
