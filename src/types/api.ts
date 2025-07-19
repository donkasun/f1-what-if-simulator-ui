export interface SimulationRequest {
  driver_id: number;
  track_id: number;
  season: number;
  weather_conditions?: string;
  car_setup?: Record<string, unknown>;
}

export interface SimulationResponse {
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

export interface ApiError {
  message: string;
  code: string;
  details?: Record<string, unknown>;
} 