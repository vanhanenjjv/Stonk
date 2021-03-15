import React from 'react';

import { StockData, View } from './types';
import { Analytics, Source } from './stock';
import { Layout } from './components';
import github from './github';


const App: React.FC = () => {
  const [stockData, setStockData] = React.useState<StockData[]>([]);
  const [view, setView] = React.useState<View>('stock-source');

  const showSource = (): void => setView('stock-source');

  return (
    <Layout github={github}>
      {React.useMemo(
        () => {
          switch (view) {
          case 'stock-source': return (
            <Source.View onSet={d => {
              setStockData(d); setView('stock-analytics');
            }} />
          );
          case 'stock-analytics': return (
            <Analytics.View
              records={stockData}
              onBack={showSource} />
          );
          }
        },
        [view]
      )}
    </Layout>
  );
};

export default App;
