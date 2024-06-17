import React from 'react';
import Stocks from './components/Stocks/Stocks';
import Quotes from './components/Quotes/Quotes';

function Home() {
  return (
    <div>
      <Stocks />
      <Quotes />
    </div>
  );
}

export default Home;
