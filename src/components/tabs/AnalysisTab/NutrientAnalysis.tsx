// components/tabs/AnalysisTab/NutrientAnalysis.tsx
'use client'

import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { nutrientLevels, nutrientRatios, nutrientTrends } from '@/data/analysisMockData'
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    Legend
} from 'recharts'
import { AlertTriangle, ChevronDown, ChevronUp, Minus } from 'lucide-react'

const statusColors = {
    deficient: 'bg-red-50 border-red-100 text-red-700',
    optimal: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    excess: 'bg-yellow-50 border-yellow-100 text-yellow-700'
}

const statusIcons = {
    deficient: ChevronDown,
    optimal: Minus,
    excess: ChevronUp
}

export const NutrientAnalysis = () => {
    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Análisis de Nutrientes"
                subtitle="Niveles y tendencias"
            />
            <div className="p-6 space-y-6">
                {/* Niveles actuales de nutrientes */}
                <div className="space-y-4">
                    {nutrientLevels.map((nutrient) => {
                        const Icon = statusIcons[nutrient.status]
                        const percentage = ((nutrient.current - nutrient.minimum) / (nutrient.maximum - nutrient.minimum)) * 100

                        return (
                            <div
                                key={nutrient.nutrient}
                                className={`p-4 rounded-lg border ${statusColors[nutrient.status]}`}
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center gap-2">
                                        <Icon className="w-5 h-5" />
                                        <span className="font-medium">{nutrient.nutrient}</span>
                                    </div>
                                    <span>
                    {nutrient.current} {nutrient.unit}
                  </span>
                                </div>
                                <div className="relative pt-1">
                                    <div className="flex mb-2 items-center justify-between">
                                        <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-white">
                        {nutrient.status}
                      </span>
                                        </div>
                                        <div className="text-right">
                      <span className="text-xs font-semibold inline-block">
                        {percentage.toFixed(0)}%
                      </span>
                                        </div>
                                    </div>
                                    <div className="flex h-2 mb-4 overflow-hidden rounded-full bg-gray-100">
                                        <div
                                            style={{ width: `${percentage}%` }}
                                            className={`${
                                                nutrient.status === 'optimal'
                                                    ? 'bg-emerald-500'
                                                    : nutrient.status === 'deficient'
                                                        ? 'bg-red-500'
                                                        : 'bg-yellow-500'
                                            }`}
                                        />
                                    </div>
                                    <div className="flex justify-between text-xs text-gray-600">
                                        <span>Min: {nutrient.minimum}</span>
                                        <span>Máx: {nutrient.maximum}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Gráfico de tendencias */}
                <div className="h-[300px]">
                    <h3 className="font-medium text-gray-700 mb-4">Tendencias Trimestrales</h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={nutrientTrends}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="n"
                                name="Nitrógeno"
                                stroke="#059669"
                                strokeWidth={2}
                            />
                            <Line
                                type="monotone"
                                dataKey="p"
                                name="Fósforo"
                                stroke="#2563eb"
                                strokeWidth={2}
                            />
                            <Line
                                type="monotone"
                                dataKey="k"
                                name="Potasio"
                                stroke="#7c3aed"
                                strokeWidth={2}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Relaciones entre nutrientes */}
                <div>
                    <h3 className="font-medium text-gray-700 mb-4">Relaciones entre Nutrientes</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {nutrientRatios.map((ratio) => (
                            <div
                                key={ratio.name}
                                className="bg-blue-50 p-4 rounded-lg border border-blue-100"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-medium text-blue-800">{ratio.name}</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-blue-600">{ratio.value}</span>
                                        {Math.abs(ratio.value - ratio.ideal) > ratio.ideal * 0.1 && (
                                            <AlertTriangle className="w-4 h-4 text-yellow-500" />
                                        )}
                                    </div>
                                </div>
                                <p className="text-sm text-blue-600">{ratio.description}</p>
                                <p className="text-sm text-blue-600 mt-1">
                                    Valor ideal: {ratio.ideal}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    )
}