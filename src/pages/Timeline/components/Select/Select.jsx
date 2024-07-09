import React from 'react';
import './styles.css';
import vector from '@assets/Vector.png';
import currencies from '@constants/CurrenciesSelectConstant';

class Select extends React.Component {
  render() {
    const { value, onChange } = this.props;
    const selectedCurrency = currencies.find(
      (currency) => currency.code === value,
    );

    return (
      <div className="select-container">
        <select
          className="select-dropdown"
          onChange={onChange}
          value={value}
          style={{
            backgroundImage: `url(${vector})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 10px center',
            backgroundSize: '20px',
          }}
        >
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
        {selectedCurrency && (
          <div className="currency-details">
            <img
              src={selectedCurrency.image}
              alt={selectedCurrency.name}
              className="currency-image"
            />
            <div className="currency-info">
              <div className="currency-name">
                {selectedCurrency.description}
              </div>
              <div className="currency-code">{selectedCurrency.code}</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Select;
