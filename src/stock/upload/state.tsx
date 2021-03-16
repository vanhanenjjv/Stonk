import React from 'react';

import * as parser from '../parser';
import { Message, Model } from './types';


export default (): [Model, React.Dispatch<Message>] => {
  const initialValue: Model = {};

  const update = (model: Model, message: Message): Model => {
    switch (message.type) {
    case 'SET_SOURCE': {
      const stockData = parser.readCsv(message.file.text);

      return {
        ...model,
        source: {
          name: message.file.name,
          data: stockData
        }
      };
    }
    case 'CLEAR_SOURCE':
      return {
        ...model,
        source: undefined
      };
    }
  };

  return React.useReducer(update, initialValue);
};
