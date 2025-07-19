import apiClient from '../api';
import { API_ENDPOINTS } from '../config/constants';
import type { SimulationRequest, SimulationResponse } from '../types/api';

export const runSimulation = async (params: SimulationRequest): Promise<SimulationResponse> => {
  const response = await apiClient.post(API_ENDPOINTS.SIMULATION, params);
  return response.data;
};

export const getSimulationResults = async (simulationId: string): Promise<SimulationResponse> => {
  const response = await apiClient.get(API_ENDPOINTS.RESULTS.replace('{simulation_id}', simulationId));
  return response.data;
}; 