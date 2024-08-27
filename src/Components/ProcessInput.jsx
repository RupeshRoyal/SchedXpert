import React, { useState } from 'react';
import ProcessTable from './ProcessTable';
import AlgorithmSelector from './AlgorithmSelector';
import AlgorithmRunner from './AlgorithmRunner';
import GanttChart from './GanttChart';
import BarChart from './BarChart';
import PieCharts from './PieCharts';
import ResultsSection from './ResultsSection';
import ExplanationSection from './ExplanationSection';
import MetricsSection from './MetricsSection';
import { toast } from 'react-toastify';

const ProcessInput = () => {
  const [processes, setProcesses] = useState([
    { id: 1, arrivalTime: 0, burstTime: 5 },
    { id: 2, arrivalTime: 1, burstTime: 3 },
    { id: 3, arrivalTime: 2, burstTime: 8 },
  ]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('');
  const [results, setResults] = useState([]);
  const [switchTime, setSwitchTime] = useState(1);
  const [showExplanation, setShowExplanation] = useState(false); // State to toggle explanation

  const handleAlgorithmChange = (algorithm) => {
    setSelectedAlgorithm(algorithm);
  };

  const resetInputs = () => {
    setProcesses([]);
    setSelectedAlgorithm('');
    setResults([]);
    setSwitchTime(1);
    setShowExplanation(false);
  };

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };

  return (
    <div>
      <div className='flex flex-row justify-center'>
        <img src="https://img.icons8.com/?size=100&id=nd8DnQ3Cg6Gv&format=png&color=000000"
          alt="CPU Scheduler Logo"
          className="w-14 h-14 mt-2 mr-1"/>
        <h1 className="text-3xl mt-5 font-bold mb-6 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffe83d] via-[#ffd700] to-[#ffe83d]">
           Sched
        </span>
        <span className="bg-clip-text text-4xl text-transparent bg-gradient-to-r from-[#6e40c9] via-[#a077d4] to-[#6e40c9]">
          X
        </span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffe83d] via-[#ffd700] to-[#ffe83d]">
          pert
        </span>
        </h1>
      </div>
      
        <ProcessTable processes={processes} setProcesses={setProcesses} />
        <AlgorithmSelector onAlgorithmChange={handleAlgorithmChange} />
        <AlgorithmRunner
          processes={processes}
          switchTime={switchTime}
          selectedAlgorithm={selectedAlgorithm}
          setResults={setResults}
          resetInputs={resetInputs}
        /> 
      
      {results.length > 0 && (
        <div className="mt-6">
          <GanttChart results={results} />
          <BarChart className='mb-10' processes={processes} results={results} />
          <div className='mr-4 mt-14 ml-4 border border-[#6e40c9] rounded-md'>
            <ResultsSection processes={processes} results={results} />
            <PieCharts processes={processes} results={results} />
            <MetricsSection
              results={results}
              processes={processes}
              algorithm={selectedAlgorithm} // Replace `selectedAlgorithm` with the actual variable holding the selected algorithm
            />
          </div>
          <div className="text-center mt-12 mb-20">
            <button 
              className={`${
                showExplanation ? 'bg-[#f2f2f2] text-black hover:bg-[#bc8cff]' : 'bg-[#a757e7] text-white hover:bg-[#bc8cff]'
              } px-4 py-2 rounded`} 
              onClick={toggleExplanation}
            >
              {showExplanation ? 'Hide Explanation' : 'Show Explanation'}
            </button>
            {showExplanation && <ExplanationSection results={results} />}
          </div>
        </div>
      )}
      <footer className="w-full p-4 bg-[#0d1117] text-[#ffe83d] flex justify-center items-center">
            <p className="text-lg mr-1">Spun</p>
            <p className="text-lg text-[#6e40c9] mr-1">By</p>
            <a href="https://github.com/RupeshRoyal" 
              className=" text-[#ffe83d] rounded hover:text-[#ffffff] transition-all"
            >
             Yata Rupesh.
            </a>
          </footer>
    </div>
  );
};

export default ProcessInput;
