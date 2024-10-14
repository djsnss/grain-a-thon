import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraph = ({ data }) => {
  
  const chartData = {
    labels: data.map(item => item.label), 
    datasets: [
      {
        label: 'Percentage',
        data: data.map(item => item.value), 
        backgroundColor: data.map(item => item.color), 
        borderRadius: 10, 
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y', 
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `${value}%`, 
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 14, 
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        callbacks: {
          label: (tip) => `${tip.raw}%`, 
        },
      },
    },
  };

  return (
    <div className="h-max w-[80%] max-w-full my-3 mx-2 bg-gray-100 p-6 rounded-lg shadow-md border-[16px] border-black">
      <div className="h-[350px]"> 
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default BarGraph;

