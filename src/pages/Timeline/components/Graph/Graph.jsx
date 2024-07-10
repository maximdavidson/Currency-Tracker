import React from 'react';
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
import './styles.css';

Chart.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  CandlestickController,
  CandlestickElement,
  Tooltip,
  Title,
);

const Graph = ({ data }) => (
  <div className="chart-container">
    <ReactChart
      type="candlestick"
      data={data}
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Candlestick Chart',
          },
          tooltip: {
            position: 'nearest',
            intersect: false,
            mode: 'index',
            callbacks: {
              label: function (tooltipItem) {
                const dataPoint =
                  tooltipItem.dataset.data[tooltipItem.dataIndex];
                return [
                  ` Date: ${dataPoint.x.toLocaleDateString()}`,
                  ` Open: ${dataPoint.o.toFixed(2)}`,
                  ` High: ${dataPoint.h.toFixed(2)}`,
                  ` Low: ${dataPoint.l.toFixed(2)}`,
                  ` Close: ${dataPoint.c.toFixed(2)}`,
                ];
              },
            },
          },
        },
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day',
              tooltipFormat: 'MMM dd',
              displayFormats: {
                day: 'MMM dd',
              },
            },
            ticks: {
              source: 'data',
              autoSkip: true,
              maxRotation: 0,
              sampleSize: 10,
              font: {
                size: 12,
              },
            },
            title: {
              display: true,
              text: 'Date',
              color: 'black',
              font: {
                size: 16,
              },
            },
          },
          y: {
            type: 'linear',
            ticks: {
              callback: function (value, index, values) {
                return value.toFixed(2);
              },
            },
          },
        },
        elements: {
          candlestick: {
            color: {
              up: 'rgba(0, 255, 0, 0.5)',
              down: 'rgba(255, 0, 0, 0.5)',
              unchanged: 'rgba(0, 0, 255, 0.5)',
            },
            borderColor: {
              up: 'rgba(0, 255, 0, 1)',
              down: 'rgba(255, 0, 0, 1)',
              unchanged: 'rgba(0, 0, 255, 1)',
            },
            borderWidth: 1,
          },
        },
        barPercentage: 0.1,
        categoryPercentage: 0.1,
      }}
    />
  </div>
);

export default Graph;
