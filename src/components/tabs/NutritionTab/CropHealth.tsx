// src/components/tabs/NutritionTab/CropHealth.tsx
'use client'

import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { healthMetrics } from '@/data/nutritionMockData'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { TrendingUp, TrendingDown, Minus, Leaf } from 'lucide-react'

const trendIcons = {
    up: TrendingUp,
    down: TrendingDown,
    stable: Minus
}

const statusColors = {
    good: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    warning: 'bg-yellow-50 border-yellow-100 text-yellow-700',
    alert: 'bg-red-50 border-red-100 text-red-700'
}

// Datos mock para el gráfico
const healthTrendData = [
    { time: '08:00', ndvi: 0.72, stress: 0.2 },
    { time: '10:00', ndvi: 0.74, stress: 0.25 },
    { time: '12:00', ndvi: 0.75, stress: 0.3 },
    { time: '14:00', ndvi: 0.73, stress: 0.28 },
    { time: '16:00', ndvi: 0.75, stress: 0.3 }
]

export const CropHealth = () => {
    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Salud del Cultivo"
                subtitle="Índices y mediciones"
            />
            <div className="p-4 space-y-6">
                {/* Métricas de salud */}
                <div className="space-y-3">
                    {healthMetrics.map((metric) => {
                        const Icon = trendIcons[metric.trend]
                        return (
                            <div
                                key={metric.name}
                                className={`p-3 rounded-lg border ${statusColors[metric.status]}`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Leaf className="w-4 h-4" />
                                        <span className="font-medium">{metric.name}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium">{metric.value}</span>
                                        <Icon className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Gráfico de tendencias */}
                <div className="space-y-3">
                    <h3 className="font-medium text-gray-700">Tendencias Diarias</h3>
                    <div className="h-[200px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={healthTrendData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                <XAxis
                                    dataKey="time"
                                    stroke="#374151"
                                    fontSize={12}
                                />
                                <YAxis
                                    stroke="#374151"
                                    fontSize={12}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'white',
                                        border: '1px solid #E5E7EB',
                                        borderRadius: '0.5rem',
                                        padding: '0.5rem'
                                    }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="ndvi"
                                    stroke="#059669"
                                    name="NDVI"
                                    strokeWidth={2}
                                    dot={{ stroke: '#059669', fill: 'white' }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="stress"
                                    stroke="#EAB308"
                                    name="Estrés"
                                    strokeWidth={2}
                                    dot={{ stroke: '#EAB308', fill: 'white' }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Resumen de alertas */}
                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-100">
                    <h4 className="text-sm font-medium text-yellow-800 mb-2">
                        Alertas Activas
                    </h4>
                    <ul className="space-y-2">
                        <li className="text-sm text-yellow-700 flex items-start gap-2">
                            <span className="block w-1 h-1 mt-2 rounded-full bg-yellow-400" />
                            Incremento en el nivel de estrés hídrico detectado
                        </li>
                        <li className="text-sm text-yellow-700 flex items-start gap-2">
                            <span className="block w-1 h-1 mt-2 rounded-full bg-yellow-400" />
                            Revisar sistema de riego en sector norte
                        </li>
                    </ul>
                </div>
            </div>
        </Card>
    )
}