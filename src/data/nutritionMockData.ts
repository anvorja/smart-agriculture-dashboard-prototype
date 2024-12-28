// src/data/nutritionMockData.ts
import { NutrientLevel, FertilizationEvent, CropHealthMetric } from '@/types/nutrition'

export const nutrientLevels: NutrientLevel[] = [
    {
        name: 'Nitrógeno (N)',
        current: 35,
        optimal: 40,
        unit: 'mg/kg',
        status: 'warning'
    },
    {
        name: 'Fósforo (P)',
        current: 25,
        optimal: 30,
        unit: 'mg/kg',
        status: 'optimal'
    },
    {
        name: 'Potasio (K)',
        current: 180,
        optimal: 200,
        unit: 'mg/kg',
        status: 'warning'
    },
    {
        name: 'Magnesio (Mg)',
        current: 15,
        optimal: 20,
        unit: 'mg/kg',
        status: 'deficient'
    }
]

export const fertilizationHistory: FertilizationEvent[] = [
    {
        date: '2024-03-15',
        type: 'NPK 15-15-15',
        amount: '300 kg/ha',
        area: 'Sector A',
        status: 'completed'
    },
    {
        date: '2024-03-20',
        type: 'Urea',
        amount: '150 kg/ha',
        area: 'Sector B',
        status: 'scheduled'
    },
    {
        date: '2024-03-10',
        type: 'Sulfato de Magnesio',
        amount: '100 kg/ha',
        area: 'Sector C',
        status: 'completed'
    }
]

export const healthMetrics: CropHealthMetric[] = [
    {
        name: 'Índice NDVI',
        value: 0.75,
        trend: 'up',
        status: 'good'
    },
    {
        name: 'Cobertura Foliar',
        value: 85,
        trend: 'stable',
        status: 'good'
    },
    {
        name: 'Estrés Hídrico',
        value: 0.3,
        trend: 'up',
        status: 'warning'
    }
]

export const biomassTrends = [
    { date: '2024-01', value: 2.5 },
    { date: '2024-02', value: 3.8 },
    { date: '2024-03', value: 4.2 },
    { date: '2024-04', value: 4.7 },
    { date: '2024-05', value: 5.1 }
]

export const phenologicalStages = [
    {
        stage: 'Germinación',
        startDate: '2024-01-15',
        endDate: '2024-01-25',
        completed: true
    },
    {
        stage: 'Desarrollo Vegetativo',
        startDate: '2024-01-26',
        endDate: '2024-02-28',
        completed: true
    },
    {
        stage: 'Floración',
        startDate: '2024-03-01',
        endDate: '2024-03-30',
        current: true,
        progress: 75
    },
    {
        stage: 'Desarrollo del Fruto',
        startDate: '2024-04-01',
        endDate: '2024-05-15',
        upcoming: true
    }
]

// Datos para los mapas de calor y análisis espacial
export const spatialAnalysis = {
    ndviMap: [
        // Matriz de valores NDVI para el mapa de calor
        [0.8, 0.7, 0.75, 0.82],
        [0.72, 0.68, 0.71, 0.79],
        [0.76, 0.73, 0.77, 0.81],
        [0.79, 0.75, 0.78, 0.83]
    ],
    soilNutrients: [
        // Matriz de concentración de nutrientes
        [35, 32, 38, 36],
        [31, 34, 33, 37],
        [36, 35, 34, 32],
        [33, 37, 35, 34]
    ]
}