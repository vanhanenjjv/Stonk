import { Dayjs } from 'dayjs';
import { StockData } from '../../types';


export type Model =
  { allRecords: StockData[]
    recordsInRange: StockData[]
    range: [Dayjs | null, Dayjs | null] };

export type Message =
  | { type: 'SET_RANGE', range: [Dayjs | null, Dayjs | null] }
