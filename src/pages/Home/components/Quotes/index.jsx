import React, { useState, useCallback } from 'react';
import { useCurrencyRates } from '@hooks/useCurrencyRates';
import { CurrencyCard } from '../CurrencyCard';
import CurrencyModal from '../CurrencyModal';
import rectangle from '@assets/Rectangle.png';
import { Container, Wrapper, Title, Image, Cards } from './styles';
import { currencyData } from '@constants/currencyDataConstant';

export const Quotes = () => {
  const { currencyRates } = useCurrencyRates();
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  const selectCurrency = useCallback((currency) => {
    setSelectedCurrency(currency);
  }, []);

  const deselectCurrency = useCallback(() => {
    setSelectedCurrency(null);
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title>Quotes</Title>
        <Image src={rectangle} alt="rectangle" />
        <Cards>
          {currencyData.map((currency) => (
            <CurrencyCard
              key={currency.key}
              image={currency.image}
              alt={currency.alt}
              name={currency.name}
              rate={currencyRates[currency.key]}
              onClick={() => selectCurrency(currency)}
            />
          ))}
        </Cards>
      </Wrapper>
      {selectedCurrency && (
        <CurrencyModal
          onClose={deselectCurrency}
          currency={selectedCurrency}
          currencyRates={currencyRates}
        />
      )}
    </Container>
  );
};
