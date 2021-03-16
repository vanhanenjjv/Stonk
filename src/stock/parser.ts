import dayjs from 'dayjs';
import { StockData } from '../types';


export function readCsv(csv: string): StockData[] {
  try {
    return csv
      .split('\n')
      .slice(1)
      .filter(line => line)
      .map(readStockData)
      .sort(compareByDate)
      .map(addSimpleMovingAverage5);
  } catch (error) {
    console.error(`Unable to parse line: '${error}'.`);

    return [];
  }
}

function readStockData(line: string): StockData {
  const [date, close, volume, open, high, low] = line.split(',').map(field => field.trim());

  if (!(date && close && volume && open && high && low))
    throw new Error(line);

  return {
    date: dayjs(date),
    close: dollar(close),
    volume: Number(volume),
    open: dollar(open),
    high: dollar(high),
    low: dollar(low),
    priceChange: Math.abs(dollar(high) - dollar(low))
  };
}

function compareByDate(a: StockData, b: StockData): number {
  return a.date.unix() - b.date.unix();
}

function addSimpleMovingAverage5(datum: StockData, index: number, all: StockData[]): StockData {
  if (index < 5)
    return datum;

  const sma5 = all
    .slice(index - 5, index)
    .reduce((sum, { close }) => sum += close, 0)
    / 5;

  const sma5Percentage = (1 - (sma5 / datum.open)) * 100;

  return { ...datum, sma5Percentage };
}

type DollarConstructor = (value: unknown) => number;

const dollar: DollarConstructor = value => {
  if (typeof value === 'number')
    return value;

  const str = String(value);

  return Number(
    str.startsWith('$')
      ? str.slice(1)
      : str
  );
};
