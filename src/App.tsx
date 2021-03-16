import React from 'react';

import { Layout } from './components';
import { StockData } from './types';
import { Analytics, Upload } from './stock';


export const App: React.FC = () => {
  const [stockData, setStockData] = React.useState<StockData[]>([]);

  const clearStockData = React.useCallback(() => setStockData([]), []);

  return (
    <Layout>
      {stockData.length === 0
        ? <Upload.View  onUpload={setStockData} />
        : <Analytics.View onBack={clearStockData} stockData={stockData}  />}
    </Layout>
  );
};
