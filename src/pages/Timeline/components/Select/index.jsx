import React from 'react';
import vector from '@assets/Vector.png';
import currencies from '@constants/CurrenciesSelectConstant';
import {
  SelectContainer,
  SelectDropdown,
  CurrencyDetails,
  CurrencyImage,
  CurrencyInfo,
  CurrencyName,
  CurrencyCode,
  ChartButton,
} from './styles';

export class Select extends React.Component {
  render() {
    const { value, onChange } = this.props;
    const selectedCurrency = currencies.find(({ code }) => code === value);

    return (
      <SelectContainer>
        <SelectDropdown
          onChange={onChange}
          value={value}
          vector={vector}
          data-testid="select-dropdown"
        >
          {currencies.map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </SelectDropdown>
        {selectedCurrency && (
          <CurrencyDetails>
            <CurrencyImage
              src={selectedCurrency.image}
              alt={selectedCurrency.name}
            />
            <CurrencyInfo>
              <CurrencyName>{selectedCurrency.description}</CurrencyName>
              <CurrencyCode>{selectedCurrency.code}</CurrencyCode>
            </CurrencyInfo>
          </CurrencyDetails>
        )}
      </SelectContainer>
    );
  }
}
