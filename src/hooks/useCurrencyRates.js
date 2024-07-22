import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { useFetchCurrencyRates } from './useFetchCurrencyRates';
import { INITIAL_CURRENCY_RATES } from '@constants/currencies';
import { formatDate } from '@utils/utilFormatDate';

export const useCurrencyRates = () => {
  const [currencyRates, setCurrencyRates] = useLocalStorage(
    'currentRates',
    INITIAL_CURRENCY_RATES,
  );
  const [lastUpdate, setLastUpdate] = useLocalStorage('lastUpdate', null);
  const { data, error, fetchData } = useFetchCurrencyRates();

  useEffect(() => {
    const twelveHours = 12 * 60 * 60 * 1000;
    const now = new Date();
    const isDataOutdated =
      !lastUpdate || now - new Date(lastUpdate) > twelveHours;

    if (isDataOutdated) {
      fetchData();
    }

    const interval = setInterval(fetchData, twelveHours);
    return () => clearInterval(interval);
  }, [lastUpdate, fetchData]);

  useEffect(() => {
    if (data) {
      setCurrencyRates(data);
      const now = new Date();
      setLastUpdate(now.toISOString());
    }
  }, [data, setCurrencyRates, setLastUpdate]);

  useEffect(() => {
    if (error) {
      console.error('Error fetching the currency data', error);
    }
  }, [error]);

  return {
    currencyRates,
    lastUpdate: lastUpdate ? formatDate(lastUpdate) : null,
  };
};
