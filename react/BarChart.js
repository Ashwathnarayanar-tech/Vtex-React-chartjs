import React from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = (props) => {

    const options = {
        responsive: props.responsive,
        plugins: {
            legend: {
                position: props.legendPosition,
            },
            title: {
                display: props.displayTitle,
                text: props.titleText,
            },
        },
    };

    const labels = props.labelsName;

    const data = {
        labels,
        datasets: props.dataset,
    };

    return (
        <div>
            <Bar options={options} data={data} />
        </div>)
}

export default BarChart;