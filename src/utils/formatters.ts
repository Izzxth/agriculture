export const formatSensorValue = (value: number, unit: string): string => {
    switch (unit) {
      case 'temperature':
        return `${value}°C`;
      case 'pH':
        return value.toFixed(1);
      case 'moisture':
        return `${value}%`;
      default:
        return `${value}`;
    }
  };
  
  export const formatTimestamp = (timestamp: string): string => {
    return new Date(timestamp).toLocaleTimeString()
  };