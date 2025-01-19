import { Cloud, Droplets, Thermometer, Wind } from 'lucide-react';
import { Card } from './ui/Card';

export function WeatherForecast() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-4">Weather Forecast</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center space-x-2">
          <Thermometer className="text-red-500" />
          <div>
            <p className="text-sm text-gray-500">Temperature</p>
            <p className="font-semibold">28°C</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Droplets className="text-blue-500" />
          <div>
            <p className="text-sm text-gray-500">Humidity</p>
            <p className="font-semibold">65%</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Wind className="text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Wind Speed</p>
            <p className="font-semibold">12 km/h</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Cloud className="text-gray-400" />
          <div>
            <p className="text-sm text-gray-500">Cloud Cover</p>
            <p className="font-semibold">30%</p>
          </div>
        </div>
      </div>
    </Card>
  );
}