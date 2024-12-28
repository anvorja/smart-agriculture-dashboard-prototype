import {
    HarvestMetrics,
    OrganicMatterReading,
    YieldEstimate,
    MaturityIndicator,
    HarvestPlanning,
    QualityMetric,
    HistoricalYield
} from '@/types/harvest'

export const currentMetrics: HarvestMetrics = {
    maturityIndex: 85,
    moistureLevel: 14.5,
    grainQuality: 92,
    estimatedYield: 6.8
}

export const organicReadings: OrganicMatterReading[] = [
    {
        date: '2024-01',
        chlorophyll: 45.2,
        nitrogen: 2.8,
        biomass: 12.5,
        leafArea: 4.2,
        soilMoisture: 32
    },
    // ... más datos
]

export const yieldEstimates: YieldEstimate[] = [
    {
        zone: 'Zona Norte',
        expected: 7.2,
        actual: 6.8,
        unit: 'ton/ha',
        variance: -5.5
    },
    // ... más datos
]

export const maturityIndicators: MaturityIndicator[] = [
    {
        parameter: 'Humedad del grano',
        value: 14.5,
        status: 'optimal',
        trend: 'stable'
    },
    // ... más datos
]

export const harvestPlan: HarvestPlanning = {
    estimatedDate: '2024-04-15',
    weatherForecast: {
        condition: 'Soleado',
        probability: 85
    },
    readiness: 85,
    recommendedWindow: {
        start: '2024-04-12',
        end: '2024-04-18'
    }
}

export const qualityMetrics: QualityMetric[] = [
    {
        metric: 'Proteína',
        value: 12.5,
        target: 13.0,
        unit: '%',
        status: 'good'
    },
    // ... más datos
]

export const historicalYields: HistoricalYield[] = [
    {
        period: '2023-Q1',
        yield: 6.2,
        target: 6.5
    },
    // ... más datos
]