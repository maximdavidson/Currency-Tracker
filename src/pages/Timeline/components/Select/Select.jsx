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

class Select extends React.Component {
  render() {
    const { value, onChange } = this.props;
    const selectedCurrency = currencies.find(
      (currency) => currency.code === value,
    );

    return (
      <SelectContainer>
        <SelectDropdown
          onChange={onChange}
          value={value}
          vector={vector}
          data-testid="select-dropdown"
        >
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
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

export default Select;
