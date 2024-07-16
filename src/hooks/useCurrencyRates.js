import { useEffect, useState } from 'react';
import axios from 'axios';

const useCurrencyRates = () => {
  const [currencyRates, setCurrencyRates] = useState(() => {
    const cachedRates = localStorage.getItem('currentRates');
    return cachedRates
      ? JSON.parse(cachedRates)
      : {
          USD: null,
          CAD: null,
          AUD: null,
          EUR: null,
          GBP: null,
          ARS: null,
          JPY: null,
          CNY: null,
          BTC: null,
        };
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
              apikey: 'cur_live_oUXxBapGtYuIOAoXFx7AqDV6fwyKP4HLMntI5ZPJ',
              base_currency: 'USD',
            },
          },
        );

        const { data } = response;
        const rates = data.data;

        setCurrencyRates({
          USD: rates.USD,
          CAD: rates.CAD,
          AUD: rates.AUD,
          EUR: rates.EUR,
          GBP: rates.GBP,
          ARS: rates.ARS,
          JPY: rates.JPY,
          CNY: rates.CNY,
          BTC: rates.BTC,
        });

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

export default useCurrencyRates;
