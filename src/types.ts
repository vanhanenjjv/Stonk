import { Dayjs } from 'dayjs';


export type GitHub =
  { username: string
    repository: string
    commitHash: string
    link: string }

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
