import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components
ChartJS.register(ArcElement, Tooltip, Legend);

// Function to generate random colors
const generateRandomColor = () => {
  const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;
  return randomColor;
};

const generateColors = (length) => {
  const baseColors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];
  if (length <= baseColors.length) {
    return baseColors.slice(0, length);
  }

  // Generate additional random colors if needed
  const additionalColors = Array.from({ length: length - baseColors.length }, generateRandomColor);
  return [...baseColors, ...additionalColors];
};

const PieCharts = ({ results }) => {
  const processIds = results.map((r) => `P${r.id}`);
  const waitingTimes = results.map((r) => r.waitingTime);
  const turnaroundTimes = results.map((r) => r.turnaroundTime);

  const waitingTimeColors = generateColors(waitingTimes.length);
  const turnaroundTimeColors = generateColors(turnaroundTimes.length);

  const waitingTimeData = {
    labels: processIds,
    datasets: [
      {
        label: 'Waiting Time',
        data: waitingTimes,
        backgroundColor: waitingTimeColors,
        borderColor: '#0d1117',
        borderWidth: 1,
      },
    ],
  };

  const turnaroundTimeData = {
    labels: processIds,
    datasets: [
      {
        label: 'Turnaround Time',
        data: turnaroundTimes,
        backgroundColor: turnaroundTimeColors,
        borderColor: '#0d1117',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex justify-around p-5 bg-[#0d1117] mt-6">
      <div className="w-2/5 bg-[#0d1117] p-2 border border-[#bc8cff] rounded-lg shadow-lg">
        <h3 className="text-white text-center text-xl font-bold mb-2">Waiting Time Distribution</h3>
          <Pie data={waitingTimeData} />    
      </div>
      <div className="w-2/5 bg-[#0d1117] p-2 border border-[#bc8cff] rounded-lg shadow-lg">
        <h3 className="text-white text-center text-xl font-bold mb-2">Turn Around Time Distribution</h3>
          <Pie data={turnaroundTimeData} />
      </div>
    </div>
  );
};

export default PieCharts;
