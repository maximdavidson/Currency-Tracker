import React from 'react';
import logo from '@assets/logo.png';
import name from '@assets/ModsenCurrencyTracker.png';
import { linkSections } from '@constants/footerLinkes.js';
import {
  FooterContainer,
  Container,
  Wrapper,
  HistorySection,
  Image,
  Img,
  Text,
  LinksSection,
  Title,
  FooterLink,
  FooterNote,
} from './styles';

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Wrapper>
          <HistorySection>
            <Image>
              <Img src={logo} alt="Logo" />
              <Img src={name} alt="Modsen Currency Tracker" />
            </Image>
            <Text>
              Since then, the company has grown organically to. Starsup is the
              world's largest trading platform, with $12 billion worth of
              currency trading and 500,000 tickets sold daily to tens of
              thousands of traders worldwide.
            </Text>
          </HistorySection>

          <LinksSection>
            {linkSections.map((section) => (
              <nav key={section.title}>
                <Title>{section.title}</Title>
                {section.links.map((link) => (
                  <FooterLink key={link} href="#!">
                    {link}
                  </FooterLink>
                ))}
              </nav>
            ))}
          </LinksSection>
        </Wrapper>
        <FooterNote>Startsup © 2023-2024, All Rights Reserved</FooterNote>
      </Container>
    </FooterContainer>
  );
};
