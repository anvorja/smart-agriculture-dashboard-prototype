// src/components/tabs/DashboardTab/ResourceUsageChart.tsx
'use client'

import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer
} from 'recharts'
import { ResourceUsageData } from '@/types/dashboard'

interface ResourceUsageChartProps {
    data: ResourceUsageData[]
}

export const ResourceUsageChart = ({ data }: ResourceUsageChartProps) => {
    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="time" />
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
                        dataKey="water"
                        name="Agua (L/ha)"
                        stroke="#0284c7"
                        fill="#93c5fd"
                    />
                    <Area
                        type="monotone"
                        dataKey="nutrients"
                        name="Nutrientes (kg/ha)"
                        stroke="#059669"
                        fill="#86efac"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}