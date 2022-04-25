import React from 'react';

import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
);

const ChartRef = (props) => {

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
            <Chart options={options} type='bar' data={data} />
        </div>)
}

export default ChartRef;