import React from 'react';

import { Card, Col, Row, Statistic } from 'antd';

import { StockData } from '../../../types';


export interface StatisticsProps {
  records: StockData[]
}

export const Statistics: React.FC<StatisticsProps> = props => {
  return (
    <LongestBullishTrend />
  );

  function LongestBullishTrend(): JSX.Element {
    const trend = React.useMemo(
      () => {
        const streak: { current: StockData[], longest: StockData[] } = { current: [], longest: [] };

        for (let i = 1; i < props.records.length; ++i) {
          const current = props.records[i];
          const previous = props.records[i - 1];

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
      [props.records]
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
  }
};
