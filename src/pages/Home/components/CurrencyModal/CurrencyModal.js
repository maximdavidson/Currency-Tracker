import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Name,
  Cost,
} from './styles';
import { getConvertedAmount } from './getConvertedAmount';

const CurrencyModal = ({ isOpen, onClose, currency, currencyRates }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(currency.key);
  const [amount, setAmount] = useState(1);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const convertedAmount = useMemo(
    () =>
      getConvertedAmount(amount, currencyRates, currency.key, selectedCurrency),
    [amount, currencyRates, currency.key, selectedCurrency],
  );

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
          <Name>{currency.name}</Name>
        </ModalHeader>
        <ModalBody>
          <Input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            min="0"
          />
          <Cost>
            {amount} {currency.name} is approximately {convertedAmount}{' '}
            {selectedCurrency}
          </Cost>
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
