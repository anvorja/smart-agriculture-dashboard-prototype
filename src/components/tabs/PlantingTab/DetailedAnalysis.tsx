// src/components/tabs/PlantingTab/DetailedAnalysis.tsx
'use client'

import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { plantingAnalysisData } from '@/data/plantingMockData'
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from 'recharts'
import {
    TrendingUp,
    Map,
    DollarSign,
    BarChart2
} from 'lucide-react'

const COLORS = ['#059669', '#0284c7', '#6366f1', '#84cc16', '#f59e0b']

export const DetailedAnalysis = () => {
    // Calcular totales para el análisis de costos/beneficios
    const totalCosts = Object.values(plantingAnalysisData.costBenefit.costs).reduce((a, b) => a + b, 0)
    const totalBenefits = Object.values(plantingAnalysisData.costBenefit.benefits).reduce((a, b) => a + b, 0)

    // Preparar datos para el gráfico de costos
    const costsData = Object.entries(plantingAnalysisData.costBenefit.costs).map(([name, value]) => ({
        name,
        value,
        percentage: ((value / totalCosts) * 100).toFixed(1)
    }))

    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Análisis Detallado"
                subtitle="Información extendida y tendencias"
            />
            <div className="p-6 space-y-6">
                {/* Grid Superior - Rendimiento Histórico y Demanda Regional */}
                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Rendimiento Histórico */}
                    <div className="space-y-3">
                        <h3 className="font-medium flex items-center gap-2 text-gray-700">
                            <TrendingUp className="w-4 h-4" />
                            Rendimiento Histórico
                        </h3>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={plantingAnalysisData.historicalYield}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                    <XAxis
                                        dataKey="year"
                                        stroke="#374151"
                                        fontSize={12}
                                    />
                                    <YAxis
                                        stroke="#374151"
                                        fontSize={12}
                                        domain={['auto', 'auto']}
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
                                        dataKey="yield"
                                        stroke="#059669"
                                        strokeWidth={2}
                                        dot={{ stroke: '#059669', fill: 'white' }}
                                        name="Rendimiento (ton/ha)"
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Demanda Regional */}
                    <div className="space-y-3">
                        <h3 className="font-medium flex items-center gap-2 text-gray-700">
                            <Map className="w-4 h-4" />
                            Demanda por Región
                        </h3>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={plantingAnalysisData.regionalDemand}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                    <XAxis
                                        dataKey="region"
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
                                    <Bar dataKey="demand" fill="#059669" name="Nivel de Demanda" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Análisis de Costos y Beneficios */}
                <div className="space-y-6">
                    <div className="grid lg:grid-cols-2 gap-6">
                        {/* Distribución de Costos */}
                        <div className="space-y-3">
                            <h3 className="font-medium flex items-center gap-2 text-gray-700">
                                <DollarSign className="w-4 h-4" />
                                Distribución de Costos
                            </h3>
                            <div className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={costsData}
                                            dataKey="value"
                                            nameKey="name"
                                            cx="50%"
                                            cy="50%"
                                            outerRadius={100}
                                            label={({ name, percentage }) => `${name}: ${percentage}%`}
                                        >
                                            {costsData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: 'white',
                                                border: '1px solid #E5E7EB',
                                                borderRadius: '0.5rem',
                                                padding: '0.5rem'
                                            }}
                                        />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Resumen Financiero */}
                        <div className="space-y-3">
                            <h3 className="font-medium flex items-center gap-2 text-gray-700">
                                <BarChart2 className="w-4 h-4" />
                                Resumen Financiero
                            </h3>
                            <div className="space-y-4">
                                <div className="grid gap-4">
                                    {/* Costos Totales */}
                                    <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                                        <div className="flex justify-between items-center">
                                            <span className="text-red-700">Costos Totales</span>
                                            <span className="font-semibold text-red-800">
                        ${totalCosts.toLocaleString()}
                      </span>
                                        </div>
                                    </div>
                                    {/* Beneficios Totales */}
                                    <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                                        <div className="flex justify-between items-center">
                                            <span className="text-emerald-700">Beneficios Totales</span>
                                            <span className="font-semibold text-emerald-800">
                        ${totalBenefits.toLocaleString()}
                      </span>
                                        </div>
                                    </div>
                                    {/* Beneficio Neto */}
                                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                                        <div className="flex justify-between items-center">
                                            <span className="text-blue-700">Beneficio Neto</span>
                                            <span className="font-semibold text-blue-800">
                        ${(totalBenefits - totalCosts).toLocaleString()}
                      </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Insights y Recomendaciones */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium text-gray-800 mb-3">Insights Clave</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <h4 className="text-sm font-medium text-gray-700">Tendencias Positivas</h4>
                            <ul className="space-y-1">
                                <li className="text-sm text-gray-600 flex items-start gap-2">
                                    <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                    Incremento constante en rendimiento desde 2023
                                </li>
                                <li className="text-sm text-gray-600 flex items-start gap-2">
                                    <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                    Alta demanda en región Sur Occidente
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-sm font-medium text-gray-700">Áreas de Mejora</h4>
                            <ul className="space-y-1">
                                <li className="text-sm text-gray-600 flex items-start gap-2">
                                    <span className="block w-1 h-1 mt-2 rounded-full bg-red-400" />
                                    Optimizar costos de mano de obra
                                </li>
                                <li className="text-sm text-gray-600 flex items-start gap-2">
                                    <span className="block w-1 h-1 mt-2 rounded-full bg-red-400" />
                                    Fortalecer presencia en región Este
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}