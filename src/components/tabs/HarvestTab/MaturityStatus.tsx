'use client'

import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { currentMetrics, maturityIndicators } from '@/data/harvestMockData'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    Gauge,
    Droplets,
    TrendingUp,
    TrendingDown,
    Minus
} from 'lucide-react'

const trendIcons = {
    up: TrendingUp,
    down: TrendingDown,
    stable: Minus
}

const statusColors = {
    optimal: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    warning: 'bg-yellow-50 border-yellow-100 text-yellow-700',
    critical: 'bg-red-50 border-red-100 text-red-700'
}

export const MaturityStatus = () => {
    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Estado de Madurez"
                subtitle="Índices y parámetros de cosecha"
            />
            <div className="p-4 sm:p-6 space-y-6">
                {/* Indicador principal de madurez */}
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <Gauge className="w-5 h-5 text-emerald-600" />
                            <span className="font-medium text-emerald-800">Índice de Madurez</span>
                        </div>
                        <span className="text-2xl font-bold text-emerald-700">
                            {currentMetrics.maturityIndex}%
                        </span>
                    </div>
                    <div className="w-full h-2 bg-emerald-100 rounded-full">
                        <div
                            className="h-full bg-emerald-600 rounded-full transition-all"
                            style={{ width: `${currentMetrics.maturityIndex}%` }}
                        />
                    </div>
                </div>

                {/* Indicadores de estado */}
                <div className="grid sm:grid-cols-2 gap-4">
                    {maturityIndicators.map((indicator) => {
                        const Icon = trendIcons[indicator.trend]
                        return (
                            <div
                                key={indicator.parameter}
                                className={`p-4 rounded-lg border ${statusColors[indicator.status]}`}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <div className="flex items-center gap-2 cursor-pointer">
                                                    <Droplets className="w-4 h-4" />
                                                    <span className="font-medium">{indicator.parameter}</span>
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Valor óptimo: {indicator.value}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <Icon className="w-4 h-4" />
                                </div>
                                <div className="text-2xl font-semibold">
                                    {indicator.value}%
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Recomendaciones */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="font-medium text-blue-800 mb-3">Estado Actual</h4>
                    <ul className="space-y-2">
                        <li className="text-sm text-blue-700 flex items-start gap-2">
                            <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                            Cultivo en etapa óptima para cosecha
                        </li>
                        <li className="text-sm text-blue-700 flex items-start gap-2">
                            <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                            Monitorear niveles de humedad en grano
                        </li>
                    </ul>
                </div>
            </div>
        </Card>
    )
}