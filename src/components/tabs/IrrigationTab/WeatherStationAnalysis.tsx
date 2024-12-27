'use client'

import { Card } from "@/components/ui/card"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { weatherData } from "@/data/irrigationMockData"
import {
    Cloud,
    Droplets,
    LucideIcon,
    Thermometer,
    Wind,
    Sun,
    Umbrella,
    CloudRain,
    Gauge
} from "lucide-react"
import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    Legend,
    AreaChart,
    Area
} from "recharts"

// Datos mock para las gráficas adicionales
const hourlyData = [
    { hour: '00:00', temp: 22, humidity: 65, radiation: 0 },
    { hour: '04:00', temp: 20, humidity: 70, radiation: 0 },
    { hour: '08:00', temp: 23, humidity: 68, radiation: 400 },
    { hour: '12:00', temp: 28, humidity: 55, radiation: 800 },
    { hour: '16:00', temp: 26, humidity: 60, radiation: 600 },
    { hour: '20:00', temp: 24, humidity: 63, radiation: 100 }
]

const weeklyForecast = [
    { day: 'Lun', maxTemp: 28, minTemp: 18, rainProb: 20 },
    { day: 'Mar', maxTemp: 27, minTemp: 17, rainProb: 30 },
    { day: 'Mie', maxTemp: 29, minTemp: 19, rainProb: 10 },
    { day: 'Jue', maxTemp: 26, minTemp: 16, rainProb: 60 },
    { day: 'Vie', maxTemp: 25, minTemp: 15, rainProb: 70 }
]

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
                            <div key={data.parameter}
                                 className="bg-emerald-50 p-4 rounded-lg border border-emerald-100 hover:bg-emerald-100 transition-colors">
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

                {/* Gráficos de tendencias */}
                <div className="grid lg:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <h3 className="font-medium text-gray-700">Tendencias en 24 horas</h3>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={hourlyData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                    <XAxis dataKey="hour" />
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
                                        dataKey="temp"
                                        name="Temperatura (°C)"
                                        stroke="#059669"
                                        strokeWidth={2}
                                        dot={{ stroke: '#059669', fill: 'white' }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="humidity"
                                        name="Humedad (%)"
                                        stroke="#0284c7"
                                        strokeWidth={2}
                                        dot={{ stroke: '#0284c7', fill: 'white' }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="font-medium text-gray-700">Radiación Solar</h3>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={hourlyData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                    <XAxis dataKey="hour" />
                                    <YAxis />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: 'white',
                                            border: '1px solid #E5E7EB',
                                            borderRadius: '0.5rem'
                                        }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="radiation"
                                        name="Radiación (W/m²)"
                                        stroke="#eab308"
                                        fill="#fef3c7"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Pronóstico semanal */}
                <div className="space-y-4">
                    <h3 className="font-medium text-gray-700">Pronóstico Semanal</h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {weeklyForecast.map((day) => (
                            <div key={day.day} className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                <div className="text-center">
                                    <h4 className="font-medium text-blue-800">{day.day}</h4>
                                    <div className="my-2">
                                        {day.rainProb > 50 ? (
                                            <CloudRain className="w-8 h-8 mx-auto text-blue-600" />
                                        ) : (
                                            <Sun className="w-8 h-8 mx-auto text-yellow-500" />
                                        )}
                                    </div>
                                    <div className="text-sm space-y-1">
                                        <p className="text-red-600">{day.maxTemp}°C</p>
                                        <p className="text-blue-600">{day.minTemp}°C</p>
                                        <p className="text-blue-800">{day.rainProb}%</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Información adicional y alertas */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                            <h4 className="font-medium text-yellow-800 mb-3">Alertas Meteorológicas</h4>
                            <ul className="space-y-2">
                                <li className="text-sm text-yellow-700 flex items-start gap-2">
                                    <Gauge className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                    <span>Alta presión atmosférica prevista para las próximas 48h</span>
                                </li>
                                <li className="text-sm text-yellow-700 flex items-start gap-2">
                                    <Wind className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                    <span>Ráfagas de viento moderadas esperadas en la tarde</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                            <h4 className="font-medium text-emerald-800 mb-3">Índices Agroclimáticos</h4>
                            <ul className="space-y-2">
                                <li className="text-sm text-emerald-700 flex items-start gap-2">
                                    <Sun className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                    <span>Horas de luz: 12.5h</span>
                                </li>
                                <li className="text-sm text-emerald-700 flex items-start gap-2">
                                    <Droplets className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                    <span>Punto de rocío: 15°C</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <h4 className="font-medium text-blue-800 mb-3">Recomendaciones de Manejo</h4>
                        <ul className="space-y-3">
                            <li className="text-sm text-blue-700 flex items-start gap-2">
                                <Umbrella className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                <span>Ajustar programación de riego considerando precipitaciones previstas</span>
                            </li>
                            <li className="text-sm text-blue-700 flex items-start gap-2">
                                <Sun className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                <span>Monitorear estrés térmico durante las horas pico de radiación</span>
                            </li>
                            <li className="text-sm text-blue-700 flex items-start gap-2">
                                <Wind className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                <span>Evaluar necesidad de cortinas rompevientos en zonas expuestas</span>
                            </li>
                            <li className="text-sm text-blue-700 flex items-start gap-2">
                                <Cloud className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                <span>Optimizar horarios de aplicaciones foliares según condiciones</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Card>
    )
}