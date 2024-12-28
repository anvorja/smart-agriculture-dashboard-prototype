
// src/data/plantingMockData.ts
import { CropData, MarketTrend, PlantingAnalysisData } from '@/types/planting'

export const cropOptions: CropData[] = [
    {
        id: 'maiz-01',
        name: 'Maíz',
        cycle: 120,
        density: '60,000 plantas/ha',
        resistance: {
            diseases: 8,
            pests: 7
        },
        market: {
            demand: 9,
            projectedPrice: 380
        }
    },
    {
        id: 'soja-01',
        name: 'Soja',
        cycle: 150,
        density: '350,000 plantas/ha',
        resistance: {
            diseases: 7,
            pests: 8
        },
        market: {
            demand: 8,
            projectedPrice: 420
        }
    }
]

export const marketTrends: MarketTrend[] = [
    { month: 'Ene', price: 380, demand: 85, supply: 70 },
    { month: 'Feb', price: 375, demand: 82, supply: 75 },
    { month: 'Mar', price: 390, demand: 88, supply: 72 },
    { month: 'Abr', price: 400, demand: 90, supply: 68 },
    { month: 'May', price: 385, demand: 86, supply: 73 },
    { month: 'Jun', price: 370, demand: 80, supply: 78 }
]

export const plantingAnalysisData: PlantingAnalysisData = {
    historicalYield: [
        { year: 2019, yield: 5.8 },
        { year: 2020, yield: 6.2 },
        { year: 2021, yield: 5.9 },
        { year: 2022, yield: 6.5 },
        { year: 2023, yield: 6.7 }
    ],
    regionalDemand: [
        { region: 'Norte', demand: 85 },
        { region: 'Sur', demand: 92 },
        { region: 'Este', demand: 78 },
        { region: 'Oeste', demand: 88 }
    ],
    costBenefit: {
        costs: {
            'Semillas': 1200,
            'Fertilizantes': 800,
            'Mano de obra': 1500,
            'Maquinaria': 900
        },
        benefits: {
            'Venta directa': 6000,
            'Subproductos': 800
        }
    }
}