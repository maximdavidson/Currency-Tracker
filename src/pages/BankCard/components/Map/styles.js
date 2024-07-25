import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
`;

export const MapContainer = styled.div`
  width: 1000px;
  height: 500px;
  display: flex;
  justify-content: center;

  @media (max-width: 500px) {
    width: 370px;
    height: 400px;
  }
`;
