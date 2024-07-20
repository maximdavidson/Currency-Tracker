import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 900px) {
    font-size: 50px;
    color: rgba(47, 79, 79);
  }
  @media (max-width: 900px) {
    font-size: 40px;
  }
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 115px;
  list-style-type: none;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
  }
`;
