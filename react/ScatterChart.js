import React from 'react';

import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const ScatterChart = (props) => {

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
            <Scatter options={options} data={data} />
        </div>)

}

export default ScatterChart;