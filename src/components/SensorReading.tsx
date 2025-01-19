import { DashboardCard } from './DashboardCard';
import { Droplets, Thermometer, Gauge, Sprout } from 'lucide-react';
import { useSensorStore } from '../utils/websocket';
import { formatSensorValue, formatTimestamp } from '../utils/formatters';
import { SENSOR_RANGES } from '../utils/constants';

export function SensorReadings() {
  // Extracting sensor data from the store
  const { sensorData } = useSensorStore();

  return (
    <div className="space-y-4">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Sensor Readings</h2>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-sm text-gray-500">Live Preview</span>
        </div>
      </div>

      {/* Sensor Data Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Soil Moisture"
          value={formatSensorValue(sensorData?.soilMoisture, 'moisture')}
          icon={<Droplets className="w-6 h-6 text-blue-500" />}
          description={`Optimal range: ${SENSOR_RANGES.soilMoisture.min}-${SENSOR_RANGES.soilMoisture.max}%`}
        />
        <DashboardCard
          title="Soil Temperature"
          value={formatSensorValue(sensorData?.temperature, 'temperature')}
          icon={<Thermometer className="w-6 h-6 text-red-500" />}
          description={`Optimal range: ${SENSOR_RANGES.temperature.min}-${SENSOR_RANGES.temperature.max}°C`}
        />
        <DashboardCard
          title="Soil pH"
          value={formatSensorValue(sensorData?.pH, 'pH')}
          icon={<Gauge className="w-6 h-6 text-purple-500" />}
          description={`Optimal range: ${SENSOR_RANGES.pH.min}-${SENSOR_RANGES.pH.max}`}
        />
        <DashboardCard
          title="Last Updated"
          value={formatTimestamp(sensorData?.timestamp)}
          icon={<Sprout className="w-6 h-6 text-green-500" />}
          description="Real-time sensor data"
        />
      </div>
    </div>
  );
}
