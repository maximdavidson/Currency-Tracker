import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  padding-left: 131px;
  padding-right: 120px;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    opacity: 0.7;
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

export const HeaderImgWrap = styled.div`
  margin-left: 50px;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 115px;
  padding-left: 285px;
  list-style-type: none;
`;

export const LastUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 56px auto;
  gap: 10px;
`;
export const Text = styled.p`
  font-size: 32.91px;
  font-weight: 300;
  line-height: 41.14px;
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const PulsatingCircle = styled.img`
  animation: ${pulseAnimation} 2s infinite;
`;
