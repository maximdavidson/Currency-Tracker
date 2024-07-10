import React from 'react';
import './styles.css';
import SimpleSelect from '../Select/SimpleSelect';

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
      dateError, // новый проп
    } = this.props;

    if (!isOpen) {
      return null;
    }

    return (
      <div className="modal-overlay">
        <div className="modal" ref={this.modalRef}>
          <button className="close-button" onClick={onClose}>
            X
          </button>
          <label>Вторая валюта:</label>
          <SimpleSelect
            options={availableCurrencies}
            value={secondCurrency}
            onChange={(e) => setSecondCurrency(e.target.value)}
          />
          <label>Дата начала:</label>
          <input
            type="date"
            onChange={handleStartDateChange}
            value={startDate.toISOString().split('T')[0]}
          />
          {dateError && <div style={{ color: 'red' }}>{dateError}</div>}{' '}
          {/* отображение ошибки */}
          <label>Сегодня</label>
          <input
            type="date"
            value={endDate.toISOString().split('T')[0]}
            readOnly
          />
        </div>
      </div>
    );
  }
}

export default ChartModal;
