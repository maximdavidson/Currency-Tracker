import axios from 'axios';

const API_KEY = '66A7E812-0449-49CC-84AC-5B95C8A157D1';
const BASE_URL = 'https://rest.coinapi.io/v1/exchangerate';

export const fetchData = async (
  firstCurrency,
  secondCurrency,
  startDate,
  endDate,
) => {
  const currencyPair = `${firstCurrency}/${secondCurrency}`;
  const url = `${BASE_URL}/${currencyPair}/history?period_id=1DAY&time_start=${startDate.toISOString()}&time_end=${endDate.toISOString()}&limit=50`;

  const cacheKey = `${currencyPair}_${startDate.toISOString()}_${endDate.toISOString()}`;
  const cachedData = localStorage.getItem(cacheKey);

  if (cachedData) {
    return JSON.parse(cachedData);
  } else {
    try {
      const response = await axios.get(url, {
        headers: { 'X-CoinAPI-Key': API_KEY },
      });
      const data = response.data;

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
