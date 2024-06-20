import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 131px;
  padding-right: 120px;
`;

export const Wrapper = styled.div``;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 300;
  line-height: 41.14px;
`;

export const Image = styled.img``;

export const Cards = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 184px;
`;

export const Card = styled.div`
  width: 480px;
  background: rgba(32, 32, 37, 1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const CardImage = styled.img`
  padding-left: 32px;
`;

export const Text = styled.div``;

export const Name = styled.p`
  font-size: 30px;
  font-weight: 400;
  line-height: 49.37px;
`;

export const Rate = styled.span`
  color: rgba(167, 178, 195, 1);
  font-size: 30px;
  font-weight: 300;
  line-height: 41.14px;
`;
