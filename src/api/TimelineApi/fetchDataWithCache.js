import { fetchData } from './apiChart'; // Импортируйте fetchData из файла apiChart

const getCacheKey = (firstCurrency, secondCurrency, startDate, endDate) => {
  return `${firstCurrency}/${secondCurrency}_${startDate.toISOString()}_${endDate.toISOString()}`;
};

export const fetchDataWithCache = async (
  firstCurrency,
  secondCurrency,
  startDate,
  endDate,
) => {
  const cacheKey = getCacheKey(
    firstCurrency,
    secondCurrency,
    startDate,
    endDate,
  );
  const cachedData = localStorage.getItem(cacheKey);

  if (cachedData) {
    return JSON.parse(cachedData);
  } else {
    try {
      const data = await fetchData(
        firstCurrency,
        secondCurrency,
        startDate,
        endDate,
      );

      const chartData = {
        datasets: [
          {
            label: 'Candlestick',
            data: data.map((item) => ({
              x: new Date(item.time_period_start),
              o: item.rate_open,
              h: item.rate_high,
              l: item.rate_low,
              c: item.rate_close,
            })),
            borderColor: 'rgba(0, 0, 255, 0.5)',
            backgroundColor: 'rgba(0, 0, 255, 0.5)',
          },
        ],
      };

      localStorage.setItem(cacheKey, JSON.stringify(chartData));
      return chartData;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
};
