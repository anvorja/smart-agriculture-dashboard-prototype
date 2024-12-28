'use client'

import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { qualityMetrics } from '@/data/harvestMockData'
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip as RechartsTooltip,
    Legend,
} from 'recharts'
import { ChartPie } from 'lucide-react'
import { TooltipProps} from 'recharts'
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'
import { QualityDataPoint } from '@/types/harvest'

const COLORS = {
    good: '#059669',
    warning: '#EAB308',
    critical: '#DC2626'
}

export const QualityDistribution = () => {
    const chartData = qualityMetrics.map(metric => ({
        name: metric.metric,
        value: metric.value,
        status: metric.status,
        percentage: ((metric.value / metric.target) * 100).toFixed(1)
    }));

    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Distribución de Calidad"
                subtitle="Análisis de parámetros cualitativos"
            />
            <div className="p-4 sm:p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Gráfico de distribución */}
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={chartData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    label={false}
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[entry.status]}
                                            strokeWidth={2}
                                        />
                                    ))}
                                </Pie>
                                <RechartsTooltip
                                    content={({ active, payload }: TooltipProps<ValueType, NameType>) => {
                                        if (active && payload && payload.length > 0) {
                                            const data = payload[0].payload as QualityDataPoint;
                                            return (
                                                <div className="bg-white p-2 border border-gray-200 rounded-lg shadow-sm">
                                                    <p className="font-medium">{data.name}</p>
                                                    <p className="text-sm text-gray-600">
                                                        Valor actual: {data.value}
                                                    </p>
                                                    <p className="text-sm text-gray-600">
                                                        Porcentaje: {data.percentage}%
                                                    </p>
                                                </div>
                                            );
                                        }
                                        return null;
                                    }}
                                />
                                <Legend
                                    formatter={(value: string) => {
                                        const idx = chartData.findIndex(item => item.name === value);
                                        if (idx !== -1) {
                                            return `${value}: ${chartData[idx].percentage}%`;
                                        }
                                        return value;
                                    }}
                                    layout="vertical"
                                    align="right"
                                    verticalAlign="middle"
                                    wrapperStyle={{
                                        paddingLeft: "20px",
                                    }}
                                    iconType="circle"
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Resumen y análisis */}
                    <div className="space-y-6">
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                            <h4 className="font-medium text-blue-800 mb-3 flex items-center gap-2">
                                <ChartPie className="w-4 h-4"/>
                                Resumen de Calidad
                            </h4>
                            <ul className="space-y-2">
                                <li className="text-sm text-blue-700 flex items-start gap-2">
                                    <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                                    Mayor proporción en parámetros óptimos
                                </li>
                                <li className="text-sm text-blue-700 flex items-start gap-2">
                                    <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                                    Proteína y humedad mantienen niveles ideales
                                </li>
                                <li className="text-sm text-blue-700 flex items-start gap-2">
                                    <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                                    Áreas de mejora en peso específico y gluten
                                </li>
                            </ul>
                        </div>

                        <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                            <h4 className="font-medium text-emerald-800 mb-3">Recomendaciones</h4>
                            <ul className="space-y-2">
                                <li className="text-sm text-emerald-700 flex items-start gap-2">
                                    <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                    Monitorear niveles de gluten durante proceso
                                </li>
                                <li className="text-sm text-emerald-700 flex items-start gap-2">
                                    <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                    Ajustar condiciones de almacenamiento
                                </li>
                                <li className="text-sm text-emerald-700 flex items-start gap-2">
                                    <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                    Optimizar proceso de clasificación
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}