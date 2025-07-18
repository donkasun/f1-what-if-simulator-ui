import { useState, useCallback } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '../config/constants';
import { runSimulation } from '../services/queries';
import type { SimulationRequest, SimulationResponse } from '../types/api';

interface SimulationResult {
  id: string;
  scenario: string;
  result: string;
  timestamp: string;
}

export const useSimulation = () => {
  const [results, setResults] = useState<SimulationResult[]>([]);
  const queryClient = useQueryClient();

  const simulationMutation = useMutation({
    mutationFn: runSimulation,
    onSuccess: (data: SimulationResponse) => {
      const newResult: SimulationResult = {
        id: data.id,
        scenario: data.scenario,
        result: data.result,
        timestamp: data.timestamp,
      };
      
      setResults(prev => [newResult, ...prev]);
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.RESULTS] });
    },
    onError: (error) => {
      console.error('Simulation failed:', error);
    },
  });

  const runSimulationHandler = useCallback((params: SimulationRequest) => {
    simulationMutation.mutate(params);
  }, [simulationMutation]);

  const resetResults = useCallback(() => {
    setResults([]);
  }, []);

  return {
    results,
    runSimulation: runSimulationHandler,
    resetResults,
    isLoading: simulationMutation.isPending,
    error: simulationMutation.error,
  };
}; 