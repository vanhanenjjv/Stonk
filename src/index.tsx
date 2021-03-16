import 'antd/dist/antd.min.css';
import './index.css';

import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import isBetween from 'dayjs/plugin/isBetween';

import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import reportWebVitals from './reportWebVitals';


dayjs.extend(localizedFormat);
dayjs.extend(isBetween);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
