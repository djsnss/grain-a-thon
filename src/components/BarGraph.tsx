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

// Register necessary chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraph = ({ data }) => {
  // Prepare the chart data
  const chartData = {
    labels: data.map(item => item.label), // Labels for each bar (e.g., 'COMPS', 'IT', etc.)
    datasets: [
      {
        label: 'Percentage',
        data: data.map(item => item.value), // Values for each bar
        backgroundColor: data.map(item => item.color), // Dynamic colors for bars
        borderRadius: 10, // Rounded bars
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y', // Make the bars horizontal
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `${value}%`, // Display percentage on x-axis
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 14, // Increase the font size of labels for better visibility
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        callbacks: {
          label: (tip) => `${tip.raw}%`, // Show percentage in tooltip
        },
      },
    },
  };

  return (
    <div className="h-max w-[80%] max-w-full my-5 mx-2 bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="h-[350px]"> {/* Set a height for the chart */}
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default BarGraph;

