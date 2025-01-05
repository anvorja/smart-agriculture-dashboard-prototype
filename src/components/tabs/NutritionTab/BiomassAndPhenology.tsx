// src/components/tabs/NutritionTab/BiomassAndPhenology.tsx
'use client'

import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/shared/SectionHeader'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer
} from 'recharts'
import { biomassTrends, phenologicalStages } from '@/data/nutritionMockData'

const BiomassAndPhenology = () => {
    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Biomasa y Estado Fenológico"
                subtitle="Desarrollo y crecimiento del cultivo"
            />
            <div className="p-6 space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Gráfico de Biomasa */}
                    <div className="space-y-3">
                        <h3 className="font-medium text-gray-700">Crecimiento de Biomasa</h3>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={biomassTrends}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: 'white',
                                            border: '1px solid #E5E7EB',
                                            borderRadius: '0.5rem'
                                        }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#059669"
                                        strokeWidth={2}
                                        dot={{ stroke: '#059669', fill: 'white' }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Etapas Fenológicas */}
                    <div className="space-y-4">
                        <h3 className="font-medium text-gray-700">Estado Fenológico</h3>
                        <div className="space-y-3">
                            {phenologicalStages.map((stage) => {
                                const getStatus = () => {
                                    if (stage.completed) return 'bg-emerald-50 border-emerald-100 text-emerald-700'
                                    if (stage.current) return 'bg-blue-50 border-blue-100 text-blue-700'
                                    return 'bg-gray-50 border-gray-100 text-gray-600'
                                }

                                return (
                                    <div
                                        key={stage.stage}
                                        className={`p-4 rounded-lg border ${getStatus()}`}
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium">{stage.stage}</span>
                                            {stage.current && (
                                                <span className="text-sm">En progreso</span>
                                            )}
                                        </div>
                                        <div className="text-sm">
                                            {stage.startDate} - {stage.endDate}
                                        </div>
                                        {stage.current && stage.progress && (
                                            <div className="mt-2">
                                                <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-blue-500 rounded-full"
                                                        style={{ width: `${stage.progress}%` }}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Recomendaciones */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                        <h4 className="font-medium text-emerald-800 mb-3">Análisis de Desarrollo</h4>
                        <ul className="space-y-2">
                            <li className="text-sm text-emerald-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                Tasa de crecimiento dentro de parámetros esperados
                            </li>
                            <li className="text-sm text-emerald-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                Desarrollo fenológico alineado con cronograma
                            </li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <h4 className="font-medium text-blue-800 mb-3">Acciones Recomendadas</h4>
                        <ul className="space-y-2">
                            <li className="text-sm text-blue-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                                Preparar aplicación de reguladores de crecimiento
                            </li>
                            <li className="text-sm text-blue-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                                Monitorear desarrollo de órganos reproductivos
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default BiomassAndPhenology