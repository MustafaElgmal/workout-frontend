
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

import {Line} from "react-chartjs-2"
ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);
const formatter = (number:any) => (number > 999999 ? (number / 1000000).toFixed(1) + 'M' : number);

const buildData = ({ chartData }:any) => ({
    labels: chartData.labels,
    datasets: [
        {
            label: '',
            data: chartData.data,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: 'rgba(255, 255, 255, 1)',
            pointBackgroundColor: 'rgba(255, 255, 255, 1)',
            fill: 'start',
            tension: 0.4,
        },
    ],
});

const options = {
    plugins: {
        legend: {
            display: false,
        }
    },
    scales: {
        yAxes: {
            ticks: {
                color: 'rgba(255, 255, 255, 1)'
            },
            grid: {
                display: false,
                drawBorder: false,
            },
        },

        xAxes: {
            ticks: {
                color: 'rgba(255, 255, 255, 1)'
            },
            grid: {
                circular: true,
                borderColor: 'rgba(255, 255, 255, .2)',
                color: 'rgba(255, 255, 255, .2)',
                borderDash: [5, 5]
            },
        },
    },
    layout: {
        padding: {
            right: 10,
        },
    },
};

const numberToFix = (number:any, fix:any) => (number || 0).toFixed(fix);
const StockChart = ({ info,color,name,lbs }:any) => {
    const data = buildData(info);
    console.log(color);
    
    return (
        <>
            <div className="rounded  overflow-hidden md:w-1/2 flex flex-col  " style={{ maxWidth: '900px' }}>
                <div className={`${color} mt-8  lex  rounded-lg  px-5  pb-4 pt-8  mx-4 text-white items-center` }>
                    <Line  data={data} options={options} />
                </div>
                <div className='flex justify-between mx-5 mt-2 '>
                    <span>
                        {name}
                    </span>
                    <span>
                        {lbs} lbs
                    </span>
                </div>
               
            </div>
        </>
    );
};

export default StockChart;