import styled from 'styled-components';
import { Map as YandexMap } from '@pbe/react-yandex-maps';

export const Wrapper = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    margin-left: 40px;
    margin-right: -150px;
  }
`;

export const MapContainer = styled.div`
  width: 1000px;
  height: 500px;
  display: flex;
  justify-content: center;
`;

export const StyledYandexMap = styled(YandexMap)`
  width: 100%;
  height: 100%;

  @media (max-width: 900px) {
    width: 100%;
  }
`;
