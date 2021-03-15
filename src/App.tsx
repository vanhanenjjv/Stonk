import React from 'react';

import { Layout } from './components';
import { StockData, View } from './types';
import { Analytics, Upload } from './stock';
import github from './github';


const App: React.FC = () => {
  const [stockData, setStockData] = React.useState<StockData[]>([]);
  const [view, setView] = React.useState<View>('upload');

  const goToUpload = (): void => setView('upload');
  // const goToAnalytics = (): void => setView('analytics');

  return (
    <Layout github={github}>
      {view === 'analytics' && <Analytics.View records={stockData} onBack={goToUpload} />}
      {view === 'upload' && <Upload.View onUpload={setStockData} />}
    </Layout>
  );
};

export default App;
