import styled, { keyframes } from 'styled-components';

export const wave1 = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const wave2 = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-7px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const wave3 = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const LoadingDots = styled.p`
  font-size: 35px;
  text-align: center;
`;

export const LoadingDot1 = styled.span`
  animation: ${wave1} 1.3s infinite;
  display: inline-block;
  margin: 0 2px;
`;

export const LoadingDot2 = styled.span`
  animation: ${wave2} 1.1s infinite;
  display: inline-block;
  margin: 0 2px;
`;

export const LoadingDot3 = styled.span`
  animation: ${wave3} 1.3s infinite;
  display: inline-block;
  margin: 0 2px;
`;

export const Message = styled.span`
  color: rgba(70, 184, 48, 0.8);
`;
