import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImage, Text, Name, Rate } from './styles';

export const CurrencyCard = ({ image, alt, name, rate, onClick }) => {
  return (
    <Card onClick={onClick} data-testid="currency-card" data-aos="fade-up">
      <CardImage src={image} alt={alt} />
      <Text>
        <Name>
          {name} <br />
          <Rate>{rate ? rate.value : 'Loading...'}</Rate>
        </Name>
      </Text>
    </Card>
  );
};

CurrencyCard.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rate: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  onClick: PropTypes.func.isRequired,
};
