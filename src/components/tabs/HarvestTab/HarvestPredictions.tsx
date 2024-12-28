'use client'

import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/shared/SectionHeader'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip as RechartsTooltip,
    Legend,
    ResponsiveContainer,
    RadialBarChart,
    RadialBar
} from 'recharts'
import {
    Brain,
    TrendingUp,
    Target,
    Gauge,
    AlertTriangle
} from 'lucide-react'
import {harvestPredictions} from "@/data/harvestMockData";

export const HarvestPredictions = () => {
    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Predicciones de Cosecha"
                subtitle="Análisis predictivo basado en IA"
            />
            <div className="p-4 sm:p-6 space-y-6">
                {/* Fecha óptima y confianza */}
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                        <div className="flex items-center gap-2 mb-4">
                            <Target className="w-5 h-5 text-emerald-600" />
                            <h3 className="font-medium text-emerald-800">Fecha Óptima Sugerida</h3>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-2xl font-bold text-emerald-700">
                                    {harvestPredictions.optimal.date}
                                </p>
                                <p className="text-sm text-emerald-600">
                                    Confianza: {harvestPredictions.optimal.confidence}%
                                </p>
                            </div>
                            <div className="h-16 w-16">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadialBarChart
                                        innerRadius="60%"
                                        outerRadius="100%"
                                        data={[{ value: harvestPredictions.optimal.confidence }]}
                                        startAngle={90}
                                        endAngle={-270}
                                    >
                                        <RadialBar
                                            background
                                            dataKey="value"
                                            fill="#059669"
                                        />
                                    </RadialBarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <div className="flex items-center gap-2 mb-4">
                            <Brain className="w-5 h-5 text-blue-600" />
                            <h3 className="font-medium text-blue-800">Predicción de Rendimiento</h3>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-2xl font-bold text-blue-700">
                                    {harvestPredictions.optimal.yield} ton/ha
                                </p>
                                <p className="text-sm text-blue-600">
                                    Calidad esperada: {harvestPredictions.optimal.quality}%
                                </p>
                            </div>
                            <Gauge className="w-12 h-12 text-blue-500" />
                        </div>
                    </div>
                </div>

                {/* Gráfico de predicciones */}
                <div>
                    <h3 className="font-medium text-gray-700 mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-emerald-600" />
                        Proyección de Rendimiento y Calidad
                    </h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={harvestPredictions.yieldPredictions}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                <XAxis dataKey="date" />
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
                                    name="Rendimiento (ton/ha)"
                                    stroke="#059669"
                                    strokeWidth={2}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="quality"
                                    name="Calidad (%)"
                                    stroke="#3B82F6"
                                    strokeWidth={2}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Análisis de riesgos */}
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                        <div className="flex items-center gap-2 mb-3">
                            <AlertTriangle className="w-4 h-4 text-yellow-600" />
                            <h4 className="font-medium text-yellow-800">Factores de Riesgo</h4>
                        </div>
                        <div className="space-y-3">
                            {harvestPredictions.riskFactors.map((risk) => (
                                <div key={risk.factor} className="flex justify-between items-center">
                                    <span className="text-sm text-yellow-700">{risk.factor}</span>
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm text-yellow-600">{risk.probability}%</span>
                                        <span className={`text-xs px-2 py-1 rounded-full ${
                                            risk.impact === 'Bajo' ? 'bg-emerald-100 text-emerald-700' :
                                                risk.impact === 'Moderado' ? 'bg-yellow-100 text-yellow-700' :
                                                    'bg-red-100 text-red-700'
                                        }`}>
                                            {risk.impact}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                        <div className="flex items-center gap-2 mb-3">
                            <Brain className="w-4 h-4 text-emerald-600" />
                            <h4 className="font-medium text-emerald-800">Recomendaciones IA</h4>
                        </div>
                        <ul className="space-y-2">
                            <li className="text-sm text-emerald-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                Priorizar cosecha el 28 de marzo para máximo rendimiento
                            </li>
                            <li className="text-sm text-emerald-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                Monitorear condiciones climáticas 48h antes
                            </li>
                            <li className="text-sm text-emerald-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                Preparar equipos para inicio temprano
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Card>
    )
}