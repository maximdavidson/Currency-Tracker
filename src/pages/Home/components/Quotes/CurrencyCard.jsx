import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImage, Text, Name, Rate } from './styles';

const CurrencyCard = ({ image, alt, name, rate, onClick }) => {
  const formatRate = (rate) => (rate ? rate.value : 'Loading...');

  return (
    <Card onClick={onClick}>
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
  onClick: PropTypes.func.isRequired,
};

export default CurrencyCard;
