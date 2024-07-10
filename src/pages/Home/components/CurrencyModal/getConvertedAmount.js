export const getConvertedAmount = (
  amount,
  currencyRates,
  baseCurrency,
  selectedCurrency,
) => {
  if (
    currencyRates &&
    currencyRates[selectedCurrency] &&
    currencyRates[baseCurrency]
  ) {
    return (
      (amount * currencyRates[baseCurrency].value) /
      currencyRates[selectedCurrency].value
    ).toFixed(2);
  }
  return 'Loading...';
};
