export const CURRENCIES = [
  'USD',
  'CAD',
  'AUD',
  'EUR',
  'GBP',
  'ARS',
  'JPY',
  'CNY',
  'BTC',
];

export const INITIAL_CURRENCY_RATES = CURRENCIES.reduce((acc, currency) => {
  acc[currency] = null;
  return acc;
}, {});
