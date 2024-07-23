import styled from 'styled-components';

export const FooterContainer = styled.footer`
  margin-top: 250px;
  margin-bottom: 40px;
  @media (max-width: 450px) {
    margin-top: 200px;
  }
`;

export const Container = styled.div`
  padding-left: 131px;
  padding-right: 120px;
  @media (max-width: 450px) {
    padding-left: 55px;
    padding-right: 1px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 100px;
  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 70px;
  }
  @media (max-width: 450px) {
    grid-gap: 10px;
  }
`;

export const HistorySection = styled.section``;

export const Image = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Text = styled.p`
  max-width: 482px;
  font-size: 24px;
  font-weight: 300;
  line-height: 36px;
  margin-top: 18px;
  @media (max-width: 900px) {
    font-size: 22px;
  }
  @media (max-width: 450px) {
    font-size: 20px;
  }
`;

export const LinksSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 78px;
  @media (max-width: 900px) {
    grid-gap: 58px;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 400;
  line-height: 42px;
  padding-bottom: 20px;
  @media (max-width: 900px) {
    padding-bottom: 15px;
    font-size: 26px;
  }
`;

export const FooterLink = styled.a`
  color: rgba(137, 137, 137, 1);
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  text-decoration: none;
  display: block;

  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 900px) {
    font-size: 22px;
  }
`;

export const FooterNote = styled.p`
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  color: rgba(137, 137, 137, 1);
  margin-top: 54px;
  @media (max-width: 900px) {
    font-size: 22px;
    margin-right: -120px;
  }
  @media (max-width: 450px) {
    font-size: 18px;
  }
`;
