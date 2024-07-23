import styled, { keyframes } from 'styled-components';

export const Container = styled.main``;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Switch = styled.div`
  padding-left: 237px;
  @media (max-width: 900px) {
    padding-left: 520px;
    padding-top: 8px;
  }
  @media (max-width: 450px) {
    padding-left: 440px;
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

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 65px;
  max-width: 100%;
  gap: 70px;
  background: ${(props) => props.theme.headerBackground};
  @media (max-width: 900px) {
    padding: 20px 10px;
    flex-direction: column;
    margin-top: 10px;
    padding: 20px;
  }
  @media (max-width: 450px) {
    padding: 15px 5px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 74px;
  font-weight: 600;
  background: linear-gradient(
    90.18deg,
    #00ce2c 0.18%,
    #aedf23 49.3%,
    #a3dc00 99.88%
  );
  -webkit-background-clip: text;
  color: transparent;
  text-align: right;

  @media (max-width: 900px) {
    font-size: 64px;
    text-align: center;
  }

  @media (max-width: 450px) {
    font-size: 34px;
  }
`;

export const HeaderTitleSpan = styled.span`
  display: block;
`;

export const HeaderSubtitleWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-top: -60px;
  @media (max-width: 900px) {
    justify-content: center;
    margin-top: -20px;
  }
`;

export const HeaderSubtitle = styled.p`
  font-size: 23px;
  font-weight: 300;
  line-height: 1.5;
  max-width: 389px;
  text-align: center;
  color: ${(props) => props.theme.textColor};

  @media (max-width: 900px) {
    font-size: 20px;
  }

  @media (max-width: 450px) {
    font-size: 12px;
  }
`;

export const Diagram = styled.img`
  max-width: 100%;

  @media (max-width: 900px) {
    max-width: 300px;
    margin-top: 20px;
  }

  @media (max-width: 450px) {
    max-width: 150px;
    margin-top: 10px;
  }
`;
