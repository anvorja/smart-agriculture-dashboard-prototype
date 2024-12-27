// src/data/irrigationMockData.ts
import {IrrigationSchedule, SoilMoistureData, WaterQualityMetric, WeatherData} from "@/types/irrigation";

export const moistureData: SoilMoistureData[] = [
    { sensor: 'S1', value: 28, depth: '20cm', status: 'optimal' },
    { sensor: 'S2', value: 22, depth: '40cm', status: 'low' },
    { sensor: 'S3', value: 32, depth: '60cm', status: 'high' }
];

export const weatherData: WeatherData[] = [
    { parameter: 'Temperatura', value: 24.5, unit: '°C', trend: 'up' },
    { parameter: 'Humedad Relativa', value: 65, unit: '%', trend: 'down' },
    { parameter: 'Velocidad del Viento', value: 12, unit: 'km/h', trend: 'stable' },
    { parameter: 'Evapotranspiración', value: 5.2, unit: 'mm/día', trend: 'up' }
];

export const waterQualityData: WaterQualityMetric[] = [
    { parameter: 'pH', value: 6.8, unit: '', status: 'good' },
    { parameter: 'Conductividad', value: 1.2, unit: 'dS/m', status: 'good' },
    { parameter: 'Sodio', value: 180, unit: 'ppm', status: 'warning' }
];

export const irrigationSchedule: IrrigationSchedule[] = [
    { zone: 'Zona A', duration: 45, status: 'active', startTime: '08:00' },
    { zone: 'Zona B', duration: 30, status: 'scheduled', startTime: '09:30' },
    { zone: 'Zona C', duration: 40, status: 'scheduled', startTime: '11:00' }
];
