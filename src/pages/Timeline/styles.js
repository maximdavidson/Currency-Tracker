import styled, { keyframes } from 'styled-components';

export const ButtonChange = styled.button`
  cursor: pointer;
  border: none;
  margin-top: 30px;
  width: 200px;
  height: 50px;
  margin-left: 98px;
  background-color: rgba(29, 41, 55);
  border-radius: 5px;
  font-size: 18px;
  margin-bottom: 150px;
  color: rgba(255, 255, 255, 0.693);
`;

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

export const SuccessMessage = styled.div`
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border-radius: 5px;
  z-index: 1000;
`;
