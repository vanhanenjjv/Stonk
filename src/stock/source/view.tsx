import React from 'react';

import { Card, Input, Upload } from 'antd';
import { RcFile } from 'antd/lib/upload/interface';

import { File } from './components';
import useState from './state';
import { ViewProps } from './types';


export default function View(props: ViewProps): JSX.Element {
  const [{ stockData }, update] = useState();

  React.useEffect(() => {
    if (stockData.length > 0)
      props.onSet(stockData);

    return () => {
      update({ type: 'STOCKDATA_CLEAR' });
    };

  }, [stockData]);

  const setFile = (content: string): void => {
    update({ type: 'CONTENT_SET', content });
  };

  return (
    <Card>
      <File onReceive={setFile} />
    </Card>
  );
}
