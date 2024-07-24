import React from 'react';
import {
  StyledHeader,
  HeaderContent,
  HeaderTitle,
  HeaderTitleSpan,
  HeaderSubtitleWrapper,
  HeaderSubtitle,
  Diagram,
} from './styles';
import diagram from '@assets/diagram.png';

export const Section = () => {
  return (
    <StyledHeader>
      <HeaderContent>
        <HeaderTitle>
          Modsen Currency <HeaderTitleSpan>Tracker</HeaderTitleSpan>
        </HeaderTitle>
        <HeaderSubtitleWrapper>
          <HeaderSubtitle>
            Quotes for the dollar and other international currencies.
          </HeaderSubtitle>
        </HeaderSubtitleWrapper>
      </HeaderContent>
      <Diagram src={diagram} alt="diagram" />
    </StyledHeader>
  );
};
