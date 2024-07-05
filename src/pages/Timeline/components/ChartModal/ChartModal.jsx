import React, { Component } from 'react';
import './styles.css';
import { currencyStore } from '../../CurrencyStore';

class ChartModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: new Date().toISOString().split('T')[0],
      endDate: '',
      error: '',
    };

    this.modalRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.modalRef && !this.modalRef.current.contains(event.target)) {
      this.handleCloseModal();
    }
  };

  handleCloseModal = () => {
    this.setState({
      startDate: new Date().toISOString().split('T')[0],
      endDate: '',
      error: '',
    });
    this.props.onClose();
  };

  handleDateChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    if (this.state.error) {
      this.setState({ error: '' });
    }
  };

  handleBuildChart = () => {
    const { startDate, endDate } = this.state;
    const { currency } = this.props;

    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 30) {
      this.setState({ error: '' });
      currencyStore.fetchData(currency, startDate, endDate);
    } else {
      this.setState({ error: 'Select a period of more than 30 days' });
    }
  };

  render() {
    const { startDate, endDate, error } = this.state;
    const { onClose } = this.props;

    return (
      <div className="modal-overlay">
        <div className="modal-content" ref={this.modalRef}>
          <button onClick={this.handleCloseModal} className="close-button">
            X
          </button>
          <div className="modal-header">Plot the graph</div>
          <div className="modal-body">
            <div>
              <label>Today's date: </label>
              <input
                type="date"
                name="startDate"
                value={startDate}
                onChange={this.handleDateChange}
              />
            </div>
            <div>
              <label>Select a date: </label>
              <input
                type="date"
                name="endDate"
                value={endDate}
                onChange={this.handleDateChange}
              />
            </div>
            {error && <div className="error-message">{error}</div>}
          </div>
          <div className="modal-footer">
            <button
              onClick={this.handleBuildChart}
              className="build-chart-button"
              disabled={!endDate || error}
            >
              Plot
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ChartModal;
