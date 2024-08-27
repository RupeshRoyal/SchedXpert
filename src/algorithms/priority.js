// src/algorithms/priority.js
export const priorityScheduling = (processes) => {
    let time = 0;
    const results = [];
    const remainingProcesses = [...processes];
  
    while (remainingProcesses.length > 0) {
      // Get processes that have arrived by the current time
      const availableProcesses = remainingProcesses.filter(p => p.arrivalTime <= time);
  
      if (availableProcesses.length === 0) {
        time = remainingProcesses[0].arrivalTime;
        continue;
      }
  
      // Select the process with the highest priority (lowest priority number)
      const currentProcess = availableProcesses.reduce((highestPriority, process) => {
        return process.priority < highestPriority.priority ? process : highestPriority;
      });
  
      const endTime = time + currentProcess.burstTime;
      results.push({
        id: currentProcess.id,
        startTime: time,
        endTime,
        waitingTime: time - currentProcess.arrivalTime,
        turnaroundTime: endTime - currentProcess.arrivalTime,
      });
  
      time = endTime;
      const index = remainingProcesses.indexOf(currentProcess);
      remainingProcesses.splice(index, 1);
    }
  
    return results;
  };
  