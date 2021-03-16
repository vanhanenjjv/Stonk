import { Card, Col, Row, Statistic } from 'antd';
import React from 'react';

import { StockData } from '../../../types';


export interface LongestBullishTrendProps {
  stockData: StockData[]
}

export const LongestBullishTrend: React.FC<LongestBullishTrendProps> = ({ stockData }) => {
  const trend = React.useMemo(
    () => {
      const streak: { current: StockData[], longest: StockData[] } = { current: [], longest: [] };

      for (let i = 1; i < stockData.length; ++i) {
        const current = stockData[i];
        const previous = stockData[i - 1];

        if (previous.close > current.close) {
          streak.current = [];
          continue;
        }

        streak.current.push(current);

        if (streak.current > streak.longest)
          streak.longest = streak.current;
      }

      return streak.longest;
    },
    [stockData]
  );

  const [start, end] = React.useMemo(
    () => {
      const start = trend.length === 0 ? undefined : trend[0];
      const end = trend.length === 0 ? undefined : trend[trend.length - 1];

      return [start, end];
    },
    [trend]
  );

  const daysLasted = React.useMemo(() => trend.length, [trend]);

  const dateRange = React.useMemo(
    () => {
      const template = 'DD.MM.YYYY';
      const startDate = start?.date.format(template);
      const endDate = end?.date.format(template);

      return `${startDate} - ${endDate}`;
    },
    [start, end]
  );

  const priceIncrease = React.useMemo(
    () => {
      const startClose = start?.close ?? 0;
      const endClose = end?.close ?? 0;

      return (((endClose / startClose) - 1) * 100).toFixed(1);
    },
    [start, end]
  );

  return (
    <Card title="Longest bullish trend">
      <Row gutter={8} justify="space-around">
        <Col>
          <Statistic
            title="Lasted"
            value={daysLasted}
            suffix="days" />
        </Col>
        <Col>
          <Statistic
            title="From"
            value={dateRange} />
        </Col>
        <Col>
          <Statistic
            title="Value increased"
            value={priceIncrease}
            suffix="%" />
        </Col>
      </Row>
    </Card>
  );
};
