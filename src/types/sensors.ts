// src/types/sensors.ts
export interface SensorData {
  time: string
  value: number
  type?: string
  unit?: string
}

export interface SensorReading {
  depth: string;
  humidity: string;
  conductivity: string;
  temperature: string;
}

