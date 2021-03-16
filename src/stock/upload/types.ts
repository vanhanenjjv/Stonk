import { StockData } from '../../types';


export type Model =
  { stockData: StockData[] };

export type Message =
  | { type: 'PARSE_FILE', content: string }
  | { type: 'CLEAR_STOCKDATA' }
