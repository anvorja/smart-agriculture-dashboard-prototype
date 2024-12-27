// src/types/analysis.ts
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

export interface TerrainData {
  time: string;
  humidity: number;
  ph: number;
  temp: number;
  conductivity: number;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
}

export interface SensorStatus {
  id: string;
  name: string;
  status: 'active' | 'waiting' | 'error';
  lastSync: string;
  nextReading?: string;
  batteryLevel: number;
}

export interface SoilCompositionData {
  type: string;
  percentage: number;
  characteristics: string;
}

export interface SoilPropertyData {
  property: string;
  value: number;
  unit: string;
  status: 'optimal' | 'warning' | 'critical';
  target: number;
}

export interface SoilClassification {
  texture: string;
  structure: string;
  density: number;
  waterRetention: number;
  infiltration: number;
}

export interface NutrientData {
  nutrient: string;
  current: number;
  minimum: number;
  maximum: number;
  unit: string;
  category: 'macronutrient' | 'micronutrient';
  status: 'deficient' | 'optimal' | 'excess';
}

export interface NutrientRatio {
  name: string;
  value: number;
  ideal: number;
  description: string;
}

// types/analysis.ts
export interface TerrainPoint {
  x: number;
  y: number;
  elevation: number;
  slope: number;
  aspect: string;
}

export interface TerrainZone {
  id: string;
  name: string;
  area: number;
  avgSlope: number;
  avgElevation: number;
  slopeClass: 'flat' | 'gentle' | 'moderate' | 'steep';
  drainageQuality: 'good' | 'moderate' | 'poor';
}

export interface DrainageData {
  zoneId: string;
  flow: number;
  accumulation: number;
  direction: string;
}

export interface HistoricalMetric {
  month: string;
  value: number;
  target: number;
}

export interface SeasonalPattern {
  season: string;
  moisture: 'Alta' | 'Moderada' | 'Baja';
  temperature: 'Alta' | 'Moderada' | 'Baja';
  growth: 'Óptimo' | 'Bueno' | 'Moderado' | 'Lento';
  alerts: number;
}

