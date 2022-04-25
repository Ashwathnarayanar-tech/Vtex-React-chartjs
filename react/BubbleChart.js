import React from 'react';

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const BubbleChart = (props) => {

  const options = {
    scales: {
      y: {
        beginAtZero: props.beginAtZero,
      },
    },
  };

  const data = {
    datasets: props.dataset,
  };

  return (
    <div>
      <Bubble options={options} data={data} />
    </div>)
}

export default BubbleChart;
