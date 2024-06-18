import React, { useState } from 'react';
import useCurrencyRates from './useCurrencyRates';
import CurrencyCard from './CurrencyCard';
import CurrencyModal from '../CurrencyModal/CurrencyModal';
import rectangle from '@assets/Rectangle.png';
import dollar from '@assets/Dollar.png';
import cdollar from '@assets/CanadianDollar.png';
import adollar from '@assets/AustralianDollar.png';
import euro from '@assets/Euro.png';
import libra from '@assets/Libra.png';
import apeso from '@assets/PesoArgentino.png';
import yen from '@assets/Yen.png';
import yuan from '@assets/Won.png';
import bitcoin from '@assets/Bitcoin.png';
import { Container, Wrapper, Title, Image, Cards } from './styles';

const currencyData = [
  {
    image: dollar,
    alt: 'Commercial Dollar',
    name: 'Commercial Dollar',
    key: 'USD',
  },
  {
    image: cdollar,
    alt: 'Canadian Dollar',
    name: 'Canadian Dollar',
    key: 'CAD',
  },
  {
    image: adollar,
    alt: 'Australian Dollar',
    name: 'Australian Dollar',
    key: 'AUD',
  },
  { image: euro, alt: 'Euro', name: 'Euro', key: 'EUR' },
  { image: libra, alt: 'Libra', name: 'Libra', key: 'GBP' },
  { image: apeso, alt: 'Argentine Peso', name: 'Argentine Peso', key: 'ARS' },
  { image: yen, alt: 'Yen', name: 'Yen', key: 'JPY' },
  { image: yuan, alt: 'Yuan', name: 'Yuan', key: 'CNY' },
  { image: bitcoin, alt: 'Bitcoin', name: 'Bitcoin', key: 'BTC' },
];

const Quotes = () => {
  const { currencyRates } = useCurrencyRates();
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  const openModal = (currency) => {
    setSelectedCurrency(currency);
  };

  const closeModal = () => {
    setSelectedCurrency(null);
  };

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
