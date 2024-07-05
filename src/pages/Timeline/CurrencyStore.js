import axios from 'axios';

class CurrencyStore {
  constructor() {
    this.observers = [];
    this.data = null;
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify() {
    this.observers.forEach((observer) => observer.update(this.data));
  }

  async fetchData(currency, startDate, endDate) {
    const apiKey = 'F895A5CB-4102-4B0C-A475-E1F11B2CB4C2';
    const url = `https://rest.coinapi.io/v1/exchangerate/${currency.code}/history`;

    try {
      const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: url,
        headers: {
          Accept: 'text/plain',
          'X-CoinAPI-Key': apiKey,
        },
        params: {
          period_id: '1DAY',
          time_start: `${startDate}T00:00:00`,
          time_end: `${endDate}T00:00:00`,
        },
      };

      const response = await axios(config);

      const data = response.data;

      if (!Array.isArray(data)) {
        throw new Error('Received data is not an array');
      }

      this.data = data;
      this.notify();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}

export const currencyStore = new CurrencyStore();
