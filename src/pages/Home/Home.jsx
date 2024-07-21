import React from 'react';
import { Stocks } from './components/Stocks/Stocks';
import { Quotes } from './components/Quotes/Quotes';
import useAOS from '@hooks/useAOS';

export const Home = () => {
  useAOS();

  return (
    <div>
      <Stocks />
      <Quotes />
    </div>
  );
};
