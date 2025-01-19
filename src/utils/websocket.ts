import { create } from 'zustand';
import { SensorData, DEFAULT_SENSOR_DATA } from '../types/sensor';

interface SensorStore {
  sensorData: SensorData;
  updateSensorData: (data: Partial<SensorData>) => void;
}

export const useSensorStore = create<SensorStore>((set) => ({
  sensorData: DEFAULT_SENSOR_DATA,
  updateSensorData: (data) => set((state) => ({
    sensorData: { ...state.sensorData, ...data, timestamp: new Date().toISOString() }
  }))
}));