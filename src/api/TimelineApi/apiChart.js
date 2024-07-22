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

  try {
    const response = await axios.get(url, {
      headers: { 'X-CoinAPI-Key': API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
