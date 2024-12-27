// src/components/tabs/PlantingTab/PlantingPlan.tsx
'use client'

import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { cropOptions } from '@/data/plantingMockData'
import {
    Calendar,
    Maximize2,
    Target,
    TrendingUp
} from 'lucide-react'

interface PlanMetricProps {
    icon: typeof Calendar | typeof Maximize2 | typeof Target | typeof TrendingUp
    label: string
    value: string | number
    subtext?: string
}

const PlanMetric = ({ icon: Icon, label, value, subtext }: PlanMetricProps) => (
    <div className="flex items-center gap-3 p-3 bg-emerald-50/50 rounded-lg border border-emerald-100">
        <div className="p-2 bg-white rounded-lg">
            <Icon className="w-5 h-5 text-emerald-600" />
        </div>
        <div>
            <span className="text-sm text-emerald-600">{label}</span>
            <div className="font-semibold text-emerald-900">{value}</div>
            {subtext && <span className="text-xs text-emerald-600">{subtext}</span>}
        </div>
    </div>
)

export const PlantingPlan = () => {
    const selectedCrop = cropOptions[0] // Por ahora usamos el primer cultivo

    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Planificación de Siembra"
                subtitle="Calendario y estimaciones"
            />
            <div className="p-4 space-y-6">
                {/* Calendario */}
                <div className="space-y-4">
                    <h3 className="font-medium flex items-center gap-2 text-gray-700">
                        <Calendar className="w-4 h-4" />
                        Temporada de Siembra
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                        <div className="bg-emerald-50 p-3 rounded-lg">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-emerald-700">Fecha Óptima</span>
                                <span className="text-emerald-800 font-medium">15 Mar - 30 Mar</span>
                            </div>
                        </div>
                        <div className="bg-emerald-50/50 p-3 rounded-lg border border-emerald-100">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-emerald-700">Duración del Ciclo</span>
                                <span className="text-emerald-800 font-medium">{selectedCrop.cycle} días</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Métricas de Planificación */}
                <div className="space-y-4">
                    <h3 className="font-medium flex items-center gap-2 text-gray-700">
                        <Target className="w-4 h-4" />
                        Métricas de Planificación
                    </h3>
                    <div className="grid gap-3">
                        <PlanMetric
                            icon={Maximize2}
                            label="Área Planificada"
                            value="50 hectáreas"
                            subtext="Densidad: 60,000 plantas/ha"
                        />
                        <PlanMetric
                            icon={Target}
                            label="Rendimiento Estimado"
                            value="6.5 ton/ha"
                            subtext="Total: 325 toneladas"
                        />
                        <PlanMetric
                            icon={TrendingUp}
                            label="Ingreso Proyectado"
                            value="$123,500"
                            subtext="Basado en precio actual de mercado"
                        />
                    </div>
                </div>

                {/* Recomendaciones */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="text-sm font-medium text-blue-800 mb-2">Recomendaciones</h4>
                    <ul className="space-y-2">
                        <li className="text-sm text-blue-700 flex items-start gap-2">
                            <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                            Preparar el sistema de riego una semana antes de la siembra
                        </li>
                        <li className="text-sm text-blue-700 flex items-start gap-2">
                            <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                            Verificar pronóstico de lluvias para ajustar fecha exacta
                        </li>
                    </ul>
                </div>
            </div>
        </Card>
    )
}