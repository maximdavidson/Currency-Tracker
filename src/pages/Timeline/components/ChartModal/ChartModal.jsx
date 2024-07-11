import React from 'react';
import SimpleSelect from '../Select/SimpleSelect';
import { ModalOverlay, Modal, CloseButton } from './styles';
import SuccessMessage from '../../SuccessMessage';

class ChartModal extends React.Component {
  constructor(props) {
    super(props);
    this.modalRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (
      this.modalRef.current &&
      !this.modalRef.current.contains(event.target)
    ) {
      this.props.onClose();
    }
  };

  render() {
    const {
      isOpen,
      onClose,
      availableCurrencies,
      secondCurrency,
      setSecondCurrency,
      startDate,
      handleStartDateChange,
      endDate,
      dateError,
    } = this.props;

    if (!isOpen) {
      return null;
    }

    return (
      <ModalOverlay>
        <Modal ref={this.modalRef}>
          <CloseButton onClick={onClose}>X</CloseButton>
          <label>Second currency:</label>
          <SimpleSelect
            options={availableCurrencies}
            value={secondCurrency}
            onChange={(e) => setSecondCurrency(e.target.value)}
          />
          <label>Start Date:</label>
          <input
            type="date"
            onChange={handleStartDateChange}
            value={startDate.toISOString().split('T')[0]}
          />
          {dateError && <div style={{ color: 'red' }}>{dateError}</div>}
          <label>Today</label>
          <input
            type="date"
            value={endDate.toISOString().split('T')[0]}
            readOnly
          />
          <SuccessMessage />
        </Modal>
      </ModalOverlay>
    );
  }
}

export default ChartModal;
