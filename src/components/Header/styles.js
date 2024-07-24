import styled, { keyframes } from 'styled-components';

export const Container = styled.header``;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    padding-left: 20px;
  }
`;

export const Switch = styled.div`
  padding-right: 20px;
  @media (max-width: 900px) {
    padding-top: 8px;
  }
  @media (max-width: 450px) {
    padding-left: 2px;
    padding-top: 7px;
  }
`;

export const SwitchImg = styled.img`
  max-width: 40px;
  @media (max-width: 900px) {
    max-width: 35px;
  }
`;

export const LastUpdate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 56px auto;
  gap: 10px;
`;

export const UpdateText = styled.p`
  font-size: 32.91px;
  font-weight: 300;
  line-height: 41.14px;
  @media (max-width: 900px) {
    font-size: 26px;
  }
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
  @media (max-width: 900px) {
    max-width: 40px;
  }
`;

export const BurgerIcon = styled.img`
  z-index: 10;
  max-width: 40px;
  display: none;
  cursor: pointer;
  @media (max-width: 900px) {
    display: block;
    padding-left: 10px;
  }
`;

export const Menu = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgb(238, 238, 238);
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  ${(props) =>
    props.isOpen &&
    `
    display: flex;
    align-items: center;
    justify-content: center;
  `}
  @media (max-width: 450px) {
    width: 145%;
    height: 50vh;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }
`;

export const DesktopMenu = styled.nav`
  display: flex;
  align-items: center;
  padding-left: 150px;
  @media (max-width: 900px) {
    display: none;
  }
`;
