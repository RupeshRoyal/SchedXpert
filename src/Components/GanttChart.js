// src/components/GanttChart.js
import React from 'react';

const GanttChart = ({ results }) => {
  const colors = ['#118AB2', '#06D6A0', '#FFD166', '#FF61A6', '#6A0572'];

  const totalTime = results[results.length - 1]?.endTime || 1;

  return (
    <div className="mt-4 p-4 bg-[#0d1117] rounded-lg">
      <h3 className="text-xl font-bold text-center text-[#ffe83d] mb-4">Gantt Chart</h3>
      <div className="flex items-center relative h-16 border border-[#6e40c9] rounded-lg overflow-hidden">
        {results.map((result, index) => (
          <div
            key={result.id}
            className="flex items-center justify-center mt-8 mb-8 text-white font-bold text-lg px-2 relative"
            style={{
              width: `${Math.max(((result.endTime - result.startTime) / totalTime) * 100, 5)}%`,
              backgroundColor: colors[index % colors.length],
              minWidth: '50px',
            }}
          >
            P{result.id}
            <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 text-md  text-[#ffe83d]">
              {result.startTime} - {result.endTime}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GanttChart;
