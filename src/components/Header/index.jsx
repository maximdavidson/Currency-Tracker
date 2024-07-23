import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useCurrencyRates } from '@hooks/useCurrencyRates';
import { useTheme } from '@theme/ThemeContext';
import logo from '@assets/logo.png';
import switchOff from '@assets/switchOff.png';
import switchOn from '@assets/switchOn.png';
import circleImg from '@assets/circleupdate.png';
import menuIcon from '@assets/menuIcon.png';
import menuIconDark from '@assets/menuIcon-dark.png';
import closeIcon from '@assets/menuIcon-close.png';
import diagram from '@assets/diagram.png';

import {
  Switch,
  SwitchImg,
  HeaderWrapper,
  Container,
  LastUpdate,
  UpdateText,
  PulsatingCircle,
  BurgerIcon,
  Menu,
  DesktopMenu,
  StyledHeader,
  HeaderContent,
  HeaderTitle,
  HeaderTitleSpan,
  HeaderSubtitleWrapper,
  HeaderSubtitle,
  Diagram,
} from './styles';
import NavBar from '../NavBar/NavBar';

export const Header = () => {
  const { lastUpdate } = useCurrencyRates();
  const { toggleTheme, isDarkTheme, theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => {
      const newIsOpen = !prevIsOpen;
      document.body.style.overflow = newIsOpen ? 'hidden' : 'auto';
      return newIsOpen;
    });
  };

  const formatDate = (date) => {
    if (!date) return 'Loading...';
    return date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  };

  return (
    <header>
      <Container>
        <HeaderWrapper>
          <img src={logo} alt="LOGO" />
          <DesktopMenu>
            <NavBar />
          </DesktopMenu>
          <Switch onClick={toggleTheme}>
            <SwitchImg src={isDarkTheme ? switchOff : switchOn} alt="switch" />
          </Switch>
          <BurgerIcon
            src={isOpen ? closeIcon : isDarkTheme ? menuIcon : menuIconDark}
            alt="Menu"
            onClick={toggleMenu}
          />
        </HeaderWrapper>
        <Menu isOpen={isOpen}>
          <nav>
            <NavBar onClick={toggleMenu} />
          </nav>
        </Menu>
      </Container>
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
      <LastUpdate>
        <PulsatingCircle src={circleImg} alt="Image" />
        <UpdateText>Last updated at {formatDate(lastUpdate)}</UpdateText>
      </LastUpdate>
    </header>
  );
};
