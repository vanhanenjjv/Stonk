import React from 'react';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

import StockData from '../stock-data';

import { Input, DateRange, useDateRange } from '.';

// import BiggestPriceChange from './BiggestPriceChange';
// import HighestVolume from './HighestVolume';
// import BestOpeningPrice from './BestOpeningPrice';
import { Table, TableDefinition } from './Table/Table';


dayjs.extend(isBetween);

interface AnalyticsProps {
  data: StockData[];
}

const dolores = (value: unknown): string => `$${value}`;

const table: TableDefinition<StockData> = {
  columns: {
    date:   { label: 'Date' },
    close:  { label: 'Close', formatter: dolores },
    high:   { label: 'High',  formatter: dolores },
    low:    { label: 'Low',   formatter: dolores },
    open:   { label: 'Open',  formatter: dolores },
    volume: { label: 'Volume' }
  }
};

export const Analytics: React.FC<AnalyticsProps> = ({ data }) => {
  const [dateRange, setDateRange] = useDateRange();

  const dataInRange = React.useMemo(() => data.filter(inDateRange), [data, dateRange]);

  return (
    <div className="grid grid-cols-1 gap-4">
      <Input type="date-range" onChange={setDateRange} />
      <Table
        definition={table}
        rows={dataInRange}
        rowKey={r => r.date} />
    </div>
  );


  function inDateRange({ date }: StockData): boolean {
    if (!dateRange)
      return true;

    if (dateRange.from && dateRange.to)
      return dayjs(date).isBetween(dateRange.from, dateRange.to, 'date');

    if (dateRange.from)
      return dayjs(date).isAfter(dateRange.from, 'date');

    if (dateRange.to)
      return dayjs(date).isBefore(dateRange.to, 'date');

    return true;
  }
};
