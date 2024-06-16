import React from 'react';

import logo from '@assets/logo.png';
import switchImg from '@assets/switch.png';
import { StyledLink, Switch, SwitchImg, Ul, Wrapper } from './styles';

function Header() {
  return (
    <div className="container">
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
        <Switch>
          <SwitchImg src={switchImg} alt="switch" />
        </Switch>
      </Wrapper>
    </div>
  );
}

export default Header;
