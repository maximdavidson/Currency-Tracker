import React from 'react';
import logo from '@assets/logo.png';
import name from '@assets/ModsenCurrencyTracker.png';
import {
  FooterContainer,
  Container,
  Wrapper,
  HistorySide,
  Image,
  Text,
  LinkSide,
  Title,
  Link,
  FooterNote,
} from './styles';

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Wrapper>
          <HistorySide>
            <Image>
              <img src={logo} alt="Logo" />
              <img src={name} alt="Modsen Currency Tracker" />
            </Image>
            <Text>
              Since then, the company has grown organically to. Starsup is the
              world's largest trading platform, with $12 billion worth of
              currency trading and 500,000 tickets sold daily to tens of
              thousands of traders worldwide.
            </Text>
          </HistorySide>

          <LinkSide>
            <div>
              <Title>General</Title>
              <Link href="#!">Market</Link>
              <br />
              <Link href="#!">Service</Link>
            </div>
            <div>
              <Title>Product</Title>
              <Link href="#!">Sparks</Link>
              <br />
              <Link href="#!">Snaps</Link>
            </div>
            <div>
              <Title>Community</Title>
              <Link href="#!">Ideas</Link>
              <br />
              <Link href="#!">Streams</Link>
            </div>
          </LinkSide>
        </Wrapper>
        <FooterNote>Startsup © 2023-2024, All Rights Reserved</FooterNote>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
