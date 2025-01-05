// src/types/planting.ts
export interface CropData {
    id: string
    name: string
    cycle: number // días
    density: string
    resistance: {
        diseases: number // 1-10
        pests: number // 1-10
    }
    market: {
        demand: number // 1-10
        projectedPrice: number
    }
}

export interface MarketTrend {
    month: string
    price: number
    demand: number
    supply: number
}

export interface PlantingPlanData {
    startDate: string
    area: number
    estimatedYield: number
    projectedRevenue: number
}

// Interfaces adicionales para componentes específicos
export interface RatingIndicatorProps {
    value: number
    label: string
    maxValue?: number
}

export interface PlantingAnalysisData {
    historicalYield: Array<{
        year: number
        yield: number
    }>
    regionalDemand: Array<{
        region: string
        demand: number
    }>
    costBenefit: {
        costs: Record<string, number>
        benefits: Record<string, number>
    }
}