// src/components/tabs/PlantingTab/MarketAnalysis.tsx
'use client'

import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { marketTrends } from '@/data/plantingMockData'
import { DollarSign, TrendingUp, Scale } from 'lucide-react'
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from 'recharts'

interface TrendIndicatorProps {
    label: string
    value: string
    trend: 'up' | 'down'
    percentage: string
}

const TrendIndicator = ({ label, value, trend, percentage }: TrendIndicatorProps) => (
    <div className="p-3 bg-emerald-50/50 rounded-lg border border-emerald-100">
        <div className="flex items-center justify-between">
            <span className="text-sm text-emerald-600">{label}</span>
            <div className={`flex items-center gap-1 ${
                trend === 'up' ? 'text-emerald-600' : 'text-red-600'
            }`}>
                <TrendingUp className={`w-4 h-4 ${
                    trend === 'down' && 'transform rotate-180'
                }`} />
                <span className="text-sm font-medium">{percentage}</span>
            </div>
        </div>
        <div className="text-lg font-semibold text-emerald-800 mt-1">{value}</div>
    </div>
)

export const MarketAnalysis = () => {
    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Análisis de Mercado"
                subtitle="Tendencias y proyecciones"
            />
            <div className="p-4 space-y-6">
                {/* Indicadores principales */}
                <div className="grid gap-3">
                    <TrendIndicator
                        label="Precio Actual"
                        value="$380/ton"
                        trend="up"
                        percentage="+5.2%"
                    />
                    <TrendIndicator
                        label="Demanda Regional"
                        value="85/100"
                        trend="up"
                        percentage="+3.8%"
                    />
                </div>

                {/* Gráfico de Precios */}
                <div className="space-y-3">
                    <h3 className="font-medium flex items-center gap-2 text-gray-700">
                        <DollarSign className="w-4 h-4" />
                        Tendencia de Precios
                    </h3>
                    <div className="h-[200px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={marketTrends}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                <XAxis
                                    dataKey="month"
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
                                    dataKey="price"
                                    stroke="#059669"
                                    strokeWidth={2}
                                    dot={{ stroke: '#059669', fill: 'white' }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Gráfico de Oferta y Demanda */}
                <div className="space-y-3">
                    <h3 className="font-medium flex items-center gap-2 text-gray-700">
                        <Scale className="w-4 h-4" />
                        Oferta vs Demanda
                    </h3>
                    <div className="h-[200px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={marketTrends}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                <XAxis
                                    dataKey="month"
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
                                <Legend />
                                <Bar dataKey="demand" fill="#059669" name="Demanda" />
                                <Bar dataKey="supply" fill="#0284c7" name="Oferta" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Notas de Mercado */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="text-sm font-medium text-blue-800 mb-2">
                        Información de Mercado
                    </h4>
                    <ul className="space-y-2">
                        <li className="text-sm text-blue-700 flex items-start gap-2">
                            <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                            Tendencia alcista esperada en próximos 3 meses
                        </li>
                        <li className="text-sm text-blue-700 flex items-start gap-2">
                            <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                            Demanda superior a la oferta proyectada
                        </li>
                    </ul>
                </div>
            </div>
        </Card>
    )
}