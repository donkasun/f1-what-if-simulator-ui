import React from 'react';
import Button from '../common/Button';

interface ControlPanelProps {
  onRunSimulation: () => void;
  onReset: () => void;
  isLoading?: boolean;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  onRunSimulation,
  onReset,
  isLoading = false
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Simulation Controls</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button
            onClick={onRunSimulation}
            isLoading={isLoading}
            disabled={isLoading}
            className="w-full"
          >
            Run Simulation
          </Button>
          <Button
            variant="outline"
            onClick={onReset}
            disabled={isLoading}
            className="w-full"
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel; 