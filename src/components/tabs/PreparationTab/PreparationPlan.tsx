// src/components/tabs/PreparationTab/PreparationPlan.tsx
import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/shared/SectionHeader'
import {
    CalendarDays,
    CheckCircle2,
    Clock,
    AlertTriangle,
    Tractor,
    LucideIcon
} from 'lucide-react'

type ActivityType = 'completed' | 'in-progress' | 'pending'

interface Activity {
    tipo: ActivityType
    actividad: string
    fecha: string
    icon: LucideIcon
}

const planData = {
    etapaActual: 'Preparación inicial',
    progreso: 35,
    actividades: [
        {
            tipo: 'completed' as ActivityType,
            actividad: 'Análisis de suelo',
            fecha: '15 Mar 2024',
            icon: CheckCircle2
        },
        {
            tipo: 'in-progress' as ActivityType,
            actividad: 'Aplicación de cal',
            fecha: 'En progreso',
            icon: Clock
        },
        {
            tipo: 'pending' as ActivityType,
            actividad: 'Preparación mecánica',
            fecha: '20 Mar 2024',
            icon: Tractor
        }
    ],
    alertas: [
        {
            mensaje: 'Condiciones climáticas óptimas para encalado en los próximos 3 días',
            tipo: 'info'
        }
    ]
}

interface ActivityItemProps {
    activity: string
    icon: LucideIcon
    date: string
    type: ActivityType
}

const ActivityItem = ({
                          activity,
                          icon: Icon,
                          date,
                          type
                      }: ActivityItemProps) => {
    const styles = {
        completed: 'text-emerald-600 bg-emerald-50',
        'in-progress': 'text-blue-600 bg-blue-50',
        pending: 'text-gray-600 bg-gray-50'
    }

    return (
        <div className="flex items-start gap-3 p-3 rounded-lg border border-emerald-100">
            <div className={`p-2 rounded-lg ${styles[type]}`}>
                <Icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
                <p className="font-medium text-gray-800">{activity}</p>
                <p className="text-sm text-gray-500">{date}</p>
            </div>
        </div>
    )
}

export const PreparationPlan = () => {
    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Plan de Preparación"
                subtitle="Seguimiento y programación"
            />
            <div className="p-4 space-y-6">
                {/* Estado Actual */}
                <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg">
                    <div className="flex items-center gap-3">
                        <CalendarDays className="w-5 h-5 text-emerald-600" />
                        <div>
                            <p className="text-sm text-emerald-600">Etapa Actual</p>
                            <p className="font-semibold text-emerald-800">{planData.etapaActual}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-emerald-600">Progreso</p>
                        <p className="font-semibold text-emerald-800">{planData.progreso}%</p>
                    </div>
                </div>

                {/* Lista de Actividades */}
                <div className="space-y-3">
                    <h3 className="font-medium text-gray-700">Actividades Programadas</h3>
                    {planData.actividades.map((act, index) => (
                        <ActivityItem
                            key={index}
                            activity={act.actividad}
                            icon={act.icon}
                            date={act.fecha}
                            type={act.tipo}
                        />
                    ))}
                </div>

                {/* Alertas y Recomendaciones */}
                <div className="space-y-3">
                    <h3 className="font-medium text-gray-700">Alertas y Recomendaciones</h3>
                    {planData.alertas.map((alerta, index) => (
                        <div
                            key={index}
                            className="flex gap-2 p-3 bg-blue-50 text-blue-700 rounded-lg"
                        >
                            <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                            <p className="text-sm">{alerta.mensaje}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    )
}