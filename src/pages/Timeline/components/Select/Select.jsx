import React, { Component } from 'react';
import vector from '@assets/Vector.png';
import './styles.css';
import currencies from '@constants/CurrenciesSelectConstant';
import ChartModal from '../ChartModal/ChartModal';

export class Select extends Component {
  state = {
    selectedCurrency: '',
    showModal: false,
  };

  handleChange = (event) => {
    this.setState({ selectedCurrency: event.target.value });
  };

  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { selectedCurrency, showModal } = this.state;

    const selectedCurrencyDetails = currencies.find(
      (currency) => currency.name === selectedCurrency,
    );

    return (
      <div className="select-container">
        <select
          onChange={this.handleChange}
          value={selectedCurrency}
          className="select-dropdown"
          style={{
            backgroundImage: `url(${vector})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 10px center',
            backgroundSize: '20px',
          }}
        >
          <option value="">Select Currency</option>
          {currencies.map((currency, index) => (
            <option key={index} value={currency.name}>
              {currency.name}
            </option>
          ))}
        </select>
        {selectedCurrencyDetails && (
          <div className="currency-details">
            <img
              src={selectedCurrencyDetails.image}
              alt={selectedCurrencyDetails.name}
              className="currency-image"
            />
            <div className="currency-info">
              <div className="currency-name">
                {selectedCurrencyDetails.description}
              </div>
              <div className="currency-code">
                {selectedCurrencyDetails.code}
              </div>
            </div>
          </div>
        )}
        {selectedCurrency && (
          <button onClick={this.handleShowModal} className="chart-button">
            Plot the graph
          </button>
        )}
        {showModal && (
          <ChartModal
            currency={selectedCurrencyDetails}
            onClose={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}

export default Select;
