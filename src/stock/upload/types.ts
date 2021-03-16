import { StockData } from '../../types';


export type File =
  { name: string
    text: string };

export type StockDataSource =
  { name: string
    data: StockData[] };

export type Model =
  { source?: StockDataSource };

export type Message =
  | { type: 'SET_SOURCE', file: File }
  | { type: 'CLEAR_SOURCE' }
