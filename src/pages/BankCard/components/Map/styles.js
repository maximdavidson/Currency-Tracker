import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    margin-left: 40px;
    margin-right: -160px;
  }
`;

export const MapContainer = styled.div`
  width: 1000px;
  height: 500px;
  display: flex;
  justify-content: center;
`;
