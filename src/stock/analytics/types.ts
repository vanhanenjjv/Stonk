import { Dayjs } from 'dayjs';

import { StockData } from '../../types';


export type DateRange = [Dayjs | null, Dayjs | null];

export type Model =
  { stockData: StockData[]
    stockDataInRange: StockData[]
    range: DateRange };

export type Message =
  | { type: 'SET_RANGE', range: DateRange }
