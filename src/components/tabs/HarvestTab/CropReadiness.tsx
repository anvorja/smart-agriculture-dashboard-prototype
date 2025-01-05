'use client'

import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { harvestPlan } from '@/data/harvestMockData'
import { Progress } from "@/components/ui/progress"
import {
    Calendar,
    Sun,
    CloudRain,
    Clock,
    CalendarCheck,
    AlertTriangle
} from 'lucide-react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export const CropReadiness = () => {
    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Preparación para Cosecha"
                subtitle="Estado y planificación"
            />
            <div className="p-4 sm:p-6 space-y-6">
                {/* Indicador principal de preparación */}
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-emerald-600" />
                            <span className="font-medium text-emerald-800">Estado de Preparación</span>
                        </div>
                        <span className="text-2xl font-bold text-emerald-700">
                            {harvestPlan.readiness}%
                        </span>
                    </div>
                    <Progress value={harvestPlan.readiness} className="h-2" />
                </div>

                {/* Fechas clave */}
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center gap-2 mb-3">
                            <Calendar className="w-4 h-4 text-blue-600" />
                            <span className="font-medium text-gray-700">Fecha Estimada</span>
                        </div>
                        <span className="text-lg font-semibold text-gray-800">
                            {harvestPlan.estimatedDate}
                        </span>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center gap-2 mb-3">
                            <CalendarCheck className="w-4 h-4 text-emerald-600" />
                            <span className="font-medium text-gray-700">Ventana Óptima</span>
                        </div>
                        <span className="text-lg font-semibold text-gray-800">
                            {harvestPlan.recommendedWindow.start} - {harvestPlan.recommendedWindow.end}
                        </span>
                    </div>
                </div>

                {/* Pronóstico y condiciones */}
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            {harvestPlan.weatherForecast.condition === 'Soleado' ? (
                                <Sun className="w-5 h-5 text-yellow-500" />
                            ) : (
                                <CloudRain className="w-5 h-5 text-blue-500" />
                            )}
                            <span className="font-medium text-gray-700">Pronóstico</span>
                        </div>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-gray-600">
                                            {harvestPlan.weatherForecast.condition}
                                        </span>
                                        <span className="text-sm font-medium text-blue-600">
                                            {harvestPlan.weatherForecast.probability}%
                                        </span>
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Probabilidad de condición meteorológica</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <Progress
                        value={harvestPlan.weatherForecast.probability}
                        className="h-2"
                    />
                </div>

                {/* Alertas y consideraciones */}
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                        <div className="flex items-center gap-2 mb-3">
                            <AlertTriangle className="w-4 h-4 text-yellow-600" />
                            <h4 className="font-medium text-yellow-800">Consideraciones</h4>
                        </div>
                        <ul className="space-y-2">
                            <li className="text-sm text-yellow-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-yellow-400" />
                                Verificar humedad del suelo antes de cosecha
                            </li>
                            <li className="text-sm text-yellow-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-yellow-400" />
                                Preparar equipos y maquinaria
                            </li>
                            <li className="text-sm text-yellow-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-yellow-400" />
                                Coordinar logística de transporte
                            </li>
                        </ul>
                    </div>

                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                        <div className="flex items-center gap-2 mb-3">
                            <Clock className="w-4 h-4 text-emerald-600" />
                            <h4 className="font-medium text-emerald-800">Próximos Pasos</h4>
                        </div>
                        <ul className="space-y-2">
                            <li className="text-sm text-emerald-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                Realizar última evaluación de madurez
                            </li>
                            <li className="text-sm text-emerald-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                Confirmar disponibilidad de personal
                            </li>
                            <li className="text-sm text-emerald-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                Monitorear condiciones climáticas
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Card>
    )
}