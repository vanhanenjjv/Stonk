import React from 'react';

import { Dayjs } from 'dayjs';

import { DateRange } from './date-range';
import { Input } from '..';


export interface DateRangeInputProps {
  from?: Dayjs | null;
  to?: Dayjs | null;
  contained?: boolean;
  onChange?: (range: DateRange) => void;
  type: 'date-range';
}

export const DateRangeInput: React.FC<DateRangeInputProps> = props => {
  const [from, setFrom] = React.useState(props.from);
  const [to,   setTo]   = React.useState(props.to);

  React.useEffect(() => {
    if (props.onChange)
      props.onChange({ from: from ?? null, to: to ?? null });
  }, [from, to]);

  return (

    <div className={'grid sm:grid-cols-2 grid-cols-1 gap-4 shadow border-b rounded-lg bg-gray-50 p-4'}>
      <div>
        <label className="block text-sm font-medium text-gray-700 px-3">From</label>
        <div className="mt-1 rounded-md shadow-sm flex">
          <Input
            type="date"
            onChange={setFrom}
            name="date-range-from"
            id="date-range-from"
            className="relative block flex-1 p-3 text-gray-700 sm:text-sm border-gray-300 rounded-md" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 px-3">To</label>
        <div className="mt-1 rounded-md shadow-sm flex">
          <Input
            type="date"
            onChange={setTo}
            name="date-range-to"
            id="date-range-to"
            className="relative block flex-1 p-3 sm:text-sm text-gray-700 border-gray-300 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export type { DateRange };
