import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  LogarithmicScale,
} from 'chart.js';
// Регистрация шкалы категорий
Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(LineElement);
Chart.register(LogarithmicScale);

const Graph = ({ data }) => (
  <Line
    type="line"
    width={100}
    height={30}
    options={{
      title: {
        display: true,
        fontSize: 15,
      },
      legend: {
        display: true,
        position: 'top',
      },
      scales: {
        y: {
          type: 'logarithmic',
        },
      },
    }}
    data={data}
  />
);

export default Graph;
