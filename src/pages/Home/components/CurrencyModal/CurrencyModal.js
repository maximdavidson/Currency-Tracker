import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from './styles';

const CurrencyModal = ({ isOpen, onClose, currency, currencyRates }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(currency.key);
  const [amount, setAmount] = useState(1);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const getConvertedAmount = () => {
    if (
      currencyRates &&
      currencyRates[selectedCurrency] &&
      currencyRates[currency.key]
    ) {
      return (
        (amount * currencyRates[currency.key].value) /
        currencyRates[selectedCurrency].value
      ).toFixed(2);
    }
    return 'Loading...';
  };

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <Modal onClick={handleClickOutside}>
      <ModalContent>
        <ModalHeader>
          <h2>{currency.name}</h2>
        </ModalHeader>
        <ModalBody>
          <Input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            min="0"
          />
          <p>
            {amount} {currency.name} is approximately {getConvertedAmount()}{' '}
            {selectedCurrency}
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
