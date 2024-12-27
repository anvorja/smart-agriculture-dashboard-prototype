// src/data/analysisMockData.ts
import {
    SensorReading,
    SoilCompositionData,
    SoilPropertyData,
    SoilClassification,
    NutrientRatio,
    NutrientData, DrainageData, TerrainZone, SeasonalPattern, HistoricalMetric
} from '@/types/analysis'

export const sensorData: SensorReading[] = [
    {
        depth: '25cm',
        humidity: '65%',
        conductivity: '2.3 mS/cm',
        temperature: '24°C'
    },
    {
        depth: '40cm',
        humidity: '70%',
        conductivity: '2.5 mS/cm',
        temperature: '22°C'
    },
    {
        depth: '66cm',
        humidity: '75%',
        conductivity: '2.7 mS/cm',
        temperature: '21°C'
    }
];

export const soilComposition: SoilCompositionData[] = [
    {
        type: 'Arena',
        percentage: 35,
        characteristics: 'Buena aireación, drenaje rápido'
    },
    {
        type: 'Limo',
        percentage: 40,
        characteristics: 'Retención de nutrientes moderada'
    },
    {
        type: 'Arcilla',
        percentage: 25,
        characteristics: 'Alta retención de agua y nutrientes'
    }
]

export const soilProperties: SoilPropertyData[] = [
    {
        property: 'Capacidad de retención de agua',
        value: 65,
        unit: '%',
        status: 'optimal',
        target: 70
    },
    {
        property: 'Porosidad',
        value: 45,
        unit: '%',
        status: 'warning',
        target: 50
    },
    {
        property: 'Materia orgánica',
        value: 2.8,
        unit: '%',
        status: 'warning',
        target: 3.5
    }
]

export const soilClassification: SoilClassification = {
    texture: 'Franco-arenosa',
    structure: 'Granular',
    density: 1.4,
    waterRetention: 0.25,
    infiltration: 15
}

// data/analysisMockData.ts
export const nutrientLevels: NutrientData[] = [
    {
        nutrient: 'Nitrógeno (N)',
        current: 35,
        minimum: 30,
        maximum: 50,
        unit: 'mg/kg',
        category: 'macronutrient',
        status: 'optimal'
    },
    {
        nutrient: 'Fósforo (P)',
        current: 15,
        minimum: 20,
        maximum: 40,
        unit: 'mg/kg',
        category: 'macronutrient',
        status: 'deficient'
    },
    {
        nutrient: 'Potasio (K)',
        current: 180,
        minimum: 150,
        maximum: 250,
        unit: 'mg/kg',
        category: 'macronutrient',
        status: 'optimal'
    },
    {
        nutrient: 'Magnesio (Mg)',
        current: 12,
        minimum: 15,
        maximum: 25,
        unit: 'mg/kg',
        category: 'macronutrient',
        status: 'deficient'
    }
]

export const nutrientRatios: NutrientRatio[] = [
    {
        name: 'N:P',
        value: 2.33,
        ideal: 2.5,
        description: 'Relación nitrógeno-fósforo'
    },
    {
        name: 'K:Mg',
        value: 15,
        ideal: 13,
        description: 'Relación potasio-magnesio'
    }
]

export const nutrientTrends = [
    { month: 'Ene', n: 32, p: 18, k: 175 },
    { month: 'Feb', n: 34, p: 16, k: 180 },
    { month: 'Mar', n: 35, p: 15, k: 182 },
    { month: 'Abr', n: 33, p: 17, k: 178 }
]

// data/analysisMockData.ts
export const terrainZones: TerrainZone[] = [
    {
        id: 'z1',
        name: 'Zona Norte',
        area: 2.5,
        avgSlope: 3.2,
        avgElevation: 245,
        slopeClass: 'gentle',
        drainageQuality: 'good'
    },
    {
        id: 'z2',
        name: 'Zona Central',
        area: 3.8,
        avgSlope: 1.5,
        avgElevation: 242,
        slopeClass: 'flat',
        drainageQuality: 'moderate'
    },
    {
        id: 'z3',
        name: 'Zona Sur',
        area: 2.2,
        avgSlope: 4.8,
        avgElevation: 248,
        slopeClass: 'moderate',
        drainageQuality: 'good'
    }
]

export const elevationData = [
    { position: '0%', elevation: 242 },
    { position: '20%', elevation: 244 },
    { position: '40%', elevation: 245 },
    { position: '60%', elevation: 243 },
    { position: '80%', elevation: 246 },
    { position: '100%', elevation: 248 }
]

export const drainageData: DrainageData[] = [
    { zoneId: 'z1', flow: 12.5, accumulation: 45, direction: 'SE' },
    { zoneId: 'z2', flow: 8.2, accumulation: 65, direction: 'S' },
    { zoneId: 'z3', flow: 15.8, accumulation: 35, direction: 'SW' }
]

export const historicalData = {
    moisture: [
        { month: '2023-10', value: 68, target: 70 },
        { month: '2023-11', value: 72, target: 70 },
        { month: '2023-12', value: 65, target: 70 },
        { month: '2024-01', value: 69, target: 70 },
        { month: '2024-02', value: 71, target: 70 },
        { month: '2024-03', value: 70, target: 70 }
    ] as HistoricalMetric[],
    temperature: [
        { month: '2023-10', value: 22, target: 25 },
        { month: '2023-11', value: 24, target: 25 },
        { month: '2023-12', value: 26, target: 25 },
        { month: '2024-01', value: 25, target: 25 },
        { month: '2024-02', value: 23, target: 25 },
        { month: '2024-03', value: 24, target: 25 }
    ] as HistoricalMetric[],
    pH: [
        { month: '2023-10', value: 6.8, target: 7.0 },
        { month: '2023-11', value: 6.9, target: 7.0 },
        { month: '2023-12', value: 7.1, target: 7.0 },
        { month: '2024-01', value: 7.0, target: 7.0 },
        { month: '2024-02', value: 6.9, target: 7.0 },
        { month: '2024-03', value: 6.8, target: 7.0 }
    ] as HistoricalMetric[]
}

export const seasonalPatterns: SeasonalPattern[] = [
    {
        season: 'Primavera',
        moisture: 'Alta',
        temperature: 'Moderada',
        growth: 'Óptimo',
        alerts: 2
    },
    {
        season: 'Verano',
        moisture: 'Baja',
        temperature: 'Alta',
        growth: 'Moderado',
        alerts: 5
    },
    {
        season: 'Otoño',
        moisture: 'Moderada',
        temperature: 'Moderada',
        growth: 'Bueno',
        alerts: 1
    },
    {
        season: 'Invierno',
        moisture: 'Alta',
        temperature: 'Baja',
        growth: 'Lento',
        alerts: 3
    }
]