// src/components/tabs/AnalysisTab/TerrainAnalysis.tsx
'use client'

import { Card, CardContent} from '@/components/ui/card'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import {SectionHeader} from "@/components/shared/SectionHeader";

const mockData = [
    { time: '00:00', humidity: 65, ph: 6.5, temp: 24 },
    { time: '04:00', humidity: 68, ph: 6.7, temp: 23 },
    { time: '08:00', humidity: 72, ph: 6.5, temp: 25 },
    { time: '12:00', humidity: 75, ph: 6.4, temp: 27 },
    { time: '16:00', humidity: 71, ph: 6.6, temp: 26 },
    { time: '20:00', humidity: 67, ph: 6.5, temp: 24 },
]


export const TerrainAnalysis = () => {
    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Análisis del Terreno"
                subtitle="Datos recolectados por CropX SV4"
            />
            <CardContent className="p-4">
                <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={mockData}>
                            <CartesianGrid
                                strokeDasharray="3 3"
                                stroke="#e5e7eb"
                            />
                            <XAxis
                                dataKey="time"
                                stroke="#374151"
                                fontSize={12}
                            />
                            <YAxis stroke="#374151" fontSize={12} />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'white',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '0.5rem',
                                    padding: '0.5rem'
                                }}
                            />
                            <Line
                                type="monotone"
                                dataKey="humidity"
                                stroke="#059669"
                                name="Humedad (%)"
                                dot={{ stroke: '#059669', fill: 'white' }}
                            />
                            <Line
                                type="monotone"
                                dataKey="ph"
                                stroke="#2563eb"
                                name="pH"
                                dot={{ stroke: '#2563eb', fill: 'white' }}
                            />
                            <Line
                                type="monotone"
                                dataKey="temp"
                                stroke="#dc2626"
                                name="Temperatura (°C)"
                                dot={{ stroke: '#dc2626', fill: 'white' }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    )
}