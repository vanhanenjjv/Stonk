import React from 'react';


import { LongestBullishTrend } from './LongestBullishTrend';
import { StockData } from '../../../types';


export interface StatisticsProps {
  stockData: StockData[]
}

export const Statistics: React.FC<StatisticsProps> = ({ stockData }) => {
  return (
    <LongestBullishTrend stockData={stockData} />
  );
};
