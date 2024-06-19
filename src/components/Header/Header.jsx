import React from 'react';
import useCurrencyRates from '@pages/Home/components/Quotes/useCurrencyRates';

import { useTheme } from '@theme/ThemeContext';
import logo from '@assets/logo.png';
import switchImg from '@assets/switch.png';
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
} from './styles';

function Header() {
  const { lastUpdate } = useCurrencyRates();
  const { toggleTheme } = useTheme();

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
                <StyledLink className="link" to="/">
                  Home
                </StyledLink>
              </li>
              <li>
                <StyledLink className="link" to="/timeline">
                  Timeline
                </StyledLink>
              </li>
              <li>
                <StyledLink className="link" to="/bank-card">
                  Bank card
                </StyledLink>
              </li>
              <li>
                <StyledLink className="link" to="/contacts">
                  Contacts
                </StyledLink>
              </li>
            </Ul>
          </nav>
          <Switch onClick={toggleTheme}>
            <SwitchImg src={switchImg} alt="switch" />
          </Switch>
        </Wrapper>
      </Container>
      <HeaderImgWrap>
        <img src={headerImg} alt="Image" />
      </HeaderImgWrap>
      <LastUp>
        <img src={circleImg} alt="Image" />
        <Text>Last updated at {formatDate(lastUpdate)}</Text>
      </LastUp>
    </header>
  );
}

export default Header;
