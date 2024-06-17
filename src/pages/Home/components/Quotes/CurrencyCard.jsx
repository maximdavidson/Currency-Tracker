import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImage, Text, Name, Rate } from './styles';

const CurrencyCard = ({ image, alt, name, rate }) => {
  const formatRate = (rate) => (rate ? rate.value.toFixed(2) : 'Loading...');

  return (
    <Card>
      <CardImage src={image} alt={alt} />
      <Text>
        <Name>
          {name} <br />
          <Rate>{formatRate(rate)}</Rate>
        </Name>
      </Text>
    </Card>
  );
};

CurrencyCard.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rate: PropTypes.object,
};

export default CurrencyCard;
