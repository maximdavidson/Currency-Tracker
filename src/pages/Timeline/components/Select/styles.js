import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const SelectContainer = styled.div`
  margin-left: 96px;
  color: rgba(217, 217, 217, 1);
`;

export const SelectDropdown = styled.select`
  color: rgba(217, 217, 217, 1);
  padding: 10px 50px 10px 10px;
  border-radius: 5px;
  border: none;
  margin-bottom: 60px;
  background: transparent;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
  outline: none;
  font-size: 25px;
  font-weight: 500;
  line-height: 45px;
  background-image: ${(props) => `url(${props.vector})`};
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 20px;

  &:focus {
    outline: none;
  }

  option {
    background: rgba(51, 51, 51, 0.7);
    border: none;
    max-width: 100px;
  }

  @media (max-width: 450px) {
    option {
      font-size: 12px;
      padding: 5px 10px;
    }
    margin-bottom: 30px;
    line-height: 30px;
  }

  &::-ms-expand {
    display: none;
  }
`;

export const CurrencyDetails = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
`;

export const CurrencyImage = styled(LazyLoadImage)`
  width: 70px;
  margin-right: 20px;
`;

export const CurrencyInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CurrencyName = styled.div`
  font-size: 30px;
  font-weight: 400;
  line-height: 49.37px;
`;

export const CurrencyCode = styled.div`
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
`;

export const ChartButton = styled.button`
  background-color: #1b1831;
  color: rgb(204, 204, 204);
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 16px;
  border-radius: 6px;

  &:hover {
    background-color: #14121f;
  }
`;
