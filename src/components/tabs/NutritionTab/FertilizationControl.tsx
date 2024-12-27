// src/components/tabs/NutritionTab/FertilizationControl.tsx
'use client'

import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { fertilizationHistory } from '@/data/nutritionMockData'
import { CalendarDays, CheckCircle2, Clock, XCircle } from 'lucide-react'

const statusColors = {
    completed: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    scheduled: 'bg-blue-50 border-blue-100 text-blue-700',
    cancelled: 'bg-gray-50 border-gray-100 text-gray-700'
}

const statusIcons = {
    completed: CheckCircle2,
    scheduled: Clock,
    cancelled: XCircle
}

export const FertilizationControl = () => {
    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Control de Fertilización"
                subtitle="Historial y programación"
            />
            <div className="p-4 space-y-6">
                {/* Próxima aplicación */}
                <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                    <div className="flex items-center gap-2 mb-2">
                        <CalendarDays className="w-5 h-5 text-emerald-600" />
                        <h3 className="font-medium text-emerald-800">Próxima Aplicación</h3>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-sm text-emerald-700">Urea</p>
                            <p className="text-xs text-emerald-600">Sector B - 150 kg/ha</p>
                        </div>
                        <p className="text-sm font-medium text-emerald-700">20 Mar</p>
                    </div>
                </div>

                {/* Historial de fertilización */}
                <div className="space-y-3">
                    <h3 className="font-medium text-gray-700">Historial de Aplicaciones</h3>
                    {fertilizationHistory.map((event, index) => {
                        const Icon = statusIcons[event.status]
                        return (
                            <div
                                key={index}
                                className={`p-3 rounded-lg border ${statusColors[event.status]}`}
                            >
                                <div className="flex items-center justify-between mb-1">
                                    <div className="flex items-center gap-2">
                                        <Icon className="w-4 h-4" />
                                        <span className="font-medium">{event.type}</span>
                                    </div>
                                    <span className="text-sm">{new Date(event.date).toLocaleDateString()}</span>
                                </div>
                                <div className="text-sm">
                                    {event.amount} - {event.area}
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Resumen de dosis */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="text-sm font-medium text-blue-800 mb-2">Dosis Recomendada</h4>
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm text-blue-700">
                            <span>NPK</span>
                            <span>300 kg/ha</span>
                        </div>
                        <div className="flex justify-between text-sm text-blue-700">
                            <span>Urea</span>
                            <span>150 kg/ha</span>
                        </div>
                        <div className="flex justify-between text-sm text-blue-700">
                            <span>Sulfato de Mg</span>
                            <span>100 kg/ha</span>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}