// src/algorithms/fcfs.js
export const fcfs = (processes) => {
  const results = [];
  let currentTime = 0;

  processes.forEach((process) => {
    const startTime = Math.max(currentTime, process.arrivalTime);
    const endTime = startTime + process.burstTime;
    results.push({
      id: process.id,
      arrivalTime: process.arrivalTime, // Ensure arrivalTime is included here
      startTime,
      endTime,
      waitingTime: startTime - process.arrivalTime,
      turnaroundTime: endTime - process.arrivalTime,
    });
    currentTime = endTime;
  });

  return results;
};
