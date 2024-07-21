import { useEffect, useState } from 'react';
import axios from 'axios';
import { CURRENCIES, INITIAL_CURRENCY_RATES } from '@constants/currencies';

export const useCurrencyRates = () => {
  const [currencyRates, setCurrencyRates] = useState(() => {
    const cachedRates = localStorage.getItem('currentRates');
    return cachedRates ? JSON.parse(cachedRates) : INITIAL_CURRENCY_RATES;
  });

  const [lastUpdate, setLastUpdate] = useState(() => {
    const cachedLastUpdate = localStorage.getItem('lastUpdate');
    return cachedLastUpdate ? new Date(cachedLastUpdate) : null;
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.currencyapi.com/v3/latest',
          {
            params: {
              apikey: process.env.REACT_APP_CURRENCY_API_KEY,
              base_currency: 'USD',
            },
          },
        );

        const { data } = response;
        const rates = CURRENCIES.reduce((acc, currency) => {
          acc[currency] = data.data[currency];
          return acc;
        }, {});

        setCurrencyRates(rates);

        const now = new Date();
        setLastUpdate(now);
        localStorage.setItem('currentRates', JSON.stringify(rates));
        localStorage.setItem('lastUpdate', now.toISOString());
      } catch (error) {
        console.error('Error fetching the currency data', error);
      }
    };

    const twelveHours = 12 * 60 * 60 * 1000;
    const now = new Date();
    const isDataOutdated =
      !lastUpdate || now - new Date(lastUpdate) > twelveHours;

    if (isDataOutdated) {
      fetchData();
    }

    const interval = setInterval(fetchData, twelveHours);
    return () => clearInterval(interval);
  }, [lastUpdate]);

  return { currencyRates, lastUpdate };
};
