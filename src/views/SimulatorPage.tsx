import React from 'react';
import ControlPanel from '../components/features/ControlPanel';
import ResultsDisplay from '../components/features/ResultsDisplay';
import { useSimulation } from '../hooks/useSimulation';

const SimulatorPage: React.FC = () => {
  const { results, runSimulation, resetResults, isLoading, error } = useSimulation();

  const handleRunSimulation = () => {
    runSimulation({
      driver_id: 1,
      track_id: 1,
      season: 2024,
      weather_conditions: 'dry',
      car_setup: {
        downforce: 'high',
        tire_compound: 'soft'
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              F1 What-If Simulator
            </h1>
            <p className="text-gray-600">
              Explore different Formula 1 scenarios and see how they would affect race outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <ControlPanel
                onRunSimulation={handleRunSimulation}
                onReset={resetResults}
                isLoading={isLoading}
              />
            </div>
            <div>
              <ResultsDisplay
                results={results}
                isLoading={isLoading}
                error={error?.message || null}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulatorPage; 