import React from 'react';

import { Card, Space } from 'antd';

import { StockData } from '../../types';
import { Header } from '../../components';
import { File } from './components';
import useState from './state';
import { File as IFile } from './types';


export interface UploadProps {
  onUpload: (stockData: StockData[]) => void
}

export default function Upload(props: UploadProps): JSX.Element {
  const [{ source }, update] = useState();

  React.useEffect(() => {
    if (source?.data?.length && source.data.length > 0) {
      props.onUpload(source?.data);
      update({ type: 'CLEAR_SOURCE' });
    }

  }, [source?.data]);

  const receiveFile = (file: IFile): void => {
    update({ type: 'SET_SOURCE', file });
  };

  return (
    <Space style={{ width: '100%' }} direction="vertical">
      <Header title="Upload" />
      <Card><File onReceive={receiveFile} /></Card>
    </Space>
  );
}
