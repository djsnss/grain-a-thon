import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TooltipItem,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type DataItem = {
  label: string;
  value: number;
  color: string;
};

type BarGraphProps = {
  data: DataItem[];
};

const BarGraph: React.FC<BarGraphProps> = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        label: "Percentage",
        data: data.map((item) => item.value),
        backgroundColor: data.map((item) => item.color),
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y" as const,
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          callback: (value: number) => `${value}%`,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 10,
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
          label: (tooltipItem: TooltipItem<"bar">) => {
            const rawValue = tooltipItem.raw as number; // Ensure `raw` is treated as a number
            return `${rawValue}%`;
          },
        },
      },
    },
  };

  return (
    <div className="h-max w-[95%] md:w-[80%] max-w-full my-3 mx-2 bg-gray-100 p-4 rounded-lg shadow-md border-[16px] border-black">
      <div className="h-[350px]">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default BarGraph;
