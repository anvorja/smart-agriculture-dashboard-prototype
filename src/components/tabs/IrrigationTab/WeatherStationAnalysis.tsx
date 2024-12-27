'use client'

import {Card} from "@/components/ui/card";
import {SectionHeader} from "@/components/shared/SectionHeader";
import {weatherData} from "@/data/irrigationMockData";
import {Cloud, Droplets, LucideIcon, Thermometer, Wind} from "lucide-react";
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

export const WeatherStationAnalysis = () => {

    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Estación Meteorológica"
                subtitle="Análisis climático detallado"
            />
            <div className="p-6 space-y-6">
                {/* Grid de métricas actuales */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {weatherData.map((data) => {
                        const icons: Record<string, LucideIcon> = {
                            'Temperatura': Thermometer,
                            'Humedad Relativa': Droplets,
                            'Velocidad del Viento': Wind,
                            'Evapotranspiración': Cloud,
                        }

                        const Icon = icons[data.parameter]

                        return (
                            <div key={data.parameter} className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                                <div className="flex items-center gap-2 mb-2">
                                    <Icon className="w-4 h-4 text-emerald-600" />
                                    <span className="text-sm text-emerald-700">{data.parameter}</span>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl font-semibold text-emerald-800">
                                        {data.value}
                                    </span>
                                    <span className="text-sm text-emerald-600">{data.unit}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Gráfico de tendencias */}
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={weatherData}>
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

                {/* Pronóstico y recomendaciones */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <h4 className="font-medium text-blue-800 mb-3">Pronóstico 24h</h4>
                        <ul className="space-y-2">
                            <li className="text-sm text-blue-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                                Temperatura máxima esperada: 28°C
                            </li>
                            <li className="text-sm text-blue-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                                Probabilidad de lluvia: 20%
                            </li>
                        </ul>
                    </div>

                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                        <h4 className="font-medium text-emerald-800 mb-3">Recomendaciones</h4>
                        <ul className="space-y-2">
                            <li className="text-sm text-emerald-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                Ajustar riego por alta evapotranspiración
                            </li>
                            <li className="text-sm text-emerald-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                Monitorear humedad del suelo
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Card>
    )
}