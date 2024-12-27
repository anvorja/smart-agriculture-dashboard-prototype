// Mock data para las gráficas
import { GrowthTrendData, ResourceUsageData } from '@/types/dashboard'

export const growthTrends: GrowthTrendData[] = [
    { date: '01/03', ndvi: 0.65, moisture: 62, temp: 22 },
    { date: '02/03', ndvi: 0.68, moisture: 65, temp: 23 },
    { date: '03/03', ndvi: 0.72, moisture: 63, temp: 24 },
    { date: '04/03', ndvi: 0.70, moisture: 64, temp: 23 },
    { date: '05/03', ndvi: 0.73, moisture: 66, temp: 22 }
]

export const resourceUsage: ResourceUsageData [] = [
    { time: '08:00', water: 45, nutrients: 30 },
    { time: '10:00', water: 65, nutrients: 45 },
    { time: '12:00', water: 85, nutrients: 60 },
    { time: '14:00', water: 75, nutrients: 55 },
    { time: '16:00', water: 60, nutrients: 40 }
]
