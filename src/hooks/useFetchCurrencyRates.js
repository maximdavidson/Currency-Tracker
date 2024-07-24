import axios from 'axios';
import { useState } from 'react';
import { CURRENCIES } from '@constants/currencies';

export const useFetchCurrencyRates = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

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

      setData(rates);
    } catch (error) {
      setError(error);
    }
  };

  return { data, error, fetchData };
};
