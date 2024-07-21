import React from 'react';
import logo from '@assets/logo.png';
import name from '@assets/ModsenCurrencyTracker.png';
import { linkSections } from '@constants/footerLinkes.js';
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

export const Footer = () => {
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
            {linkSections.map((section) => (
              <div key={section.title}>
                <Title>{section.title}</Title>
                {section.links.map((link) => (
                  <React.Fragment key={link}>
                    <Link href="#!">{link}</Link>
                    <br />
                  </React.Fragment>
                ))}
              </div>
            ))}
          </LinkSide>
        </Wrapper>
        <FooterNote>Startsup © 2023-2024, All Rights Reserved</FooterNote>
      </Container>
    </FooterContainer>
  );
};
