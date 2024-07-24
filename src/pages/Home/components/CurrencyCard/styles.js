import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Card = styled.div`
  cursor: pointer;
  width: 480px;
  background: ${({ theme }) => theme.CardBackground};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 450px) {
    width: 460px;
  }
`;

export const CardImage = styled(LazyLoadImage)`
  padding-left: ${({ theme }) => theme.spacing.large};
`;

export const Text = styled.div``;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.fontSize.p};
  font-weight: 400;
  line-height: 49.37px;
  color: ${({ theme }) => theme.nameColor};
  @media (max-width: 450px) {
    font-size: ${({ theme }) => theme.fontSize.pMobile};
  }
`;

export const Rate = styled.span`
  color: rgba(167, 178, 195, 1);
  font-size: ${({ theme }) => theme.fontSize.p};
  font-weight: 300;
  line-height: 41.14px;
  @media (max-width: 450px) {
    font-size: ${({ theme }) => theme.fontSize.pMobile};
  }
`;
