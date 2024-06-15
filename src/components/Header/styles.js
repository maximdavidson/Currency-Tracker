import { Link } from 'react-router-dom';
import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Switch = styled.div`
  padding-left: 237px;
`;

export const SwitchImg = styled.img`
  max-width: 40px;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 115px;
  padding-left: 285px;
`;
