// src/algorithms/roundRobin.js
export const roundRobin = (processes, timeQuantum) => {
    let time = 0;
    const queue = [];
    const results = [];
    const remainingBurstTimes = processes.map(p => p.burstTime);
    let index = 1;
  
    while (queue.length > 0 || index < processes.length) {
      // Add processes that have arrived by the current time to the queue
      while (index < processes.length && processes[index].arrivalTime <= time) {
        queue.push(processes[index]);
        index++;
      }
  
      if (queue.length === 0) {
        time = processes[index].arrivalTime;
        continue;
      }
  
      const currentProcess = queue.shift();
      const remainingBurst = remainingBurstTimes[currentProcess.id - 1];
  
      if (remainingBurst > timeQuantum) {
        // Process can't complete in this time slice
        time += timeQuantum;
        remainingBurstTimes[currentProcess.id - 1] -= timeQuantum;
        queue.push(currentProcess);
      } else {
        // Process can complete in this time slice
        time += remainingBurst;
        results.push({
          id: currentProcess.id,
          startTime: time - remainingBurst,
          endTime: time,
          waitingTime: time - currentProcess.arrivalTime - currentProcess.burstTime,
          turnaroundTime: time - currentProcess.arrivalTime,
        });
        remainingBurstTimes[currentProcess.id - 1] = 0;
      }
    }
  
    return results;
  };
  