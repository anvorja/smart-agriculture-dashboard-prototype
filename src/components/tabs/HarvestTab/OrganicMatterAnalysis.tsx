'use client'

import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { organicReadings } from '@/data/harvestMockData'
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip as RechartsTooltip,
    Legend,
    ResponsiveContainer,
    Area,
    AreaChart
} from 'recharts'
import { Leaf, Waves, Sprout, Gauge } from 'lucide-react'

export const OrganicMatterAnalysis = () => {
    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Análisis de Materia Orgánica"
                subtitle="Indicadores y tendencias"
            />
            <div className="p-4 sm:p-6 space-y-6">
                {/* Métricas principales */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                        {
                            label: 'Clorofila',
                            value: organicReadings[organicReadings.length - 1].chlorophyll,
                            unit: 'μmol/m²',
                            icon: Leaf,
                            color: 'emerald'
                        },
                        {
                            label: 'Nitrógeno',
                            value: organicReadings[organicReadings.length - 1].nitrogen,
                            unit: '%',
                            icon: Waves,
                            color: 'blue'
                        },
                        {
                            label: 'Biomasa',
                            value: organicReadings[organicReadings.length - 1].biomass,
                            unit: 'ton/ha',
                            icon: Sprout,
                            color: 'green'
                        },
                        {
                            label: 'Área Foliar',
                            value: organicReadings[organicReadings.length - 1].leafArea,
                            unit: 'm²/m²',
                            icon: Gauge,
                            color: 'indigo'
                        }
                    ].map((metric) => (
                        <div
                            key={metric.label}
                            className={`bg-${metric.color}-50 p-4 rounded-lg border border-${metric.color}-100`}
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <metric.icon className={`w-4 h-4 text-${metric.color}-600`} />
                                <span className={`text-sm text-${metric.color}-600`}>{metric.label}</span>
                            </div>
                            <div className={`text-xl font-bold text-${metric.color}-700`}>
                                {metric.value} {metric.unit}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Gráfico de tendencias */}
                <div>
                    <h3 className="font-medium text-gray-700 mb-4">Tendencias de Crecimiento</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={organicReadings}>
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
                                <Area
                                    type="monotone"
                                    dataKey="chlorophyll"
                                    name="Clorofila"
                                    stroke="#059669"
                                    fill="#D1FAE5"
                                />
                                <Area
                                    type="monotone"
                                    dataKey="biomass"
                                    name="Biomasa"
                                    stroke="#3B82F6"
                                    fill="#DBEAFE"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Análisis y recomendaciones */}
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <h4 className="font-medium text-blue-800 mb-3">Análisis Actual</h4>
                        <ul className="space-y-2">
                            <li className="text-sm text-blue-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                                Niveles óptimos de clorofila
                            </li>
                            <li className="text-sm text-blue-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                                Biomasa en crecimiento constante
                            </li>
                            <li className="text-sm text-blue-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                                Área foliar en desarrollo normal
                            </li>
                        </ul>
                    </div>

                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                        <h4 className="font-medium text-emerald-800 mb-3">Recomendaciones</h4>
                        <ul className="space-y-2">
                            <li className="text-sm text-emerald-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                Mantener régimen de fertilización actual
                            </li>
                            <li className="text-sm text-emerald-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                Monitorear desarrollo de biomasa
                            </li>
                            <li className="text-sm text-emerald-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                Programar próxima medición de clorofila
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Card>
    )
}