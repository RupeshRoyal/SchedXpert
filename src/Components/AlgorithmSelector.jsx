import React from 'react';

const AlgorithmSelector = ({ onAlgorithmChange }) => {
  const algorithms = ['Choose One','FCFS', 'Round Robin', 'SJF', 'SRJF', 'Priority'];

  return (
    <div className="flex items-center p-4">
      <h2 className="text-xl font-bold mb-2">Select Algorithm :</h2>
      <div className="ml-2 text-lg font-semibold">
        <select
          onChange={(e) => onAlgorithmChange(e.target.value)}
          className="bg-[#6e40c9] text-[#ffe83d] px-4 py-2 rounded hover:bg-purple-700 transition-all"
        >
          {algorithms.map((algorithm) => (
            <option key={algorithm} value={algorithm} className="bg-white text-[#6e40c9]">
              {algorithm}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AlgorithmSelector;
