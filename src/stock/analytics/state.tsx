import dayjs from 'dayjs';
import React from 'react';
import { Message, Model } from './types';


export default ({ allRecords }: Partial<Model>): [Model, React.Dispatch<Message>] => {
  const initialState: Model = {
    allRecords: allRecords ?? [],
    recordsInRange: allRecords ?? [],
    range: [null, null]
  };

  const reducer = (model: Model, message: Message): Model => {
    switch (message.type) {
    case 'SET_RANGE': {
      return {
        ...model,
        recordsInRange: model.allRecords.filter(r => {
          const date = dayjs(r.date);
          const from = message.range?.[0]?.subtract(1, 'day');
          const to   = message.range?.[1]?.add(1, 'day');

          if (from && !to) return date.isAfter(from, 'day');
          if (!from && to) return date.isBefore(to, 'day');
          if (from && to)  return date.isBetween(from, to, 'day');

          return true;
        }),
        range: message.range
      };
    }
    }
  };

  return React.useReducer(reducer, initialState);
};
