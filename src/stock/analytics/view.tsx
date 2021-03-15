import React from 'react';

import { Divider, PageHeader, Space } from 'antd';
import { Dayjs } from 'dayjs';
import { RangeValue } from 'rc-picker/lib/interface';

import { Statistics, Chart, Table, Controls } from './components';
import useState from './state';
import { StockData } from '../../types';


interface AnalyticsProps {
  records: StockData[]
  onBack: () => void
}

export default function Analytics(props: AnalyticsProps): JSX.Element {
  const [model, update] = useState({ allRecords: props.records });

  const setRange = (range: RangeValue<Dayjs>): void =>
    update({ type: 'SET_RANGE', range: range ?? [null, null] });

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <PageHeader
        title="Analytics"
        ghost={false}
        extra={<Controls onRangeChange={setRange} />}
        onBack={props.onBack} />
      <Divider>Statistics</Divider>
      <Statistics records={model.recordsInRange} />
      <Divider>Chart</Divider>
      <Chart records={model.recordsInRange} />
      <Divider>Table</Divider>
      <Table records={model.recordsInRange} />
    </Space>
  );
}
