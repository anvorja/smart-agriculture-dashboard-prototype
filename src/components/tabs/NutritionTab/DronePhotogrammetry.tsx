// src/components/tabs/NutritionTab/DronePhotogrammetry.tsx
'use client'

import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { Plane, MapPin, Maximize2, Calendar } from 'lucide-react'

const lastFlightData = {
    date: '15 Mar 2024',
    area: '50 hectáreas',
    resolution: '2.5 cm/px',
    height: '120m',
    overlap: '75%'
}

const indices = [
    { name: 'NDVI', description: 'Índice de Vegetación de Diferencia Normalizada', value: 0.75 },
    { name: 'SAVI', description: 'Índice de Vegetación Ajustado al Suelo', value: 0.68 },
    { name: 'NDRE', description: 'Índice de Borde Rojo de Diferencia Normalizada', value: 0.42 }
]

export const DronePhotogrammetry = () => {
    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Fotogrametría con Dron"
                subtitle="Análisis aéreo y mapeo"
            />
            <div className="p-6 space-y-6">
                {/* Información del último vuelo */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                        <div className="flex items-center gap-2 mb-1">
                            <Calendar className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm text-emerald-700">Fecha</span>
                        </div>
                        <span className="text-lg font-medium text-emerald-800">{lastFlightData.date}</span>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                        <div className="flex items-center gap-2 mb-1">
                            <MapPin className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm text-emerald-700">Área</span>
                        </div>
                        <span className="text-lg font-medium text-emerald-800">{lastFlightData.area}</span>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                        <div className="flex items-center gap-2 mb-1">
                            <Maximize2 className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm text-emerald-700">Resolución</span>
                        </div>
                        <span className="text-lg font-medium text-emerald-800">{lastFlightData.resolution}</span>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                        <div className="flex items-center gap-2 mb-1">
                            <Plane className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm text-emerald-700">Altura</span>
                        </div>
                        <span className="text-lg font-medium text-emerald-800">{lastFlightData.height}</span>
                    </div>
                </div>

                {/* Índices Vegetativos */}
                <div className="space-y-4">
                    <h3 className="font-medium text-gray-700">Índices Vegetativos</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {indices.map((index) => (
                            <div
                                key={index.name}
                                className="bg-white p-4 rounded-lg border border-gray-200 hover:border-emerald-200 transition-colors"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-medium text-emerald-800">{index.name}</span>
                                    <span className="text-lg font-semibold text-emerald-600">{index.value}</span>
                                </div>
                                <p className="text-sm text-gray-600">{index.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Resultados y Observaciones */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <h4 className="font-medium text-blue-800 mb-3">Análisis de Resultados</h4>
                        <ul className="space-y-2">
                            <li className="text-sm text-blue-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                                Alto vigor vegetativo en 75% del área analizada
                            </li>
                            <li className="text-sm text-blue-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                                Identificación de zonas con estrés hídrico en sector norte
                            </li>
                            <li className="text-sm text-blue-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                                Variabilidad moderada en desarrollo del cultivo
                            </li>
                        </ul>
                    </div>

                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                        <h4 className="font-medium text-emerald-800 mb-3">Recomendaciones</h4>
                        <ul className="space-y-2">
                            <li className="text-sm text-emerald-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                Ajustar riego en zonas identificadas con estrés
                            </li>
                            <li className="text-sm text-emerald-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                Programar vuelo de seguimiento en 7 días
                            </li>
                            <li className="text-sm text-emerald-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                Validar en campo las zonas de bajo NDVI
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Card>
    )
}