'use client'

import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/shared/SectionHeader'
import {
    Droplet,
    Timer,
    CloudRain,
    Waves,
    Gauge,
    AlertTriangle,
    CheckCircle2,
    Settings,
    LineChart,
    Clock
} from 'lucide-react'

// Datos mock para las recomendaciones
const efficiencyMetrics = [
    { label: 'Eficiencia de Riego', value: '85%', status: 'good' },
    { label: 'Uniformidad de Distribución', value: '78%', status: 'warning' },
    { label: 'Pérdidas por Evaporación', value: '12%', status: 'warning' }
]

const recommendationsByPriority = {
    high: [
        {
            title: 'Ajuste de Frecuencia de Riego',
            description: 'Aumentar frecuencia debido a altas temperaturas previstas',
            impact: 'Alto impacto en eficiencia hídrica',
            deadline: '24 horas'
        }
    ],
    medium: [
        {
            title: 'Mantenimiento de Emisores',
            description: 'Inspección y limpieza de goteros en sector A3',
            impact: 'Mejora en uniformidad de distribución',
            deadline: '3 días'
        }
    ],
    low: [
        {
            title: 'Actualización de Programación',
            description: 'Revisar horarios de riego según tarifas eléctricas',
            impact: 'Optimización de costos operativos',
            deadline: 'Próxima semana'
        }
    ]
}

export const IrrigationRecommendations = () => {
    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Recomendaciones de Riego"
                subtitle="Análisis y sugerencias para optimización"
            />
            <div className="p-6 space-y-6">
                {/* Métricas de Eficiencia */}
                <div>
                    <h3 className="font-medium text-gray-700 mb-4">Métricas de Eficiencia</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                        {efficiencyMetrics.map((metric) => (
                            <div
                                key={metric.label}
                                className={`p-4 rounded-lg border ${
                                    metric.status === 'good'
                                        ? 'bg-emerald-50 border-emerald-100'
                                        : 'bg-yellow-50 border-yellow-100'
                                }`}
                            >
                                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm ${
                      metric.status === 'good' ? 'text-emerald-700' : 'text-yellow-700'
                  }`}>
                    {metric.label}
                  </span>
                                    {metric.status === 'good' ? (
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                    ) : (
                                        <AlertTriangle className="w-4 h-4 text-yellow-600" />
                                    )}
                                </div>
                                <span className={`text-2xl font-bold ${
                                    metric.status === 'good' ? 'text-emerald-700' : 'text-yellow-700'
                                }`}>
                  {metric.value}
                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recomendaciones por Prioridad */}
                <div className="grid lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <h3 className="font-medium text-gray-700">Recomendaciones Prioritarias</h3>

                        {/* Alta Prioridad */}
                        {recommendationsByPriority.high.map((rec, index) => (
                            <div
                                key={index}
                                className="bg-red-50 border border-red-100 rounded-lg p-4"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <AlertTriangle className="w-5 h-5 text-red-600" />
                                    <h4 className="font-medium text-red-800">{rec.title}</h4>
                                </div>
                                <p className="text-sm text-red-700 mb-2">{rec.description}</p>
                                <div className="flex items-center justify-between text-sm text-red-600">
                                    <span>{rec.impact}</span>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        <span>{rec.deadline}</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Media Prioridad */}
                        {recommendationsByPriority.medium.map((rec, index) => (
                            <div
                                key={index}
                                className="bg-yellow-50 border border-yellow-100 rounded-lg p-4"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <Settings className="w-5 h-5 text-yellow-600" />
                                    <h4 className="font-medium text-yellow-800">{rec.title}</h4>
                                </div>
                                <p className="text-sm text-yellow-700 mb-2">{rec.description}</p>
                                <div className="flex items-center justify-between text-sm text-yellow-600">
                                    <span>{rec.impact}</span>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        <span>{rec.deadline}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-medium text-gray-700">Optimizaciones Sugeridas</h3>

                        {/* Baja Prioridad */}
                        {recommendationsByPriority.low.map((rec, index) => (
                            <div
                                key={index}
                                className="bg-blue-50 border border-blue-100 rounded-lg p-4"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <Gauge className="w-5 h-5 text-blue-600" />
                                    <h4 className="font-medium text-blue-800">{rec.title}</h4>
                                </div>
                                <p className="text-sm text-blue-700 mb-2">{rec.description}</p>
                                <div className="flex items-center justify-between text-sm text-blue-600">
                                    <span>{rec.impact}</span>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        <span>{rec.deadline}</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Métricas Adicionales */}
                        <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
                            <h4 className="font-medium text-emerald-800 mb-3">Indicadores de Rendimiento</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center justify-between text-sm text-emerald-700">
                                    <div className="flex items-center gap-2">
                                        <Droplet className="w-4 h-4" />
                                        <span>Consumo de Agua</span>
                                    </div>
                                    <span>450 m³/ha</span>
                                </li>
                                <li className="flex items-center justify-between text-sm text-emerald-700">
                                    <div className="flex items-center gap-2">
                                        <Timer className="w-4 h-4" />
                                        <span>Tiempo de Riego</span>
                                    </div>
                                    <span>2.5 h/día</span>
                                </li>
                                <li className="flex items-center justify-between text-sm text-emerald-700">
                                    <div className="flex items-center gap-2">
                                        <LineChart className="w-4 h-4" />
                                        <span>Eficiencia Energética</span>
                                    </div>
                                    <span>0.8 kWh/m³</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Resumen y Próximos Pasos */}
                <div className="bg-gray-50 border border-gray-100 rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-3">Próximos Pasos</h4>
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200">
                            <CloudRain className="w-4 h-4 text-blue-600" />
                            <span className="text-sm text-gray-700">Actualizar programación</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200">
                            <Settings className="w-4 h-4 text-yellow-600" />
                            <span className="text-sm text-gray-700">Mantenimiento preventivo</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200">
                            <Waves className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm text-gray-700">Revisar presiones</span>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}