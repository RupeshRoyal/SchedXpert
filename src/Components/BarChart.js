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

// Register the components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ results }) => {
  const processIds = results.map((r) => `P${r.id}`);
  const burstTimes = results.map((r) => r.endTime - r.startTime);
  const waitingTimes = results.map((r) => r.waitingTime);
  const turnaroundTimes = results.map((r) => r.turnaroundTime);

  const data = {
    labels: processIds,
    datasets: [
      {
        label: 'Burst Time',
        data: burstTimes,
        backgroundColor: 'rgba(247, 120, 186, 0.8)', // Pink
      },
      {
        label: 'Waiting Time',
        data: waitingTimes,
        backgroundColor: 'rgba(255, 99, 132, 0.8)', // Red
      },
      {
        label: 'Turnaround Time',
        data: turnaroundTimes,
        backgroundColor: 'rgba(153, 102, 255, 0.8)', // Violet
      },
    ],
  };

  const options = {
    scales: {
      x: {
        ticks: {
          color: '#ffffff', // White text color for X-axis labels
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#ffffff', // White text color for Y-axis labels
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#ffffff', // White text color for legend labels
        },
      },
    },
  };

  return (
    <div className="bg-[#0d1117] p-4 rounded-lg shadow-lg">
      <h3 className="text-center text-xl text-[#ffe83d] mb-4 font-bold">Process Times</h3>
        <Bar data={data} options={options} className='border border-[#6e40c9] rounded-lg'/>
    </div>
  );
};

export default BarChart;
