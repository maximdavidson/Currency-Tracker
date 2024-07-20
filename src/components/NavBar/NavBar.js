import React from 'react';
import { StyledLink, Ul } from './styles';
import { ROUTES } from '@constants/routes';

const NavBar = ({ onClick }) => (
  <Ul>
    <li>
      <StyledLink to={ROUTES.HOME} onClick={onClick}>
        Home
      </StyledLink>
    </li>
    <li>
      <StyledLink to={ROUTES.TIMELINE} onClick={onClick}>
        Timeline
      </StyledLink>
    </li>
    <li>
      <StyledLink to={ROUTES.BANK_CARD} onClick={onClick}>
        Bank card
      </StyledLink>
    </li>
    <li>
      <StyledLink to={ROUTES.CONTACTS} onClick={onClick}>
        Contacts
      </StyledLink>
    </li>
  </Ul>
);

export default NavBar;
