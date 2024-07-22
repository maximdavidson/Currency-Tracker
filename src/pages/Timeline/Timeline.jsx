import React, { Component } from 'react';
import Select from './components/Select/Select';
import Graph from './components/Graph/Graph';
import ChartModal from './components/ChartModal/ChartModal';
import { fetchData } from '@api/TimelineApi/apiChart';
import { fetchDataWithCache } from '@api/TimelineApi/fetchDataWithCache';
import { ButtonChange } from './styles';
import SuccessMessageContext from '@context/SuccessMessageContext';
import { Loading } from '@components/Loading/Loading';

class Timeline extends Component {
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
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    const { firstCurrency, secondCurrency, startDate, endDate } = this.state;
    if (
      firstCurrency !== prevState.firstCurrency ||
      secondCurrency !== prevState.secondCurrency ||
      startDate !== prevState.startDate ||
      endDate !== prevState.endDate
    ) {
      this.getData();
    }
  }

  async getData() {
    const { firstCurrency, secondCurrency, startDate, endDate } = this.state;
    const { addMessage, clearMessages } = this.context;
    try {
      const data = await fetchDataWithCache(
        firstCurrency,
        secondCurrency,
        startDate,
        endDate,
      );
      this.setState({ barChartData: data });
      clearMessages();
      addMessage('The graph has been successfully built!');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  checkDateDifference(newStartDate) {
    const { endDate } = this.state;
    const differenceInTime = endDate.getTime() - newStartDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays >= 30 && differenceInDays <= 50;
  }

  handleStartDateChange = (e) => {
    const newStartDate = new Date(e.target.value);
    if (this.checkDateDifference(newStartDate)) {
      this.setState({ startDate: newStartDate, dateError: null });
    } else {
      this.setState({
        dateError:
          'The difference between the start date and the current date must be no less than 30 days and no more than 50 days',
      });
      this.context.clearMessages();
    }
  };

  handleModalOpen = () => {
    this.setState({ isModalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ isModalOpen: false });
  };

  renderContent() {
    const {
      isModalOpen,
      barChartData,
      firstCurrency,
      secondCurrency,
      startDate,
      endDate,
      dateError,
    } = this.state;

    return (
      <>
        <Select
          value={firstCurrency}
          onChange={(e) => this.setState({ firstCurrency: e.target.value })}
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
          setSecondCurrency={(value) =>
            this.setState({ secondCurrency: value })
          }
          startDate={startDate}
          handleStartDateChange={this.handleStartDateChange}
          endDate={endDate}
          dateError={dateError}
        />

        <Graph data={barChartData} />
      </>
    );
  }
  render() {
    const { barChartData } = this.state;

    return barChartData ? this.renderContent() : <Loading />;
  }
}

export default Timeline;
