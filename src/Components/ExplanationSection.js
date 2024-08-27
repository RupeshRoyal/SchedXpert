import React from 'react';

const ExplanationSection = ({ results }) => {
  return (
    <div className="explanation-section mt-4 p-4 bg-[#0d1117] rounded-lg">
      <h4 className="font-bold text-lg text-[#ffe83d] mb-4">Detailed Calculations</h4>
      {results.map((result) => {
        // Calculate burst time if it's not provided in the result data
        const burstTime = result.burstTime || (result.endTime - result.startTime);
        // Calculate arrival time based on start time and waiting time
        const calculatedArrivalTime = result.startTime - result.waitingTime;

        return (
          <div key={result.id} className="my-2 p-4 border border-[#bc8cff] rounded bg-[#1a1d24] text-white">
            <p className="text-[#ffe83d]"><strong>Process {`P${result.id}`}:</strong></p>
            
            <p>
              <strong>Start Time:</strong> {result.startTime}
            </p> 
            <p>
              <strong>Burst Time:</strong> {burstTime} 
              {/* <span className="text-gray-400"> (Calculated as: End Time - Start Time = {result.endTime} - {result.startTime})</span> */}
            </p>
            <p>
              <strong>Arrival Time:</strong> {calculatedArrivalTime} 
              {/* <span className="text-gray-400"> (Calculated as: Start Time - Waiting Time = {result.startTime} - {result.waitingTime})</span> */}
            </p>
            <p>
              <strong>End Time:</strong> {result.endTime}
            </p>
            <p>
              <strong>Turnaround Time:</strong> {result.turnaroundTime} 
              <span className="text-gray-400"> (Calculated as: End Time - Arrival Time = {result.endTime} - {calculatedArrivalTime})</span>
            </p>
            <p>
              <strong>Waiting Time:</strong> {result.waitingTime} 
              <span className="text-gray-400">(Calculated as: Turn Around Time -  Burst Time = {result.turnaroundTime} - {burstTime})</span>
              </p>
            
          </div>
        );
      })}
    </div>
  );
};

export default ExplanationSection;
