// API endpoints
export const API_BASE_URL = import.meta.env.PROD 
  ? 'https://your-production-api.com' 
  : 'http://localhost:3000';

export const WS_URL = import.meta.env.PROD
  ? 'wss://your-production-api.com/ws'
  : 'ws://localhost:3000/ws';

// Sensor ranges
export const SENSOR_RANGES = {
  soilMoisture: { min: 40, max: 60 },
  temperature: { min: 20, max: 25 },
  pH: { min: 6.0, max: 7.0 }
} as const;