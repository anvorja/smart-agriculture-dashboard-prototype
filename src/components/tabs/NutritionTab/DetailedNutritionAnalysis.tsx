// src/components/tabs/NutritionTab/DetailedNutritionAnalysis.tsx
'use client'

import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/shared/SectionHeader'
import {
    LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer, Legend, Area, AreaChart, Cell
} from 'recharts'

// Mock data para las diferentes visualizaciones
const nutrientTrends = [
    { month: 'Ene', n: 35, p: 25, k: 180 },
    { month: 'Feb', n: 38, p: 27, k: 185 },
    { month: 'Mar', n: 36, p: 26, k: 182 },
    { month: 'Abr', n: 40, p: 29, k: 190 }
]

const applicationEfficiency = [
    { zone: 'A1', efficiency: 92 },
    { zone: 'A2', efficiency: 88 },
    { zone: 'B1', efficiency: 95 },
    { zone: 'B2', efficiency: 85 }
]

const deficiencyAnalysis = [
    { nutrient: 'Nitrógeno', level: 85, optimal: 100 },
    { nutrient: 'Fósforo', level: 90, optimal: 100 },
    { nutrient: 'Potasio', level: 78, optimal: 100 },
    { nutrient: 'Magnesio', level: 70, optimal: 100 }
]

export const DetailedNutritionAnalysis = () => {
    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Análisis Nutricional Detallado"
                subtitle="Tendencias y patrones nutricionales"
            />
            <div className="p-6">
                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Tendencias de Nutrientes */}
                    <div className="space-y-3">
                        <h3 className="font-medium text-gray-700">Tendencias de Nutrientes</h3>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={nutrientTrends}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                    <XAxis dataKey="month" />
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
                                        dataKey="n"
                                        stroke="#059669"
                                        name="Nitrógeno"
                                        strokeWidth={2}
                                        dot={{ stroke: '#059669', fill: 'white' }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="p"
                                        stroke="#0284c7"
                                        name="Fósforo"
                                        strokeWidth={2}
                                        dot={{ stroke: '#0284c7', fill: 'white' }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="k"
                                        stroke="#7c3aed"
                                        name="Potasio"
                                        strokeWidth={2}
                                        dot={{ stroke: '#7c3aed', fill: 'white' }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Eficiencia de Aplicación por Zona */}
                    <div className="space-y-3">
                        <h3 className="font-medium text-gray-700">Eficiencia de Aplicación por Zona</h3>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={applicationEfficiency}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                    <XAxis dataKey="zone" />
                                    <YAxis />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: 'white',
                                            border: '1px solid #E5E7EB',
                                            borderRadius: '0.5rem'
                                        }}
                                    />
                                    <Bar dataKey="efficiency" fill="#059669">
                                        {applicationEfficiency.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={entry.efficiency >= 90 ? '#059669' : '#0284c7'}
                                            />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Análisis de Deficiencias */}
                    <div className="space-y-3">
                        <h3 className="font-medium text-gray-700">Análisis de Deficiencias</h3>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={deficiencyAnalysis}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                    <XAxis dataKey="nutrient" />
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
                                        dataKey="level"
                                        stroke="#059669"
                                        fill="#059669"
                                        fillOpacity={0.3}
                                        name="Nivel Actual"
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="optimal"
                                        stroke="#0284c7"
                                        fill="#0284c7"
                                        fillOpacity={0.1}
                                        name="Nivel Óptimo"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Resumen y Recomendaciones */}
                    <div className="space-y-4">
                        <h3 className="font-medium text-gray-700">Recomendaciones</h3>
                        <div className="grid gap-4">
                            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                                <h4 className="font-medium text-emerald-800 mb-2">Ajustes Recomendados</h4>
                                <ul className="space-y-2">
                                    <li className="text-sm text-emerald-700 flex items-start gap-2">
                                        <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                        Incrementar aplicación de magnesio en zonas A2 y B2
                                    </li>
                                    <li className="text-sm text-emerald-700 flex items-start gap-2">
                                        <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                        Mantener niveles actuales de nitrógeno y fósforo
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                <h4 className="font-medium text-blue-800 mb-2">Próximas Acciones</h4>
                                <ul className="space-y-2">
                                    <li className="text-sm text-blue-700 flex items-start gap-2">
                                        <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                                        Programar aplicación foliar de micronutrientes
                                    </li>
                                    <li className="text-sm text-blue-700 flex items-start gap-2">
                                        <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                                        Revisar sistema de fertirrigación en zona B2
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}