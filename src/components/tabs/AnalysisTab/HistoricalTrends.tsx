'use client'

import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { historicalData, seasonalPatterns } from '@/data/analysisMockData'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip as RechartsTooltip,
    ResponsiveContainer,
    Legend,
} from 'recharts'
import {
    TrendingUp,
    Calendar,
    AlertTriangle,
    Droplets,
    Thermometer,
    Activity
} from 'lucide-react'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

export const HistoricalTrends = () => {

    const combinedData = historicalData.moisture.map((item, index) => ({
        month: item.month,
        humedad: item.value,
        temperatura: historicalData.temperature[index].value,
        ph: historicalData.pH[index].value
    }))

    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Tendencias Históricas"
                subtitle="Análisis y patrones históricos"
            />
            <div className="p-4 sm:p-6 space-y-6">
                {/* Gráfico de tendencias históricas */}
                <div>
                    <h3 className="font-medium text-gray-700 mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-emerald-600" />
                        Tendencias de Variables Clave
                    </h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                data={combinedData}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                <XAxis
                                    dataKey="month"
                                    stroke="#374151"
                                />
                                <YAxis stroke="#374151" />
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
                                    dataKey="humedad"
                                    name="Humedad"
                                    stroke="#059669"
                                    strokeWidth={2}
                                    dot={{ stroke: '#059669', fill: 'white' }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="temperatura"
                                    name="Temperatura"
                                    stroke="#2563eb"
                                    strokeWidth={2}
                                    dot={{ stroke: '#2563eb', fill: 'white' }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="ph"
                                    name="pH"
                                    stroke="#7c3aed"
                                    strokeWidth={2}
                                    dot={{ stroke: '#7c3aed', fill: 'white' }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Patrones Estacionales */}
                <div>
                    <h3 className="font-medium text-gray-700 mb-4 flex items-center gap-2 break-words">
                        <Calendar className="w-5 h-5 flex-shrink-0 text-emerald-600"/>
                        <span className="break-words">Patrones Estacionales</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {seasonalPatterns.map((pattern) => (
                            <div
                                key={pattern.season}
                                className="bg-white rounded-lg border border-gray-200 p-4 hover:border-emerald-200 transition-colors"
                            >
                                <h4 className="font-medium text-gray-800 mb-3 break-words">{pattern.season}</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="flex items-center gap-2 min-w-0">
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <div>
                                                            <Droplets
                                                                className="w-4 h-4 flex-shrink-0 text-blue-600 cursor-pointer"/>
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        Humedad
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </div>
                                        <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                        {pattern.moisture}
                    </span>
                                    </div>

                                    <div className="flex items-center justify-between gap-2">
                                        <div className="flex items-center gap-2 min-w-0">
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <div>
                                                            <Thermometer
                                                                className="w-4 h-4 flex-shrink-0 text-red-600 cursor-pointer"/>
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        Temperatura
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </div>
                                        <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                        {pattern.temperature}
                    </span>
                                    </div>

                                    <div className="flex items-center justify-between gap-2">
                                        <div className="flex items-center gap-2 min-w-0">
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <div>
                                                            <Activity
                                                                className="w-4 h-4 flex-shrink-0 text-emerald-600 cursor-pointer"/>
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        Crecimiento
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </div>
                                        <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                        {pattern.growth}
                    </span>
                                    </div>

                                    {pattern.alerts > 0 && (
                                        <div className="flex items-center justify-between gap-2">
                                            <div className="flex items-center gap-2 min-w-0">
                                                <AlertTriangle className="w-4 h-4 flex-shrink-0 text-yellow-600"/>
                                                <span className="text-sm text-gray-600 truncate">Alertas</span>
                                            </div>
                                            <span className="text-sm font-medium text-yellow-600 whitespace-nowrap">
                            {pattern.alerts}
                        </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Insights y Recomendaciones */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <h4 className="font-medium text-blue-800 mb-3">Insights</h4>
                        <ul className="space-y-2">
                            <li className="text-sm text-blue-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400"/>
                                Tendencias de humedad dentro de rangos óptimos
                            </li>
                            <li className="text-sm text-blue-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400"/>
                                Mayor variabilidad de temperatura en verano
                            </li>
                            <li className="text-sm text-blue-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400"/>
                                pH se mantiene estable en últimos 6 meses
                            </li>
                        </ul>
                    </div>

                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                        <h4 className="font-medium text-emerald-800 mb-3">Recomendaciones</h4>
                        <ul className="space-y-2">
                            <li className="text-sm text-emerald-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400"/>
                                Ajustar riego según patrones estacionales
                            </li>
                            <li className="text-sm text-emerald-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400"/>
                                Implementar medidas preventivas para verano
                            </li>
                            <li className="text-sm text-emerald-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400"/>
                                Monitorear pH durante cambios estacionales
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Card>
    )
}