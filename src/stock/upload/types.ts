import { StockData } from '../../types';


export type Model =
  { stockData: StockData[] };

export type Message =
  | { type: 'SET_FILE', file: string }
  | { type: 'CLEAR_FILE' }
