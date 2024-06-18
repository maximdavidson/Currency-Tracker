import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from './styles';

const CurrencyModal = ({ isOpen, onClose, currency, currencyRates }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(currency.key);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const getExchangeRate = () => {
    if (
      currencyRates &&
      currencyRates[selectedCurrency] &&
      currencyRates[currency.key]
    ) {
      return (
        currencyRates[currency.key].value /
        currencyRates[selectedCurrency].value
      ).toFixed(2);
    }
    return 'Loading...';
  };

  if (!isOpen) return null;

  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <h2>{currency.name}</h2>
        </ModalHeader>
        <ModalBody>
          <p>
            Exchange rate or the {currency.name} to {selectedCurrency}:{' '}
            {getExchangeRate()}
          </p>
          <select value={selectedCurrency} onChange={handleCurrencyChange}>
            {Object.keys(currencyRates).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </ModalBody>
        <ModalFooter>
          <button onClick={onClose}>Close</button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

CurrencyModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  currency: PropTypes.object.isRequired,
  currencyRates: PropTypes.object.isRequired,
};

export default CurrencyModal;
