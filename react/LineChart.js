import React from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = (props) => {

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
            <Line options={options} data={data} />
        </div>)
}

export default LineChart;