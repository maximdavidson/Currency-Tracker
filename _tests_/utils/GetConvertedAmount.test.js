import { getConvertedAmount } from '@utils/GetConvertedAmount';

const RATES = {
  USD: { value: 1 },
  EUR: { value: 1.17 },
};

describe('getConvertedAmount', () => {
  it('should return the converted amount when all necessary data is provided', () => {
    const amount = 100;
    const currencyRates = RATES;
    const baseCurrency = 'USD';
    const selectedCurrency = 'EUR';

    const convertedAmount = getConvertedAmount(
      amount,
      currencyRates,
      baseCurrency,
      selectedCurrency,
    );

    expect(convertedAmount).toBe('85.47');
  });

  it('should return "Loading..." when currencyRates is missing', () => {
    const amount = 100;
    const currencyRates = null;
    const baseCurrency = 'USD';
    const selectedCurrency = 'EUR';

    const convertedAmount = getConvertedAmount(
      amount,
      currencyRates,
      baseCurrency,
      selectedCurrency,
    );

    expect(convertedAmount).toBe('Loading...');
  });

  it('should return "Loading..." when baseCurrency rate is missing', () => {
    const amount = 100;
    const currencyRates = {
      EUR: { value: 1.17 },
    };
    const baseCurrency = 'USD';
    const selectedCurrency = 'EUR';

    const convertedAmount = getConvertedAmount(
      amount,
      currencyRates,
      baseCurrency,
      selectedCurrency,
    );

    expect(convertedAmount).toBe('Loading...');
  });

  it('should return "Loading..." when selectedCurrency rate is missing', () => {
    const amount = 100;
    const currencyRates = {
      USD: { value: 1 },
    };
    const baseCurrency = 'USD';
    const selectedCurrency = 'EUR';

    const convertedAmount = getConvertedAmount(
      amount,
      currencyRates,
      baseCurrency,
      selectedCurrency,
    );

    expect(convertedAmount).toBe('Loading...');
  });
});
