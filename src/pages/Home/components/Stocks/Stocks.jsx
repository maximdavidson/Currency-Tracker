import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

function Stocks() {
  return (
    <Container>
      <Wrapper>
        <Title>Stocks</Title>
        <Image src={rectangle} alt="rectangle" />
        <Cards>
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
}

export default Stocks;
