import React, { useState } from 'react';
import { fcfs } from '../algorithms/fcfs';
import { roundRobin } from '../algorithms/roundRobin';
import { sjf } from '../algorithms/sjf';
import { srjf } from '../algorithms/srjf';
import { priorityScheduling } from '../algorithms/priority';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

const AlgorithmRunner = ({ processes, selectedAlgorithm, setResults, resetInputs }) => {
  const [switchTime, setSwitchTime] = useState(1);

  const handleRunClick = () => {
    if (processes.length === 0 || selectedAlgorithm === '') {
      toast.error('Please provide valid inputs and select an algorithm.');
      return;
    }

    let results = [];
    switch (selectedAlgorithm) {
      case 'FCFS':
        results = fcfs(processes);
        break;
      case 'Round Robin':
        results = roundRobin(processes, switchTime);
        break;
      case 'SJF':
        results = sjf(processes);
        break;
      case 'SRJF':
        results = srjf(processes);
        break;
      case 'Priority':
        results = priorityScheduling(processes);
        break;
      default:
        toast.error('Selected algorithm is not implemented.');
        return;
    }

    setResults(results);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex space-x-4 mb-4">
      <button 
      className="flex items-center bg-green-500 text-[#ffffff] text-2xl font-bold border border-green-400 px-4 py-2 rounded hover:bg-green-600 hover:text-green-100 transition-all"
      onClick={handleRunClick}
    >
      <FontAwesomeIcon
        icon={faCirclePlay}
        style={{ fontSize: '24px' }} // Icon size
        className="mr-2 transition-colors duration-0" // Transition for color change
      />
      Run
    </button>
    <button className="flex items-center bg-blue-500 text-white text-xl px-4 py-2 rounded hover:bg-blue-600 transition-all">
      <FontAwesomeIcon
        icon={faRotateRight}
        style={{ color: '#ffffff', fontSize: '24px' }} // Adjust size and color as needed
        className="mr-2 transition-colors duration-0"
      />
      Reset
    </button>

      </div>
      {selectedAlgorithm === 'Round Robin' && (
        <div className="flex items-center space-x-2">
          <button 
            className="bg-gray-300 text-gray-800 px-2 py-1 rounded hover:bg-gray-400"
            onClick={() => setSwitchTime(Math.max(switchTime - 1, 1))}
          >
            -
          </button>
          <span className="text-lg font-semibold">Time Quantum: {switchTime}</span>
          <button 
            className="bg-gray-300 text-gray-800 px-2 py-1 rounded hover:bg-gray-400"
            onClick={() => setSwitchTime(switchTime + 1)}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default AlgorithmRunner;
