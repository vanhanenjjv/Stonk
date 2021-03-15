import React from 'react';

import { Card } from 'antd';

import { File } from './components';
import useState from './state';
import { StockData } from '../../types';


export interface UploadProps {
  onUpload: (stockData: StockData[]) => void
}

export default function Upload(props: UploadProps): JSX.Element {
  const [{ stockData }, update] = useState();

  React.useEffect(() => {
    if (stockData.length > 0)
      props.onUpload(stockData);

    return () => {
      update({ type: 'CLEAR_FILE' });
    };

  }, [stockData]);

  const setFile = (file: string): void => {
    update({ type: 'SET_FILE', file });
  };

  return (
    <Card>
      <File onReceive={setFile} />
    </Card>
  );
}
