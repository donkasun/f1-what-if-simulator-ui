// API Configuration
export const API_ENDPOINTS = {
  SIMULATION: '/api/v1/simulate',
  RESULTS: '/api/v1/simulation/{simulation_id}',
} as const;

// TanStack Query Keys
export const QUERY_KEYS = {
  SIMULATION: 'simulation',
  RESULTS: 'results',
} as const;

// Application Constants
export const APP_CONFIG = {
  TITLE: 'F1 What-If Simulator',
  DESCRIPTION: 'Explore Formula 1 scenarios with advanced simulation',
  VERSION: '1.0.0',
} as const;

// Event Names
export const EVENTS = {
  SIMULATION_STARTED: 'simulation:started',
  SIMULATION_COMPLETED: 'simulation:completed',
  SIMULATION_ERROR: 'simulation:error',
} as const; 