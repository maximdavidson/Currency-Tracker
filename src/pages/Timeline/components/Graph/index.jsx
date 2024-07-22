import React, { Component } from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  TimeScale,
  Tooltip,
  Title,
} from 'chart.js';
import {
  CandlestickController,
  CandlestickElement,
} from 'chartjs-chart-financial';
import { Chart as ReactChart } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { GRAPH_OPTIONS } from '@constants/graphOptions';
import { ChartContainer } from './styles';

Chart.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  CandlestickController,
  CandlestickElement,
  Tooltip,
  Title,
);

export class Graph extends Component {
  render() {
    const { data } = this.props;

    return (
      <ChartContainer>
        <ReactChart
          type="candlestick"
          data={data}
          options={GRAPH_OPTIONS}
          data-testid="graph"
        />
      </ChartContainer>
    );
  }
}
