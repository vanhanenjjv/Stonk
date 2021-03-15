import React from 'react';

import { Space } from 'antd';
import { RangeValue } from 'rc-picker/lib/interface';
import { Dayjs } from 'dayjs';

import { DatePicker } from '../../../components';


export interface ControlsProps {
  onRangeChange: (range: RangeValue<Dayjs>) => void
}

export const Controls: React.FC<ControlsProps> = props => {
  return (
    <Space>
      <DatePicker.RangePicker onChange={props.onRangeChange} />
    </Space>
  );
};
