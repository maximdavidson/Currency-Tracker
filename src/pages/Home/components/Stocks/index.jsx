import React from 'react';
import rectangle from '@assets/Rectangle.png';
import { stockData } from '@constants/stockData';

import {
  Container,
  Wrapper,
  Title,
  Image,
  Cards,
  Card,
  CardImage,
  Text,
  Name,
  Rate,
} from './styles';

export const Stocks = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Stocks</Title>
        <Image src={rectangle} alt="rectangle" />
        <Cards data-aos="fade-up">
          {stockData.map((stock, index) => (
            <Card key={index}>
              <CardImage src={stock.src} alt={stock.alt} />
              <Text>
                <Name>
                  {stock.name} <br />
                  <Rate>{stock.rate}</Rate>
                </Name>
              </Text>
            </Card>
          ))}
        </Cards>
      </Wrapper>
    </Container>
  );
};
