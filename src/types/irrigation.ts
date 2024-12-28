// src/types/irrigation.ts
export interface SoilMoistureData {
    sensor: string;
    value: number;
    depth: string;
    status: 'optimal' | 'low' | 'high';
}

export interface WeatherData {
    parameter: string;
    value: number;
    unit: string;
    trend: 'up' | 'down' | 'stable';
}

export interface IrrigationSchedule {
    zone: string;
    duration: number;
    status: 'active' | 'scheduled' | 'completed';
    startTime: string;
}

export interface WaterQualityMetric {
    parameter: string;
    value: number;
    unit: string;
    status: 'good' | 'warning' | 'alert';
}