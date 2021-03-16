import React from 'react';

import { Card, Space } from 'antd';

import { StockData } from '../../types';
import { Header } from '../../components';
import { File } from './components';
import useState from './state';


export interface UploadProps {
  onUpload: (stockData: StockData[]) => void
}

export default function Upload(props: UploadProps): JSX.Element {
  const [{ stockData }, update] = useState();

  React.useEffect(() => {
    if (stockData.length !== 0) {
      props.onUpload(stockData);
      update({ type: 'CLEAR_STOCKDATA' });
    }

  }, [stockData]);

  const receiveFile = (content: string): void => {
    update({ type: 'PARSE_FILE', content });
  };

  return (
    <Space style={{ width: '100%' }} direction="vertical">
      <Header title="Upload" />
      <Card><File onReceive={receiveFile} /></Card>
    </Space>
  );
}
