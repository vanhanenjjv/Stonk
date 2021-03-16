import React from 'react';

import { Stock } from '@ant-design/charts';

import { StockData } from '../../../types';
import { Card } from 'antd';


export interface ChartProps {
  stockData: StockData[]
}

export const Chart: React.FC<ChartProps> = props => {
  const stockData = React.useMemo(
    () => props.stockData.map(d => ({
      ...d,
      date: d.date.format('YYYY-MM-DD')
    })),
    [props.stockData]
  );

  return (
    <Card>
      <Stock
        width={400}
        height={500}
        xField="date"
        yField={['open', 'close', 'high', 'low']}
        data={stockData} />
    </Card>
  );
};
