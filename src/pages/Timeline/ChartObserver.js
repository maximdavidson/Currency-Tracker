import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { currencyStore } from '../Timeline/CurrencyStore';

export class ChartObserver extends Component {
  state = {
    chartData: null,
  };

  componentDidMount() {
    currencyStore.subscribe(this);
  }

  componentWillUnmount() {
    currencyStore.unsubscribe(this);
  }

  update = (data) => {
    if (!data) return;

    const labels = data.map((entry) => entry.time_period_start.split('T')[0]);
    const values = data.map((entry) => entry.rate_close);

    this.setState({
      chartData: {
        labels,
        datasets: [
          {
            label: 'Exchange Rate',
            data: values,
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
            tension: 0.1,
          },
        ],
      },
    });
  };

  render() {
    return (
      <div className="chart-container">
        {this.state.chartData && (
          <Line
            data={this.state.chartData}
            options={{
              plugins: {
                zoom: {
                  zoom: {
                    enabled: true,
                    mode: 'x',
                  },
                },
              },
            }}
          />
        )}
      </div>
    );
  }
}

export default ChartObserver;
