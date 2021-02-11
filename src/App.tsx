import React from 'react';

import StockData from './stock-data';
import Layout from './Layout';

import { Upload, Analytics } from './components';


const App: React.FC = () => {
  const [stockData, setStockData] = React.useState<StockData[]>([]);

  return (
    <Layout>
      {stockData.length === 0
        ? <Upload onReceive={setStockData} />
        : <Analytics data={stockData} />}
    </Layout>
  );
};

export default App;
