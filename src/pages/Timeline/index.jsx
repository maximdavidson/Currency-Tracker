import React, { Component } from 'react';
import { Select } from './components/Select';
import { Graph } from './components/Graph';
import { ChartModal } from './components/ChartModal';
import { getData } from '@utils/getData';
import { ButtonChange } from './styles';
import { SuccessMessageContext } from '@context/SuccessMessageContext';
import { Loading } from '@components/Loading/Loading';
import { handleStartDateChange } from '@utils/handleStartDateChange';

export class Timeline extends Component {
  static contextType = SuccessMessageContext;

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      barChartData: null,
      firstCurrency: 'BTC',
      secondCurrency: 'USD',
      startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      endDate: new Date(),
      dateError: null,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps, prevState) {
    const { firstCurrency, secondCurrency, startDate, endDate } = this.state;
    if (
      firstCurrency !== prevState.firstCurrency ||
      secondCurrency !== prevState.secondCurrency ||
      startDate !== prevState.startDate ||
      endDate !== prevState.endDate
    ) {
      this.loadData();
    }
  }

  loadData = () => {
    const { addMessage, clearMessages } = this.context;
    getData(this.state, this.setState.bind(this), addMessage, clearMessages);
  };

  handleModalOpen = () => {
    this.setState({ isModalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ isModalOpen: false });
  };

  handleFirstCurrencyChange = (e) => {
    this.setState({ firstCurrency: e.target.value });
  };

  handleSecondCurrencyChange = (value) => {
    this.setState({ secondCurrency: value });
  };

  render() {
    const {
      isModalOpen,
      barChartData,
      firstCurrency,
      secondCurrency,
      startDate,
      endDate,
      dateError,
    } = this.state;
    const { clearMessages } = this.context;

    const handleStartDateChangeWithContext = handleStartDateChange(
      this.state,
      this.setState.bind(this),
      clearMessages,
    );

    return (
      <div>
        <Select
          value={firstCurrency}
          onChange={this.handleFirstCurrencyChange}
        />
        <ButtonChange
          onClick={this.handleModalOpen}
          data-testid="change-parameters-button"
        >
          Change parameters
        </ButtonChange>

        <ChartModal
          isOpen={isModalOpen}
          onClose={this.handleModalClose}
          secondCurrency={secondCurrency}
          setSecondCurrency={this.handleSecondCurrencyChange}
          startDate={startDate}
          handleStartDateChange={handleStartDateChangeWithContext}
          endDate={endDate}
          dateError={dateError}
        />

        {barChartData ? <Graph data={barChartData} /> : <Loading />}
      </div>
    );
  }
}
