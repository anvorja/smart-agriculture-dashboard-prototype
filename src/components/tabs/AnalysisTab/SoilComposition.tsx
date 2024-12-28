// components/tabs/AnalysisTab/SoilComposition.tsx
'use client'

import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { soilComposition, soilProperties, soilClassification } from '@/data/analysisMockData'
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend
} from 'recharts'
import { Database, Droplets, Leaf } from 'lucide-react'

const COLORS = ['#fde68a', '#d1d5db', '#93c5fd']

export const SoilComposition = () => {
    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Composición del Suelo"
                subtitle="Análisis y características"
            />
            <div className="p-6 space-y-6">
                {/* Gráfico de composición */}
                <div className="grid lg:grid-cols-2 gap-6">
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={soilComposition}
                                    dataKey="percentage"
                                    nameKey="type"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                >
                                    {soilComposition.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Propiedades del suelo */}
                    <div className="space-y-4">
                        {soilProperties.map((property) => (
                            <div
                                key={property.property}
                                className={`p-4 rounded-lg border ${
                                    property.status === 'optimal'
                                        ? 'bg-emerald-50 border-emerald-100'
                                        : 'bg-yellow-50 border-yellow-100'
                                }`}
                            >
                                <div className="flex justify-between items-center mb-2">
                  <span className={`font-medium ${
                      property.status === 'optimal' ? 'text-emerald-800' : 'text-yellow-800'
                  }`}>
                    {property.property}
                  </span>
                                    <span className={`text-sm ${
                                        property.status === 'optimal' ? 'text-emerald-600' : 'text-yellow-600'
                                    }`}>
                    {property.value}{property.unit}
                  </span>
                                </div>
                                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${
                                            property.status === 'optimal' ? 'bg-emerald-500' : 'bg-yellow-500'
                                        }`}
                                        style={{ width: `${(property.value / property.target) * 100}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Clasificación del suelo */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <div className="flex items-center gap-2 mb-2">
                            <Database className="w-5 h-5 text-blue-600" />
                            <h3 className="font-medium text-blue-800">Textura y Estructura</h3>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm text-blue-600">Textura: {soilClassification.texture}</p>
                            <p className="text-sm text-blue-600">Estructura: {soilClassification.structure}</p>
                        </div>
                    </div>

                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                        <div className="flex items-center gap-2 mb-2">
                            <Droplets className="w-5 h-5 text-emerald-600" />
                            <h3 className="font-medium text-emerald-800">Retención de Agua</h3>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm text-emerald-600">
                                Capacidad: {soilClassification.waterRetention * 100}%
                            </p>
                            <p className="text-sm text-emerald-600">
                                Infiltración: {soilClassification.infiltration} mm/h
                            </p>
                        </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                        <div className="flex items-center gap-2 mb-2">
                            <Leaf className="w-5 h-5 text-yellow-600" />
                            <h3 className="font-medium text-yellow-800">Densidad</h3>
                        </div>
                        <p className="text-sm text-yellow-600">
                            {soilClassification.density} g/cm³
                        </p>
                    </div>
                </div>
            </div>
        </Card>
    )
}