import { fetchDataWithCache } from '@api/TimelineApi/fetchDataWithCache';

export const getData = async (state, setState, addMessage, clearMessages) => {
  const { firstCurrency, secondCurrency, startDate, endDate } = state;
  try {
    const data = await fetchDataWithCache(
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
