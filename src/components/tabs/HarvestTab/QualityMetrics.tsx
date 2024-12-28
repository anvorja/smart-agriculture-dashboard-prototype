'use client'

import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { qualityMetrics } from '@/data/harvestMockData'
import {
    RadialBarChart,
    RadialBar,
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip as RechartsTooltip,
    Legend
} from 'recharts'
import {AlertCircle, CheckCircle2, Scale, Beaker} from 'lucide-react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const COLORS = {
    good: '#059669',
    warning: '#EAB308',
    critical: '#DC2626'
}

export const QualityMetrics = () => {
    // Calcular promedio general de calidad
    const averageQuality = qualityMetrics.reduce((acc, curr) => {
        return acc + (curr.value / curr.target) * 100
    }, 0) / qualityMetrics.length

    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Métricas de Calidad"
                subtitle="Parámetros y análisis cualitativo"
            />
            <div className="p-4 sm:p-6 space-y-6">
                {/* Indicador principal de calidad */}
                <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                    <div className="flex items-center gap-3">
                        <Scale className="w-6 h-6 text-emerald-600" />
                        <div>
                            <p className="text-sm text-emerald-600">Calidad General</p>
                            <p className="text-2xl font-bold text-emerald-700">
                                {averageQuality.toFixed(1)}%
                            </p>
                        </div>
                    </div>
                    <div className="h-16 w-16">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadialBarChart
                                innerRadius="60%"
                                outerRadius="100%"
                                data={[{ value: averageQuality }]}
                                startAngle={90}
                                endAngle={-270}
                            >
                                <RadialBar
                                    background
                                    dataKey="value"
                                    fill={COLORS.good}
                                />
                            </RadialBarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Métricas individuales */}
                <div className="grid gap-4 sm:grid-cols-2">
                    {qualityMetrics.map((metric) => {
                        const percentage = (metric.value / metric.target) * 100
                        const statusColor = metric.status === 'good' ? 'text-emerald-600' :
                            metric.status === 'warning' ? 'text-yellow-600' :
                                'text-red-600'
                        const StatusIcon = metric.status === 'good' ? CheckCircle2 : AlertCircle

                        return (
                            <div
                                key={metric.metric}
                                className="p-4 bg-white rounded-lg border border-gray-200"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <div className="flex items-center gap-2 cursor-pointer">
                                                    <Beaker className={`w-4 h-4 ${statusColor}`} />
                                                    <span className="font-medium text-gray-700">
                                                        {metric.metric}
                                                    </span>
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Valor objetivo: {metric.target}{metric.unit}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <StatusIcon className={`w-4 h-4 ${statusColor}`} />
                                </div>

                                <div className="flex items-end justify-between mb-2">
                                    <span className="text-2xl font-semibold text-gray-800">
                                        {metric.value}{metric.unit}
                                    </span>
                                    <span className={`text-sm ${statusColor}`}>
                                        {percentage.toFixed(1)}%
                                    </span>
                                </div>

                                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full rounded-full transition-all"
                                        style={{
                                            width: `${Math.min(percentage, 100)}%`,
                                            backgroundColor: COLORS[metric.status]
                                        }}
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Distribución de calidad */}
                <div>
                    <h3 className="font-medium text-gray-700 mb-4">Distribución de Calidad</h3>
                    <div className="h-[200px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={qualityMetrics}
                                    dataKey="value"
                                    nameKey="metric"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    label
                                >
                                    {qualityMetrics.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[entry.status]}
                                        />
                                    ))}
                                </Pie>
                                <RechartsTooltip
                                    contentStyle={{
                                        backgroundColor: 'white',
                                        border: '1px solid #E5E7EB',
                                        borderRadius: '0.5rem'
                                    }}
                                />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recomendaciones de mejora */}
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <h4 className="font-medium text-blue-800 mb-3">Análisis de Calidad</h4>
                        <ul className="space-y-2">
                            <li className="text-sm text-blue-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                                Proteína y humedad en niveles óptimos
                            </li>
                            <li className="text-sm text-blue-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                                Buena distribución de nutrientes
                            </li>
                        </ul>
                    </div>

                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                        <h4 className="font-medium text-emerald-800 mb-3">Acciones Sugeridas</h4>
                        <ul className="space-y-2">
                            <li className="text-sm text-emerald-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                Mantener condiciones de almacenamiento
                            </li>
                            <li className="text-sm text-emerald-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                Programar análisis de calidad semanal
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Card>
    )
}