import React from 'react';

import * as parser from '../parser';
import { Message, Model } from './types';


export default (): [Model, React.Dispatch<Message>] => {
  const initialValue: Model = {
    stockData: []
  };

  const update = (model: Model, message: Message): Model => {
    switch (message.type) {
    case 'PARSE_FILE': {
      const stockData = parser.readCsv(message.content);

      return {
        ...model,
        stockData
      };
    }
    case 'CLEAR_STOCKDATA':
      return {
        ...model,
        stockData: []
      };
    }
  };

  return React.useReducer(update, initialValue);
};
