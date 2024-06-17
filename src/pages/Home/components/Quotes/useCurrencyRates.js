import { useEffect, useState } from 'react';
import axios from 'axios';

const useCurrencyRates = () => {
  const [currencyRates, setCurrencyRates] = useState({
    USD: null,
    CAD: null,
    AUD: null,
    EUR: null,
    GBP: null,
    ARS: null,
    JPY: null,
    CNY: null,
    BTC: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.currencyapi.com/v3/latest',
          {
            params: {
              apikey: 'cur_live_n4N844Idm8oo2Y3Kj1VIuCWN1umghP8Gyd8jfWCK',
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
      } catch (error) {
        console.error('Error fetching the currency data', error);
      }
    };

    fetchData();
  }, []);

  return currencyRates;
};

export default useCurrencyRates;
