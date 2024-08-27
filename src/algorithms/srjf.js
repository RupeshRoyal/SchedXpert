// src/algorithms/srjf.js
export const srjf = (processes) => {
  const results = [];
  let currentTime = 0;
  let processQueue = [...processes];
  let processStatus = new Array(processes.length).fill({});

  while (processQueue.length > 0) {
    // Filter processes that have arrived
    const availableProcesses = processQueue.filter(p => p.arrivalTime <= currentTime);

    if (availableProcesses.length > 0) {
      // Sort by remaining burst time
      availableProcesses.sort((a, b) => a.burstTime - b.burstTime);

      const currentProcess = availableProcesses[0];
      const processIndex = processes.findIndex(p => p.id === currentProcess.id);
      const startTime = Math.max(currentTime, currentProcess.arrivalTime);
      const endTime = startTime + currentProcess.burstTime;

      results.push({
        id: currentProcess.id,
        startTime,
        endTime,
        waitingTime: startTime - currentProcess.arrivalTime,
        turnaroundTime: endTime - currentProcess.arrivalTime,
      });

      currentTime = endTime;
      processQueue = processQueue.filter(p => p.id !== currentProcess.id);
    } else {
      // If no process is available, move to the next arrival time
      const nextArrival = Math.min(...processQueue.map(p => p.arrivalTime));
      currentTime = nextArrival;
    }
  }

  return results;
};
