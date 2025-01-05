'use client'

import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { yieldEstimates, historicalYields } from '@/data/harvestMockData'
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip as RechartsTooltip,
    Legend,
    ResponsiveContainer
} from 'recharts'
import {
    TrendingUp,
    ArrowUp,
    ArrowDown,
    Target,
    Scale
} from 'lucide-react'


export const YieldAnalysis = () => {
    // Calcular métricas generales
    const totalExpected = yieldEstimates.reduce((sum, zone) => sum + zone.expected, 0)
    const totalActual = yieldEstimates.reduce((sum, zone) => sum + zone.actual, 0)
    const averageVariance = yieldEstimates.reduce((sum, zone) => sum + zone.variance, 0) / yieldEstimates.length

    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Análisis de Rendimiento"
                subtitle="Estimaciones y rendimiento actual"
            />
            <div className="p-4 sm:p-6 space-y-6">
                {/* Métricas principales */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                        <div className="flex items-center gap-2 mb-2">
                            <Target className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm text-emerald-600">Estimado Total</span>
                        </div>
                        <span className="text-2xl font-bold text-emerald-700">
                            {totalExpected.toFixed(1)} ton/ha
                        </span>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <div className="flex items-center gap-2 mb-2">
                            <Scale className="w-4 h-4 text-blue-600" />
                            <span className="text-sm text-blue-600">Actual</span>
                        </div>
                        <span className="text-2xl font-bold text-blue-700">
                            {totalActual.toFixed(1)} ton/ha
                        </span>
                    </div>

                    <div className={`${averageVariance >= 0 ? 'bg-emerald-50 border-emerald-100' : 'bg-yellow-50 border-yellow-100'} p-4 rounded-lg border col-span-2 sm:col-span-1`}>
                        <div className="flex items-center gap-2 mb-2">
                            {averageVariance >= 0 ? (
                                <ArrowUp className="w-4 h-4 text-emerald-600" />
                            ) : (
                                <ArrowDown className="w-4 h-4 text-yellow-600" />
                            )}
                            <span className={`text-sm ${averageVariance >= 0 ? 'text-emerald-600' : 'text-yellow-600'}`}>
                                Variación
                            </span>
                        </div>
                        <span className={`text-2xl font-bold ${averageVariance >= 0 ? 'text-emerald-700' : 'text-yellow-700'}`}>
                            {Math.abs(averageVariance).toFixed(1)}%
                        </span>
                    </div>
                </div>

                {/* Gráfico de rendimiento por zona */}
                <div>
                    <h3 className="font-medium text-gray-700 mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-emerald-600" />
                        Rendimiento por Zona
                    </h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={yieldEstimates}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                <XAxis dataKey="zone" />
                                <YAxis />
                                <RechartsTooltip
                                    contentStyle={{
                                        backgroundColor: 'white',
                                        border: '1px solid #E5E7EB',
                                        borderRadius: '0.5rem'
                                    }}
                                />
                                <Legend />
                                <Bar
                                    dataKey="expected"
                                    name="Estimado"
                                    fill="#059669"
                                    radius={[4, 4, 0, 0]}
                                />
                                <Bar
                                    dataKey="actual"
                                    name="Actual"
                                    fill="#3B82F6"
                                    radius={[4, 4, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Tendencia histórica */}
                <div>
                    <h3 className="font-medium text-gray-700 mb-4">Tendencia Histórica</h3>
                    <div className="h-[200px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={historicalYields}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                <XAxis dataKey="period" />
                                <YAxis />
                                <RechartsTooltip
                                    contentStyle={{
                                        backgroundColor: 'white',
                                        border: '1px solid #E5E7EB',
                                        borderRadius: '0.5rem'
                                    }}
                                />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="yield"
                                    name="Rendimiento"
                                    stroke="#059669"
                                    strokeWidth={2}
                                    dot={{ stroke: '#059669', fill: 'white' }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="target"
                                    name="Objetivo"
                                    stroke="#3B82F6"
                                    strokeWidth={2}
                                    dot={{ stroke: '#3B82F6', fill: 'white' }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Insights y Recomendaciones */}
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <h4 className="font-medium text-blue-800 mb-3">Insights</h4>
                        <ul className="space-y-2">
                            <li className="text-sm text-blue-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                                Rendimiento por encima del promedio histórico
                            </li>
                            <li className="text-sm text-blue-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                                Zona Norte muestra mejor desempeño
                            </li>
                        </ul>
                    </div>

                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                        <h4 className="font-medium text-emerald-800 mb-3">Recomendaciones</h4>
                        <ul className="space-y-2">
                            <li className="text-sm text-emerald-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                Priorizar cosecha en zonas de alto rendimiento
                            </li>
                            <li className="text-sm text-emerald-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                Analizar factores de éxito en Zona Norte
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Card>
    )
}