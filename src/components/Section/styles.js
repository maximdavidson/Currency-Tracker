import styled from 'styled-components';

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
