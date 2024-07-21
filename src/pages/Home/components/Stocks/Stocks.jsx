import React from 'react';
import rectangle from '@assets/Rectangle.png';
import ifix from '@assets/IFIX.png';
import bovespa from '@assets/Bovespa.png';

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
          <Card>
            <CardImage src={bovespa} alt="bovespa" />
            <Text>
              <Name>
                Bovespa Index <br />
                <Rate>0.15%</Rate>
              </Name>
            </Text>
          </Card>
          <Card>
            <CardImage src={ifix} alt="IFIX" />
            <Text>
              <Name>
                IFIX <br /> <Rate>0.15%</Rate>
              </Name>
            </Text>
          </Card>
        </Cards>
      </Wrapper>
    </Container>
  );
};