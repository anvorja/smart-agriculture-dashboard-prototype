'use client'

import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/shared/SectionHeader'
import {distributionData, historicalData} from '@/data/irrigationMockData'

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
    BarChart,
    Bar
} from 'recharts'


export const DetailedWaterAnalysis = () => {
    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Análisis Detallado del Agua"
                subtitle="Tendencias y composición"
            />
            <div className="p-6">
                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Tendencias Históricas */}
                    <div className="space-y-3">
                        <h3 className="font-medium text-gray-700">Tendencias Históricas</h3>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={historicalData}>
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
                                    <Legend />
                                    <Line
                                        type="monotone"
                                        dataKey="ph"
                                        stroke="#059669"
                                        name="pH"
                                        strokeWidth={2}
                                        dot={{ stroke: '#059669', fill: 'white' }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="conductivity"
                                        stroke="#0284c7"
                                        name="Conductividad"
                                        strokeWidth={2}
                                        dot={{ stroke: '#0284c7', fill: 'white' }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="sodium"
                                        stroke="#7c3aed"
                                        name="Sodio"
                                        strokeWidth={2}
                                        dot={{ stroke: '#7c3aed', fill: 'white' }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Distribución de Minerales */}
                    <div className="space-y-3">
                        <h3 className="font-medium text-gray-700">Distribución de Minerales</h3>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={distributionData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                    <XAxis dataKey="parameter" />
                                    <YAxis />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: 'white',
                                            border: '1px solid #E5E7EB',
                                            borderRadius: '0.5rem'
                                        }}
                                    />
                                    <Legend />
                                    <Bar
                                        dataKey="value"
                                        fill="#059669"
                                        name="Valor Actual"
                                    />
                                    <Bar
                                        dataKey="limit"
                                        fill="#0284c7"
                                        name="Límite Máximo"
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    {/* Análisis y Recomendaciones */}
                    <div className="col-span-2 grid md:grid-cols-2 gap-6 mt-6">
                        {/* Análisis de Calidad */}
                        <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                            <h4 className="font-medium text-emerald-800 mb-3">Análisis de Calidad</h4>
                            <ul className="space-y-2">
                                <li className="text-sm text-emerald-700 flex items-start gap-2">
                                    <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                    Calidad general del agua adecuada para riego
                                </li>
                                <li className="text-sm text-emerald-700 flex items-start gap-2">
                                    <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                    Niveles de pH mantienen estabilidad histórica
                                </li>
                                <li className="text-sm text-emerald-700 flex items-start gap-2">
                                    <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                    Conductividad eléctrica dentro de rangos aceptables
                                </li>
                            </ul>
                        </div>

                        {/* Recomendaciones */}
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                            <h4 className="font-medium text-blue-800 mb-3">Recomendaciones</h4>
                            <ul className="space-y-2">
                                <li className="text-sm text-blue-700 flex items-start gap-2">
                                    <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                                    Monitorear tendencia ascendente en niveles de sodio
                                </li>
                                <li className="text-sm text-blue-700 flex items-start gap-2">
                                    <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                                    Programar análisis completo de cationes y aniones
                                </li>
                                <li className="text-sm text-blue-700 flex items-start gap-2">
                                    <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                                    Considerar implementación de sistema de filtrado adicional
                                </li>
                            </ul>
                        </div>
                    </div>
                </div></div>
        </Card>
    )
}

