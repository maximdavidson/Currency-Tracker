import React from 'react';
import { Stocks } from './components/Stocks';
import { Quotes } from './components/Quotes';
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
