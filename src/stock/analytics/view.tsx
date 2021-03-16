import React from 'react';

import { Button, Col, Divider, Modal, PageHeader, Row, Space } from 'antd';
import { Dayjs } from 'dayjs';
import { RangeValue } from 'rc-picker/lib/interface';

import { Statistics, Chart, Table } from './components';
import useState from './state';
import { StockData } from '../../types';
import { File } from '../upload/components';
import { GithubOutlined } from '@ant-design/icons';
import { responsiveMap } from 'antd/lib/_util/responsiveObserve';
import { DatePicker, Header } from '../../components';


interface AnalyticsProps {
  stockData: StockData[]
  // records: StockData[]
  onBack: () => void
}

export default function Analytics(props: AnalyticsProps): JSX.Element {
  const [model, update] = useState({ records: props.stockData });

  const setRange = (range: RangeValue<Dayjs>): void =>
    update({ type: 'SET_RANGE', range: range ?? [null, null] });

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Header
        title="Analytics"
        onBack={props.onBack}
        extra={<DatePicker.RangePicker onChange={setRange} />} />
      <Divider>Statistics</Divider>
      <Statistics stockData={model.recordsInRange} />
      <Divider>Chart</Divider>
      <Chart stockData={model.recordsInRange} />
      <Divider>Table</Divider>
      <Table records={model.recordsInRange} />
    </Space>
  );
}
