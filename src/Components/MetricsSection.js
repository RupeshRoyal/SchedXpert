import React from 'react';

const MetricsSection = ({ results, processes, algorithm }) => {
  // Calculate total burst time (Total Busy Time)
  const totalBurstTime = processes.reduce((total, process) => total + process.burstTime, 0);

  // Calculate total time (time span from start to end of the last process)
  const totalTime = results.length > 0 ? results[results.length - 1].endTime : 0;

  // CPU Utilization = (Total Burst Time / Total Time) * 100
  const cpuUtilization = (totalTime > 0 && algorithm !== 'Round Robin') ? (totalBurstTime / totalTime) * 100 : null;

  // Calculate Average Waiting Time
  const totalWaitingTime = results.reduce((total, result) => total + result.waitingTime, 0);
  const averageWaitingTime = results.length > 0 ? totalWaitingTime / results.length : 0;

  // Calculate Average Turnaround Time
  const totalTurnaroundTime = results.reduce((total, result) => total + result.turnaroundTime, 0);
  const averageTurnaroundTime = results.length > 0 ? totalTurnaroundTime / results.length : 0;

  return (
    <div className="items-center text-center metrics-section mt-10 mb-6 p-4 bg-[#0d1117] rounded-lg">
      {cpuUtilization !== null && (
        <p className="text-white font-bold">
          CPU Utilization: <strong className="text-[#ffe83d]">{cpuUtilization.toFixed(2)}%</strong>
        </p>
      )}
      <p className="text-white font-bold">
        Average Waiting Time: <strong className="text-[#ffe83d]">{averageWaitingTime.toFixed(2)}</strong>
      </p>
      <p className="text-white font-bold">
        Average Turnaround Time: <strong className="text-[#ffe83d]">{averageTurnaroundTime.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default MetricsSection;
