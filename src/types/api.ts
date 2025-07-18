export interface SimulationRequest {
  scenario: string;
  parameters: Record<string, unknown>;
}

export interface SimulationResponse {
  id: string;
  scenario: string;
  result: string;
  timestamp: string;
  parameters: Record<string, unknown>;
}

export interface ApiError {
  message: string;
  code: string;
  details?: Record<string, unknown>;
} 