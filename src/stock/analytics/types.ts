import { Dayjs } from 'dayjs';
import { StockData } from '../../types';


export type File =
  { name: string
    text: string };

export type DateRange = [Dayjs | null, Dayjs | null];

export type Model =
  { records: StockData[]
    recordsInRange: StockData[]
    range: DateRange
    uploadModalVisible: boolean };

export type Message =
  | { type: 'SET_RANGE', range: DateRange }
  | { type: 'SHOW_MODAL' }
  | { type: 'HIDE_MODAL' }
