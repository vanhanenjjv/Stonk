import React from 'react';

import * as parser from '../parser';
import { Message, Model } from './types';


export default (): [Model, React.Dispatch<Message>] => {
  const initialValue: Model = {
    stockData: [],
    tab: 'file'
  };

  const update = (model: Model, message: Message): Model => {
    switch (message.type) {
    case 'TAB_SET': {
      return {
        ...model,
        tab: message.tab
      };
    }
    case 'CONTENT_SET': {
      const stockData = parser.readCsv(message.content);

      return { ...model, stockData };
    }
    case 'STOCKDATA_CLEAR':
      return {
        ...model,
        stockData: []
      };
    }
  };

  return React.useReducer(update, initialValue);
};
