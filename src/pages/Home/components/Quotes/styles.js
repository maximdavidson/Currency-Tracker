import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Container = styled.main`
  padding-left: 131px;
  padding-right: 120px;
  @media (max-width: 450px) {
    padding-left: 35px;
  }
`;

export const Wrapper = styled.div``;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h1};
  font-weight: 300;
  line-height: 41.14px;
  @media (max-width: 450px) {
    font-size: ${({ theme }) => theme.fontSize.h1Mobile};
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
    margin-left: ${({ theme }) => theme.spacing.medium};
  }
  @media (max-width: 450px) {
    grid-gap: 70px;
  }
`;
