export const srjf = (processes) => {
  const results = [];
  let currentTime = 0;
  let processQueue = [...processes];
  let processStatus = processes.map(p => ({
    id: p.id,
    remainingBurstTime: p.burstTime,
    startTime: null,
    endTime: null,
  }));

  let completedProcesses = 0;
  let lastProcess = null;

  while (completedProcesses < processes.length) {
    // Filter available processes that have arrived
    const availableProcesses = processStatus.filter(
      p => processes.find(proc => proc.id === p.id).arrivalTime <= currentTime && p.remainingBurstTime > 0
    );

    if (availableProcesses.length > 0) {
      // Sort by remaining burst time
      availableProcesses.sort((a, b) => a.remainingBurstTime - b.remainingBurstTime);
      const currentProcess = availableProcesses[0];

      // If process starts for the first time, set the start time
      if (currentProcess.startTime === null) {
        currentProcess.startTime = currentTime;
      }

      // Process for 1 unit of time
      currentTime += 1;
      currentProcess.remainingBurstTime -= 1;

      // If process finishes, set the end time and calculate turnaround/waiting times
      if (currentProcess.remainingBurstTime === 0) {
        currentProcess.endTime = currentTime;
        const originalProcess = processes.find(p => p.id === currentProcess.id);
        results.push({
          id: currentProcess.id,
          startTime: currentProcess.startTime,
          endTime: currentProcess.endTime,
          waitingTime: currentProcess.startTime - originalProcess.arrivalTime,
          turnaroundTime: currentProcess.endTime - originalProcess.arrivalTime,
        });
        completedProcesses++;
      }
    } else {
      // If no process is available, move time to the next arrival time
      const nextArrival = Math.min(
        ...processQueue
          .filter(p => processStatus.find(proc => proc.id === p.id).remainingBurstTime > 0)
          .map(p => p.arrivalTime)
      );
      currentTime = Math.max(currentTime, nextArrival);
    }
  }

  return results;
};
