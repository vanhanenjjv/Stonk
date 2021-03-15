import { Dayjs } from 'dayjs';


export type View = 'stock-source' | 'stock-analytics';

export type StockData =
  {	date: Dayjs
    close: number
    volume: number
    open: number
    high: number
    low: number
    priceChange: number
    sma5Percentage?: number };
