import React from 'react';

import { Divider, Space } from 'antd';
import { Dayjs } from 'dayjs';
import { RangeValue } from 'rc-picker/lib/interface';

import { Statistics, Chart, Table } from './components';
import useState from './state';
import { StockData } from '../../types';
import { DatePicker, Header } from '../../components';


interface AnalyticsProps {
  stockData: StockData[]
  onBack: () => void
}

export default function Analytics(props: AnalyticsProps): JSX.Element {
  const [model, update] = useState({ stockData: props.stockData });

  const setRange = (range: RangeValue<Dayjs>): void =>
    update({ type: 'SET_RANGE', range: range ?? [null, null] });

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Header
        title="Analytics"
        onBack={props.onBack}
        extra={<DatePicker.RangePicker onChange={setRange} />} />
      <Divider>Statistics</Divider>
      <Statistics stockData={model.stockData} />
      <Divider>Chart</Divider>
      <Chart stockData={model.stockData} />
      <Divider>Table</Divider>
      <Table stockData={model.stockData} />
    </Space>
  );
}
