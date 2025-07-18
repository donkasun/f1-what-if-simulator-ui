import React from 'react';
import Spinner from '../common/Spinner';

interface SimulationResult {
  id: string;
  scenario: string;
  result: string;
  timestamp: string;
}

interface ResultsDisplayProps {
  results: SimulationResult[];
  isLoading?: boolean;
  error?: string | null;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({
  results,
  isLoading = false,
  error = null
}) => {
  if (isLoading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Simulation Results</h2>
        <div className="flex items-center justify-center py-8">
          <Spinner size="lg" />
          <span className="ml-2 text-gray-600">Running simulation...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Simulation Results</h2>
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-red-800">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Simulation Results</h2>
      {results.length === 0 ? (
        <p className="text-gray-500 text-center py-8">
          No simulation results yet. Run a simulation to see results here.
        </p>
      ) : (
        <div className="space-y-4">
          {results.map((result) => (
            <div
              key={result.id}
              className="border border-gray-200 rounded-md p-4"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">{result.scenario}</h3>
                <span className="text-sm text-gray-500">{result.timestamp}</span>
              </div>
              <p className="text-gray-700">{result.result}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResultsDisplay; 