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
    AreaChart,
    Area
} from 'recharts'
import {
    Sun,
    CloudRain,
    Wind,
    Droplets,
    ThermometerSun,
    AlertTriangle
} from 'lucide-react'
import {hourlyForecast, weatherForecast} from '@/data/harvestMockData'

export const WeatherPlanning = () => {
    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Planificación Meteorológica"
                subtitle="Pronóstico y condiciones óptimas"
            />
            <div className="p-4 sm:p-6 space-y-6">
                {/* Condiciones actuales */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                        {
                            label: 'Temperatura',
                            value: '24°C',
                            icon: ThermometerSun,
                            color: 'red',
                            status: 'Óptima'
                        },
                        {
                            label: 'Humedad',
                            value: '65%',
                            icon: Droplets,
                            color: 'blue',
                            status: 'Normal'
                        },
                        {
                            label: 'Viento',
                            value: '12 km/h',
                            icon: Wind,
                            color: 'gray',
                            status: 'Favorable'
                        },
                        {
                            label: 'Precipitación',
                            value: '0 mm',
                            icon: CloudRain,
                            color: 'blue',
                            status: 'Sin lluvia'
                        }
                    ].map((metric) => (
                        <div
                            key={metric.label}
                            className="bg-white p-4 rounded-lg border border-gray-200"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <metric.icon className={`w-5 h-5 text-${metric.color}-500`} />
                                <span className="font-medium text-gray-700">{metric.label}</span>
                            </div>
                            <div className="text-xl font-semibold text-gray-900 mb-1">
                                {metric.value}
                            </div>
                            <div className={`text-sm text-${metric.color}-600`}>
                                {metric.status}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pronóstico de 5 días */}
                <div>
                    <h3 className="font-medium text-gray-700 mb-4">Pronóstico Extendido</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={weatherForecast}>
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
                                    dataKey="suitability"
                                    name="Idoneidad para Cosecha"
                                    stroke="#059669"
                                    fill="#D1FAE5"
                                />
                                <Line
                                    type="monotone"
                                    dataKey="temperature"
                                    name="Temperatura"
                                    stroke="#DC2626"
                                    strokeWidth={2}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="humidity"
                                    name="Humedad"
                                    stroke="#2563EB"
                                    strokeWidth={2}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Pronóstico por horas */}
                <div>
                    <h3 className="font-medium text-gray-700 mb-4">Detalle por Horas</h3>
                    <div className="h-[200px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={hourlyForecast}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                <XAxis dataKey="hour" />
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
                                    dataKey="temperature"
                                    name="Temperatura"
                                    stroke="#DC2626"
                                    strokeWidth={2}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="humidity"
                                    name="Humedad"
                                    stroke="#2563EB"
                                    strokeWidth={2}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recomendaciones y alertas */}
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                        <div className="flex items-center gap-2 mb-3">
                            <AlertTriangle className="w-4 h-4 text-yellow-600" />
                            <h4 className="font-medium text-yellow-800">Alertas Meteorológicas</h4>
                        </div>
                        <ul className="space-y-2">
                            <li className="text-sm text-yellow-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-yellow-400" />
                                Posibilidad de lluvia en próximas 48h
                            </li>
                            <li className="text-sm text-yellow-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-yellow-400" />
                                Aumento de humedad previsto
                            </li>
                        </ul>
                    </div>

                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                        <div className="flex items-center gap-2 mb-3">
                            <Sun className="w-4 h-4 text-emerald-600" />
                            <h4 className="font-medium text-emerald-800">Ventanas de Oportunidad</h4>
                        </div>
                        <ul className="space-y-2">
                            <li className="text-sm text-emerald-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                Condiciones óptimas: 26-28 Marzo
                            </li>
                            <li className="text-sm text-emerald-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                Mejor horario: 10:00 - 16:00
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Card>
    )
}