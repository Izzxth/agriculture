import { SensorReadings } from './components/SensorReading';
import { WeatherForecast } from './components/WeatherForecast';
import { Bot, Settings } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Bot className="w-8 h-8 text-green-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">Smart Farming Tool</span>
            </div>
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <Settings className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Field Overview</h1>
            <p className="mt-1 text-gray-500">Real-time monitoring and insights</p>
          </div>

          <SensorReadings />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <WeatherForecast />
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Irrigation Status</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Next Scheduled Irrigation</span>
                  <span className="font-semibold">Today, 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold">45 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Water Usage Today</span>
                  <span className="font-semibold">2.5 liters/m²</span>
                </div>
                <button className="w-full mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  Adjust Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;