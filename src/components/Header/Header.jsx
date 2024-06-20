import React from 'react';
import useCurrencyRates from '@pages/Home/components/Quotes/useCurrencyRates';
import { useTheme } from '@theme/ThemeContext';
import logo from '@assets/logo.png';
import switchOff from '@assets/switchOff.png';
import switchOn from '@assets/switchOn.png';
import headerImg from '@assets/Header.png';
import circleImg from '@assets/circleupdate.png';
import {
  StyledLink,
  Switch,
  SwitchImg,
  Ul,
  Wrapper,
  HeaderImgWrap,
  Container,
  LastUp,
  Text,
  PulsatingCircle,
} from './styles';

function Header() {
  const { lastUpdate } = useCurrencyRates();
  const { toggleTheme, isDarkTheme } = useTheme();

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
        <Wrapper>
          <div className="logo">
            <img src={logo} alt="LOGO" />
          </div>
          <nav>
            <Ul>
              <li>
                <StyledLink to="/">Home</StyledLink>
              </li>
              <li>
                <StyledLink to="/timeline">Timeline</StyledLink>
              </li>
              <li>
                <StyledLink to="/bank-card">Bank card</StyledLink>
              </li>
              <li>
                <StyledLink to="/contacts">Contacts</StyledLink>
              </li>
            </Ul>
          </nav>
          <Switch onClick={toggleTheme}>
            <SwitchImg src={isDarkTheme ? switchOff : switchOn} alt="switch" />
          </Switch>
        </Wrapper>
      </Container>
      <HeaderImgWrap>
        <img src={headerImg} alt="Image" />
      </HeaderImgWrap>
      <LastUp>
        <PulsatingCircle src={circleImg} alt="Image" />
        <Text>Last updated at {formatDate(lastUpdate)}</Text>
      </LastUp>
    </header>
  );
}

export default Header;
