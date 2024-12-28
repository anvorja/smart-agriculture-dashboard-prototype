// // src/components/DashboardTab/DashboardView.tsx
'use client'

import { DashboardCard } from './DashboardCard'
import { StatusIndicator } from './StatusIndicator'
import { AlertItem } from './AlertItem'
import { TaskItem } from './TaskItem'
import {
    Droplet, ThermometerSun, Wind, Leaf, Sun, CloudRain, AlertTriangle,
    Settings
} from 'lucide-react'

import {growthTrends, resourceUsage} from "@/data/dashboardMockData";
import {GrowthTrendsChart} from "@/components/tabs/DashboardTab/GrowthTrendsChart";
import {ResourceUsageChart} from "@/components/tabs/DashboardTab/ResourceUsageChart";


export const DashboardView = () => {
    return (
        <div className="space-y-6">
            {/* Primera fila - KPIs principales */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <DashboardCard
                    title="Estado del Cultivo"
                    description="Resumen general"
                >
                    <div className="space-y-3">
                        <StatusIndicator
                            icon={Droplet}
                            label="Humedad del suelo"
                            value="65%"
                        />
                        <StatusIndicator
                            icon={ThermometerSun}
                            label="pH del suelo"
                            value="6.5"
                        />
                        <StatusIndicator
                            icon={Wind}
                            label="Temperatura"
                            value="24°C"
                        />
                        <StatusIndicator
                            icon={Sun}
                            label="Radiación Solar"
                            value="750 W/m²"
                        />
                    </div>
                </DashboardCard>

                <DashboardCard
                    title="Alertas Activas"
                    description="Requieren atención"
                >
                    <div className="space-y-3">
                        <AlertItem
                            message="Nivel bajo de nitrógeno en sector A3"
                            type="error"
                        />
                        <AlertItem
                            message="Riego programado en 2 horas"
                            type="warning"
                        />
                        <AlertItem
                            message="Pronóstico de helada para mañana"
                            type="warning"
                        />
                        <AlertItem
                            message="Actualización de sensores disponible"
                            type="info"
                        />
                    </div>
                </DashboardCard>

                <DashboardCard
                    title="Próximas Tareas"
                    description="Calendario de actividades"
                >
                    <div className="space-y-2">
                        <TaskItem
                            task="Fertilización"
                            date="Hoy 14:00"
                            status="pending"
                        />
                        <TaskItem
                            task="Control de plagas"
                            date="Mañana 09:00"
                            status="scheduled"
                        />
                        <TaskItem
                            task="Mantenimiento de sensores"
                            date="En 2 días"
                            status="scheduled"
                        />
                        <TaskItem
                            task="Revisión de sistema de riego"
                            date="Completada"
                            status="completed"
                        />
                    </div>
                </DashboardCard>
            </div>

            {/* Segunda fila - Gráficas de tendencias */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <DashboardCard
                    title="Tendencias de Crecimiento"
                    description="Últimos 5 días"
                >
                    <GrowthTrendsChart data={growthTrends} />
                </DashboardCard>

                <DashboardCard
                    title="Consumo de Recursos"
                    description="Hoy"
                >
                    <ResourceUsageChart data={resourceUsage} />
                </DashboardCard>

            </div>

            {/* Tercera fila - Resúmenes y recomendaciones */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <DashboardCard
                    title="Estado Fenológico"
                    description="Fase actual y progreso"
                >
                    <div className="space-y-4">
                        <div className="p-4 bg-emerald-100/50 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-medium text-emerald-800">Fase Actual</span>
                                <span className="text-emerald-600">Desarrollo vegetativo</span>
                            </div>
                            <div className="w-full h-2 bg-emerald-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-emerald-600 rounded-full"
                                    style={{ width: '65%' }}
                                />
                            </div>
                            <span className="text-sm text-emerald-600 mt-2 block">
                65% completado
              </span>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-emerald-600">Inicio de fase</span>
                                <span className="text-emerald-800">15 Feb 2024</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-emerald-600">Fin estimado</span>
                                <span className="text-emerald-800">30 Mar 2024</span>
                            </div>
                        </div>
                    </div>
                </DashboardCard>

                <DashboardCard
                    title="Eficiencia Operativa"
                    description="Métricas clave"
                >
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 bg-emerald-50 rounded-lg">
                                <div className="flex items-center gap-2 mb-1">
                                    <Droplet className="w-4 h-4 text-emerald-600" />
                                    <span className="text-sm text-emerald-700">Uso de Agua</span>
                                </div>
                                <span className="text-lg font-medium text-emerald-800">92%</span>
                            </div>

                            <div className="p-3 bg-emerald-50 rounded-lg">
                                <div className="flex items-center gap-2 mb-1">
                                    <Leaf className="w-4 h-4 text-emerald-600" />
                                    <span className="text-sm text-emerald-700">Nutrientes</span>
                                </div>
                                <span className="text-lg font-medium text-emerald-800">88%</span>
                            </div>
                        </div>

                        <div className="p-4 bg-emerald-50 rounded-lg">
                            <h4 className="font-medium text-emerald-800 mb-2">
                                Rendimiento Esperado
                            </h4>
                            <div className="flex items-center justify-between">
                                <span className="text-emerald-700">6.5 ton/ha</span>
                                <span className="text-emerald-600 text-sm">+8% vs anterior</span>
                            </div>
                        </div>
                    </div>
                </DashboardCard>

                <DashboardCard
                    title="Acciones Recomendadas"
                    description="Basado en análisis actual"
                >
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                            <Settings className="w-5 h-5 text-emerald-600" />
                            <div>
                                <p className="font-medium text-emerald-800">
                                    Ajustar riego
                                </p>
                                <p className="text-sm text-emerald-600">
                                    Incrementar 15% por altas temperaturas
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                            <AlertTriangle className="w-5 h-5 text-yellow-600" />
                            <div>
                                <p className="font-medium text-yellow-800">
                                    Monitorear nutrientes
                                </p>
                                <p className="text-sm text-yellow-600">
                                    Niveles de N cercanos al límite
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                            <CloudRain className="w-5 h-5 text-blue-600" />
                            <div>
                                <p className="font-medium text-blue-800">
                                    Pronóstico de lluvia
                                </p>
                                <p className="text-sm text-blue-600">
                                    Ajustar cronograma de fertilización
                                </p>
                            </div>
                        </div>
                    </div>
                </DashboardCard>
            </div>
        </div>
    )
}