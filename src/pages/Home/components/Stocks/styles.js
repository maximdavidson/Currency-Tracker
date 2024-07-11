import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Container = styled.div`
  padding-left: 131px;
  padding-right: 120px;
  @media (max-width: 450px) {
    padding-left: 55px;
  }
`;

export const Wrapper = styled.div``;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 300;
  line-height: 41.14px;
  @media (max-width: 450px) {
    font-size: 28px;
  }
`;

export const Image = styled(LazyLoadImage)``;

export const Cards = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 90px;
  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 90px;
    margin-left: 15px;
  }
  @media (max-width: 450px) {
    grid-gap: 70px;
  }
`;

export const Card = styled.div`
  width: 480px;
  background: rgba(32, 32, 37, 1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 450px) {
    width: 460px;
  }
`;

export const CardImage = styled(LazyLoadImage)`
  padding-left: 32px;
`;

export const Text = styled.div``;

export const Name = styled.p`
  font-size: 30px;
  font-weight: 400;
  line-height: 49.37px;
  @media (max-width: 450px) {
    font-size: 26px;
  }
`;

export const Rate = styled.span`
  color: rgba(167, 178, 195, 1);
  font-size: 30px;
  font-weight: 300;
  line-height: 41.14px;
  @media (max-width: 450px) {
    font-size: 26px;
  }
`;
