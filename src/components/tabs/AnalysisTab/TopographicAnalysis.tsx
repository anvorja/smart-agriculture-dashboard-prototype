// components/tabs/AnalysisTab/TopographicAnalysis.tsx
'use client'

import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { terrainZones, elevationData, drainageData } from '@/data/analysisMockData'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts'
import { Mountain, Droplets, ArrowDown, Compass } from 'lucide-react'

const slopeClassColors = {
    flat: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    gentle: 'bg-blue-50 border-blue-100 text-blue-700',
    moderate: 'bg-yellow-50 border-yellow-100 text-yellow-700',
    steep: 'bg-red-50 border-red-100 text-red-700'
}

export const TopographicAnalysis = () => {
    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Análisis Topográfico"
                subtitle="Elevación y drenaje"
            />
            <div className="p-6 space-y-6">
                {/* Perfil de elevación */}
                <div>
                    <h3 className="font-medium text-gray-700 mb-4 flex items-center gap-2">
                        <Mountain className="w-5 h-5 text-gray-600" />
                        Perfil de Elevación
                    </h3>
                    <div className="h-[200px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={elevationData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="position" />
                                <YAxis domain={['dataMin - 1', 'dataMax + 1']} />
                                <Tooltip />
                                <Area
                                    type="monotone"
                                    dataKey="elevation"
                                    stroke="#059669"
                                    fill="#d1fae5"
                                    name="Elevación (m)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Zonas del terreno */}
                <div className="grid md:grid-cols-3 gap-4">
                    {terrainZones.map((zone) => (
                        <div
                            key={zone.id}
                            className={`p-4 rounded-lg border ${slopeClassColors[zone.slopeClass]}`}
                        >
                            <h4 className="font-medium mb-2">{zone.name}</h4>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span>Área</span>
                                    <span>{zone.area} ha</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Pendiente promedio</span>
                                    <span>{zone.avgSlope}%</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Elevación promedio</span>
                                    <span>{zone.avgElevation} m</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Análisis de drenaje */}
                <div>
                    <h3 className="font-medium text-gray-700 mb-4 flex items-center gap-2">
                        <Droplets className="w-5 h-5 text-gray-600" />
                        Análisis de Drenaje
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                        {drainageData.map((data) => {
                            const zone = terrainZones.find(z => z.id === data.zoneId)
                            return (
                                <div
                                    key={data.zoneId}
                                    className="bg-blue-50 p-4 rounded-lg border border-blue-100"
                                >
                                    <h4 className="font-medium text-blue-800 mb-2">
                                        {zone?.name}
                                    </h4>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <ArrowDown className="w-4 h-4 text-blue-600" />
                                                <span className="text-sm text-blue-700">Flujo</span>
                                            </div>
                                            <span className="text-sm font-medium text-blue-800">
                        {data.flow} L/s
                      </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Droplets className="w-4 h-4 text-blue-600" />
                                                <span className="text-sm text-blue-700">Acumulación</span>
                                            </div>
                                            <span className="text-sm font-medium text-blue-800">
                        {data.accumulation}%
                      </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Compass className="w-4 h-4 text-blue-600" />
                                                <span className="text-sm text-blue-700">Dirección</span>
                                            </div>
                                            <span className="text-sm font-medium text-blue-800">
                        {data.direction}
                      </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Recomendaciones */}
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                    <h4 className="font-medium text-yellow-800 mb-2">
                        Recomendaciones de Manejo
                    </h4>
                    <ul className="space-y-2">
                        <li className="text-sm text-yellow-700 flex items-start gap-2">
                            <span className="block w-1 h-1 mt-2 rounded-full bg-yellow-400" />
                            Implementar terrazas en zonas con pendiente moderada
                        </li>
                        <li className="text-sm text-yellow-700 flex items-start gap-2">
                            <span className="block w-1 h-1 mt-2 rounded-full bg-yellow-400" />
                            Monitorear acumulación de agua en zona central
                        </li>
                        <li className="text-sm text-yellow-700 flex items-start gap-2">
                            <span className="block w-1 h-1 mt-2 rounded-full bg-yellow-400" />
                            Mantener cobertura vegetal en áreas de mayor pendiente
                        </li>
                    </ul>
                </div>
            </div>
        </Card>
    )
}