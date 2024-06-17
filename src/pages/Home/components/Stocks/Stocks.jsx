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
  const [stocksData, setStocksData] = useState({
    bovespa: null,
    ifix: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.currencyapi.com/v3/latest',
          {
            params: {
              apikey: 'cur_live_n4N844Idm8oo2Y3Kj1VIuCWN1umghP8Gyd8jfWCK',
              base_currency: 'USD',
            },
          },
        );

        const { data } = response;
        setStocksData({
          bovespa: data.BovespaIndex, // замените на правильное значение из API
          ifix: data.IFIX, // замените на правильное значение из API
        });
      } catch (error) {
        console.error('Error fetching the stock data', error);
      }
    };

    fetchData();
  }, []);

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
                Bovespa Index <br />{' '}
                <Rate>
                  {stocksData.bovespa ? `${stocksData.bovespa}%` : 'Loading...'}
                </Rate>
              </Name>
            </Text>
          </Card>
          <Card>
            <CardImage src={ifix} alt="IFIX" />
            <Text>
              <Name>
                IFIX <br />{' '}
                <Rate>
                  {stocksData.ifix ? `${stocksData.ifix}%` : 'Loading...'}
                </Rate>
              </Name>
            </Text>
          </Card>
        </Cards>
      </Wrapper>
    </Container>
  );
}

export default Stocks;
