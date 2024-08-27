// src/components/ProcessTable.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';


const ProcessTable = ({ processes, setProcesses }) => {
  const [processCount, setProcessCount] = useState(processes.length);

  const handleProcessChange = (index, field, value) => {
    const updatedProcesses = processes.map((process, i) =>
      i === index ? { ...process, [field]: value } : process
    );
    setProcesses(updatedProcesses);
  };

  const handleAddProcess = () => {
    const newProcess = {
      id: processes.length + 1,
      arrivalTime: 0,
      burstTime: 0,
    };
    setProcesses([...processes, newProcess]);
    setProcessCount(processCount + 1);
  };

  const handleRemoveProcess = (index) => {
    if (processes.length > 1) {
      const updatedProcesses = processes.filter((_, i) => i !== index);
      setProcesses(updatedProcesses);
      setProcessCount(processCount - 1);
    }
  };

  return (
    <div className="mb-2 p-2 bg-[#0d1117] rounded-lg">
      <h2 className="text-xl font-bold text-[#fffff] text-center mb-2 mt-2">Process Table</h2>
      <table className="table-auto w-full text-[#ffe83d]">
        <thead className="bg-[#6e40c9] ">
          <tr>
            <th className="border-[#bc8cff] px-4 py-2 text-center">Process ID</th>
            <th className="border-[#bc8cff] px-4 py-2 text-center">Arrival Time</th>
            <th className="border-[#bc8cff] px-4 py-2 text-center">Burst Time</th>
            <th className="border-[#bc8cff] px-4 py-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {processes.map((process, index) => (
            <tr key={process.id} className="bg-[#0d1117] border-b border-[#bc8cff]">
              <td className="px-4 py-2 text-center">{process.id}</td>
              <td className="px-4 py-2 text-center">
                <input
                  type="number"
                  value={process.arrivalTime}
                  onChange={(e) => handleProcessChange(index, 'arrivalTime', parseInt(e.target.value))}
                  className="border border-[#bc8cff] rounded bg-transparent text-center text-[#ffe83d] w-full"
                  min="0"
                />
              </td>
              <td className="px-4 py-2 text-center">
                <input
                  type="number"
                  value={process.burstTime}
                  onChange={(e) => handleProcessChange(index, 'burstTime', parseInt(e.target.value))}
                  className="border border-[#bc8cff] rounded bg-transparent text-center text-[#ffe83d] w-full"
                  min="1"
                />
              </td>
              <td className="px-4 py-2 text-center">
                <button
                  onClick={() => handleRemoveProcess(index)}
                  className="bg-red-500 rounded-full text-white px-2 py-1 rounded hover:bg-red-600 border-0"
                >
                  {/* Remove */}
                  <FontAwesomeIcon icon={faCircleXmark} size="xl" style={{ color: "#ffffff" }} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    <div className="mt-4 flex justify-end mr-1">
      <button
      onClick={handleAddProcess}
      className="bg-[#6e40c9] text-[#ffe83d] text-bold text-xl px-4 py-2 text-xl rounded hover:bg-[#5a2d9e] hover:text-[#f9e14b] flex items-center justify-center transition-all duration-300"
    >
      <FontAwesomeIcon 
        className='mr-1 mb-1' 
        size='xl' 
        icon={faCirclePlus} 
        style={{ color: "#ffe83d" }}
      />
      Process
    </button>

      </div>
    </div>
  );
};

export default ProcessTable;
