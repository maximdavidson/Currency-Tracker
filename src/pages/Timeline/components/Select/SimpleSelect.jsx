import React from 'react';
import currencies from '@constants/CurrenciesSelectConstant';

class SimpleSelect extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <div>
        <select onChange={onChange} value={value}>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default SimpleSelect;
