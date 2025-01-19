export interface SensorData {
    soilMoisture: number;
    temperature: number;
    pH: number;
    timestamp: string;
  }
  
  export const DEFAULT_SENSOR_DATA: SensorData = {
    soilMoisture: 45,
    temperature: 22,
    pH: 6.5,
    timestamp: new Date().toISOString()
  };