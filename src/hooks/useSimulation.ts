import { useState, useCallback } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '../config/constants';
import { runSimulation } from '../services/queries';
import type { SimulationRequest, SimulationResponse } from '../types/api';

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

export const useSimulation = () => {
  const [results, setResults] = useState<SimulationResult[]>([]);
  const queryClient = useQueryClient();

  const simulationMutation = useMutation({
    mutationFn: runSimulation,
    onSuccess: (data: SimulationResponse) => {
      const newResult: SimulationResult = {
        simulation_id: data.simulation_id,
        driver_id: data.driver_id,
        track_id: data.track_id,
        season: data.season,
        predicted_lap_time: data.predicted_lap_time,
        confidence_score: data.confidence_score,
        weather_conditions: data.weather_conditions,
        car_setup: data.car_setup,
        created_at: data.created_at,
        processing_time_ms: data.processing_time_ms,
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