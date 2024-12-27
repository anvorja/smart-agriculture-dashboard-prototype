// src/components/tabs/DashboardTab/GrowthTrendsChart.tsx
'use client'

import {
    LineChart, Line, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer
} from 'recharts'
import { GrowthTrendData } from '@/types/dashboard'

interface GrowthTrendsChartProps {
    data: GrowthTrendData[]
}

export const GrowthTrendsChart = ({ data }:GrowthTrendsChartProps) => {
    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="date" />
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
                        dataKey="ndvi"
                        name="NDVI"
                        stroke="#059669"
                        strokeWidth={2}
                    />
                    <Line
                        type="monotone"
                        dataKey="moisture"
                        name="Humedad"
                        stroke="#0284c7"
                        strokeWidth={2}
                    />
                    <Line
                        type="monotone"
                        dataKey="temp"
                        name="Temperatura"
                        stroke="#eab308"
                        strokeWidth={2}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}