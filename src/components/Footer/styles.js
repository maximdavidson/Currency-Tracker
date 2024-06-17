import styled from 'styled-components';

export const FooterContainer = styled.footer`
  margin-top: 250px;
  margin-bottom: 40px;
`;

export const Container = styled.div`
  padding-left: 131px;
  padding-right: 120px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 100px;
`;

export const HistorySide = styled.div``;

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
`;

export const LinkSide = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 78px;
`;

export const Title = styled.p`
  font-size: 28px;
  font-weight: 400;
  line-height: 42px;
  padding-bottom: 20px;
`;

export const Link = styled.a`
  color: rgba(137, 137, 137, 1);
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  text-decoration: none;
  display: block;

  &:hover {
    opacity: 0.7;
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
`;
