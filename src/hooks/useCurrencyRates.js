import { useEffect } from 'react';
import { usePersistentState } from './useLocalStorage';
import { useFetchCurrencyRates } from 'hooks/useFetchCurrencyRates';
import { INITIAL_CURRENCY_RATES } from '@constants/currencies';
import { formatDate } from '@utils/FormatDate';

export const useCurrencyRates = () => {
  const [currencyRates, setCurrencyRates] = usePersistentState(
    'currentRates',
    INITIAL_CURRENCY_RATES,
  );
  const [lastUpdate, setLastUpdate] = usePersistentState('lastUpdate', null);
  const { data, error, fetchData } = useFetchCurrencyRates();

  useEffect(() => {
    const twelveHours = 7 * 60 * 60 * 1000;
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
