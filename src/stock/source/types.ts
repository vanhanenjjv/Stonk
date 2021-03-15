import { StockData } from '../../types';


export type Tab = 'file' | 'nasdaq';

export interface ViewProps {
  onSet: (data: StockData[]) => void
}

export type Model =
  { stockData: StockData[]
    tab: Tab };

export type Message =
  | { type: 'TAB_SET', tab: Tab }
  | { type: 'CONTENT_SET', content: string }
  | { type: 'STOCKDATA_CLEAR' }
