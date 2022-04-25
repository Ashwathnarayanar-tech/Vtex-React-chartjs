import React from 'react';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = (props) => {

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

    const data = {
        labels: props.labelsName,
        datasets: props.dataset,
    };


    return (
        <div>
            <Pie options={options} data={data} />
        </div>)
}

export default PieChart;