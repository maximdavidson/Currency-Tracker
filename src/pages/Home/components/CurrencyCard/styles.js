import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Card = styled.div`
  cursor: pointer;
  width: 480px;
  background: ${({ theme }) => theme.CardBackground};
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
  color: ${({ theme }) => theme.nameColor};
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
