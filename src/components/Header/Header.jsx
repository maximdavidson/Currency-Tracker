import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useCurrencyRates from '@hooks/useCurrencyRates';
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
  BurgerIcon,
  Menu,
  DesktopMenu,
} from './styles';
import './style.css';

function Header() {
  const { lastUpdate } = useCurrencyRates();
  const { toggleTheme, isDarkTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
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
        <Wrapper>
          <div className="logo">
            <img src={logo} alt="LOGO" />
          </div>
          <DesktopMenu>
            <Ul>
              <li>
                <StyledLink to="/" activeClassName="activeLink">
                  Home
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/timeline" activeClassName="activeLink">
                  Timeline
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/bank-card" activeClassName="activeLink">
                  Bank card
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/contacts" activeClassName="activeLink">
                  Contacts
                </StyledLink>
              </li>
            </Ul>
          </DesktopMenu>
          <Switch onClick={toggleTheme}>
            <SwitchImg src={isDarkTheme ? switchOff : switchOn} alt="switch" />
          </Switch>
          <BurgerIcon
            src={isOpen ? closeIcon : isDarkTheme ? menuIcon : menuIconDark}
            alt="Menu"
            onClick={toggleMenu}
          />
        </Wrapper>
        <Menu isOpen={isOpen}>
          <nav>
            <Ul>
              {!isHomePage && (
                <li>
                  <StyledLink to="/" onClick={toggleMenu}>
                    Home
                  </StyledLink>
                </li>
              )}
              <li>
                <StyledLink to="/timeline" onClick={toggleMenu}>
                  Timeline
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/bank-card" onClick={toggleMenu}>
                  Bank card
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/contacts" onClick={toggleMenu}>
                  Contacts
                </StyledLink>
              </li>
            </Ul>
          </nav>
        </Menu>
      </Container>
      <div className={`header-wrapper ${isDarkTheme ? '' : 'light-theme'}`}>
        <div className="text-side">
          <h1 className="wrap-title">
            Modsen Currency <span className="wrap-title-line">Tracker</span>
            <span
              className={`wrap-title-line-sec ${isDarkTheme ? '' : 'light-theme'}`}
            >
              Quotes for the dollar and other international currencies.
            </span>
          </h1>
        </div>
        <img className="diagram" src={diagram} alt="diagram" />
      </div>
      <LastUp>
        <PulsatingCircle src={circleImg} alt="Image" />
        <Text>Last updated at {formatDate(lastUpdate)}</Text>
      </LastUp>
    </header>
  );
}

export default Header;
