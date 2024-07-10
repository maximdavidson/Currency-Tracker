import React, { useState, useMemo, useCallback } from 'react';
import useCurrencyRates from '@hooks/useCurrencyRates';
import CurrencyCard from './CurrencyCard';
import CurrencyModal from '../CurrencyModal/CurrencyModal';
import rectangle from '@assets/Rectangle.png';
import { Container, Wrapper, Title, Image, Cards } from './styles';
import { currencyData } from '@constants/currencyDataConstant';

const Quotes = () => {
  const { currencyRates } = useCurrencyRates();
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  const openModal = useCallback((currency) => {
    setSelectedCurrency(currency);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedCurrency(null);
  }, []);

  const memoizedCurrencyData = useMemo(() => currencyData, []);

  return (
    <Container>
      <Wrapper>
        <Title>Quotes</Title>
        <Image src={rectangle} alt="rectangle" />
        <Cards>
          {memoizedCurrencyData.map((currency) => (
            <CurrencyCard
              key={currency.key}
              image={currency.image}
              alt={currency.alt}
              name={currency.name}
              rate={currencyRates[currency.key]}
              onClick={() => openModal(currency)}
            />
          ))}
        </Cards>
      </Wrapper>
      {selectedCurrency && (
        <CurrencyModal
          isOpen={!!selectedCurrency}
          onClose={closeModal}
          currency={selectedCurrency}
          currencyRates={currencyRates}
        />
      )}
    </Container>
  );
};

export default Quotes;
