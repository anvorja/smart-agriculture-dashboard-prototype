// src/types/nutrition.ts
export interface NutrientLevel {
    name: string
    current: number
    optimal: number
    unit: string
    status: 'optimal' | 'warning' | 'deficient'
}

export interface FertilizationEvent {
    date: string
    type: string
    amount: string
    area: string
    status: 'completed' | 'scheduled' | 'cancelled'
}

export interface CropHealthMetric {
    name: string
    value: number
    trend: 'up' | 'down' | 'stable'
    status: 'good' | 'warning' | 'alert'
}