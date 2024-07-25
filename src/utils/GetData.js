import { fetchCurrencyRatesWithCache } from '@api/TimelineApi/fetchCurrencyRatesWithCache';

export const getData = async (state, setState, addMessage, clearMessages) => {
  const { firstCurrency, secondCurrency, startDate, endDate } = state;
  try {
    const data = await fetchCurrencyRatesWithCache(
      firstCurrency,
      secondCurrency,
      startDate,
      endDate,
    );
    setState({ barChartData: data });
    clearMessages();
    addMessage('The graph has been successfully built!');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
