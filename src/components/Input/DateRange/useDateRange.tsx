import React from 'react';
import dayjs from 'dayjs';

import { DateRange } from './DateRangeInput';


interface DateRangeOptions {
  inclusiveLower: boolean;
  inclusiveUpper: boolean;
}

export function useDateRange(initialValue?: DateRange, options?: DateRangeOptions)
: [DateRange, (range: DateRange) => void] {
  const [range, setRange] = React.useState<DateRange>(initialValue ?? {
    from: dayjs().subtract(30, 'days'),
    to: dayjs()
  });

  return [range, handleRangeChange];


  function handleRangeChange(range: DateRange): void {
    if (range.from && options?.inclusiveLower)
      range.from = range.from.subtract(1, 'day');

    if (range.to && options?.inclusiveUpper)
      range.to = range.to.add(1, 'day');

    setRange(range);
  }
}
