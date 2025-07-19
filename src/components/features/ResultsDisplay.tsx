import React from 'react';
import Spinner from '../common/Spinner';

interface SimulationResult {
  simulation_id: string;
  driver_id: number;
  track_id: number;
  season: number;
  predicted_lap_time: number;
  confidence_score: number;
  weather_conditions: string;
  car_setup: Record<string, unknown>;
  created_at: string;
  processing_time_ms: number;
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
              key={result.simulation_id}
              className="border border-gray-200 rounded-md p-4"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">Driver {result.driver_id} - Track {result.track_id}</h3>
                <span className="text-sm text-gray-500">{result.created_at}</span>
              </div>
              <p className="text-gray-700">
                Predicted Lap Time: {result.predicted_lap_time.toFixed(3)}s
                <br />
                Confidence: {(result.confidence_score * 100).toFixed(1)}%
                <br />
                Weather: {result.weather_conditions}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResultsDisplay; 