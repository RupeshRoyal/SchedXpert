import React from 'react';

const ResultsSection = ({ results }) => {
  return (
    <div className="bg-[#0d1117] text-white p-4 mb-10">
      <h4 className="text-xl font-semibold mb-4 text-center text-[#ffe83d]">Result Table</h4>
      <table className="min-w-full border border-[#bc8cff]">
        <thead>
          <tr className="bg-[#6e40c9] text-white">
            <th className="px-4 py-2 border border-[#bc8cff] text-center">Process ID</th>
            <th className="px-4 py-2 border border-[#bc8cff] text-center">Burst Time</th>
            <th className="px-4 py-2 border border-[#bc8cff] text-center">Start Time</th>
            <th className="px-4 py-2 border border-[#bc8cff] text-center">End Time</th>
            <th className="px-4 py-2 border border-[#bc8cff] text-center">Turnaround Time</th>
            <th className="px-4 py-2 border border-[#bc8cff] text-center">Waiting Time</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.id} className="hover:bg-[#f2f2f2] hover:text-black">
              <td className="px-4 py-2 border border-[#bc8cff]">P{result.id}</td>
              <td className="px-4 py-2 border border-[#bc8cff]">{result.endTime - result.startTime}</td>
              <td className="px-4 py-2 border border-[#bc8cff]">{result.startTime}</td>
              <td className="px-4 py-2 border border-[#bc8cff]">{result.endTime}</td>
              <td className="px-4 py-2 border border-[#bc8cff]">{result.turnaroundTime}</td>
              <td className="px-4 py-2 border border-[#bc8cff]">{result.waitingTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsSection;
