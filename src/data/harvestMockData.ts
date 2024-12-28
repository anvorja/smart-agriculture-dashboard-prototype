import {
    HarvestMetrics,
    OrganicMatterReading,
    YieldEstimate,
    MaturityIndicator,
    HarvestPlanning,
    QualityMetric,
    HistoricalYield
} from '@/types/harvest'
import {Sprout, Target, Timer} from "lucide-react";

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
]

export const historicalYields: HistoricalYield[] = [
    {
        period: '2023-Q1',
        yield: 6.2,
        target: 6.5
    },
    {
        period: '2023-Q2',
        yield: 7.2,
        target: 5.5
    },
]

export const weatherForecast = [
    {
        date: '2024-03-25',
        temperature: 24,
        humidity: 65,
        precipitation: 10,
        windSpeed: 12,
        suitability: 85
    },
    {
        date: '2024-04-25',
        temperature: 19,
        humidity: 85,
        precipitation: 10,
        windSpeed: 12,
        suitability: 80
    },
    {
        date: '2024-05-25',
        temperature: 24,
        humidity: 78,
        precipitation: 11,
        windSpeed: 15,
        suitability: 90
    }
]

export const hourlyForecast = [
    {
        hour: '05:00',
        temperature: 22,
        humidity: 66,
        suitable: true
    },
    {
        hour: '06:00',
        temperature: 18,
        humidity: 75,
        suitable: true
    },
    {
        hour: '07:00',
        temperature: 19,
        humidity: 80,
        suitable: true
    },
    {
        hour: '08:00',
        temperature: 19,
        humidity: 81,
        suitable: true
    },

]

export const harvestPredictions = {
    optimal: {
        date: '2024-03-28',
        confidence: 92,
        yield: 7.2,
        quality: 95
    },
    yieldPredictions: [
        { date: '2024-03-26', yield: 6.8, quality: 88 },
        { date: '2024-03-27', yield: 7.0, quality: 92 },
        { date: '2024-03-28', yield: 7.2, quality: 95 },
        { date: '2024-03-29', yield: 7.1, quality: 93 },
        { date: '2024-03-30', yield: 6.9, quality: 89 }
    ],
    riskFactors: [
        { factor: 'Clima', probability: 15, impact: 'Moderado' },
        { factor: 'Plagas', probability: 8, impact: 'Bajo' },
        { factor: 'Maduración', probability: 5, impact: 'Bajo' }
    ]
}

export const aiAnalysis = {
    overallScore: 87,
    confidence: 92,
    insights: [
        {
            category: 'Rendimiento',
            status: 'positive',
            message: 'Potencial de rendimiento superior al promedio histórico',
            impact: 'alto'
        },
        {
            category: 'Calidad',
            status: 'positive',
            message: 'Parámetros de calidad dentro de rangos óptimos',
            impact: 'medio'
        },
        {
            category: 'Tiempo',
            status: 'warning',
            message: 'Ventana de cosecha limitada por condiciones climáticas',
            impact: 'alto'
        }
    ],
    recommendations: [
        {
            priority: 'alta',
            action: 'Programar cosecha dentro de los próximos 3 días',
            rationale: 'Maximizar calidad y rendimiento'
        },
        {
            priority: 'media',
            action: 'Ajustar configuración de equipos de cosecha',
            rationale: 'Optimizar eficiencia de recolección'
        },
        {
            priority: 'media',
            action: 'Coordinar logística de transporte y almacenamiento',
            rationale: 'Minimizar pérdidas post-cosecha'
        }
    ],
    keyMetrics: [
        {
            name: 'Madurez',
            value: '95%',
            trend: 'optimal',
            icon: Target
        },
        {
            name: 'Humedad',
            value: '14.2%',
            trend: 'good',
            icon: Sprout
        },
        {
            name: 'Tiempo Restante',
            value: '72h',
            trend: 'warning',
            icon: Timer
        }
    ]
}