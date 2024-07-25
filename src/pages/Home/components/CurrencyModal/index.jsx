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
import { getConvertedAmount } from '@utils/GetConvertedAmount';

const CurrencyModal = ({ onClose, currency, currencyRates }) => {
  if (!currency) return null;

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

  return (
    <Modal onClick={handleClickOutside} data-testid="currency-modal">
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
            data-testid="amount-input"
          />
          <Cost>
            {amount} {currency.name} is approximately {convertedAmount}{' '}
            {selectedCurrency}
          </Cost>
          <select
            value={selectedCurrency}
            onChange={handleCurrencyChange}
            data-testid="currency-select"
          >
            {Object.keys(currencyRates).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </ModalBody>
        <ModalFooter>
          <button onClick={onClose} data-testid="close-button">
            Close
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

CurrencyModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  currency: PropTypes.object,
  currencyRates: PropTypes.object.isRequired,
};

export default CurrencyModal;
