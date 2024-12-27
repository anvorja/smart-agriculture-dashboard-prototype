import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { irrigationSchedule } from '@/data/irrigationMockData'
import { Timer, CheckCircle2, Clock, MapPin } from 'lucide-react'

const statusColors = {
    active: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    scheduled: 'bg-blue-50 border-blue-100 text-blue-700',
    completed: 'bg-gray-50 border-gray-100 text-gray-600'
}

const statusIcons = {
    active: Timer,
    scheduled: Clock,
    completed: CheckCircle2
}

export const IrrigationScheduling = () => {
    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Programación de Riego"
                subtitle="Horarios y zonas"
            />
            <div className="p-4 space-y-6">
                {/* Programación activa */}
                <div className="space-y-4">
                    {irrigationSchedule.map((schedule) => {
                        const Icon = statusIcons[schedule.status]
                        return (
                            <div
                                key={schedule.zone}
                                className={`p-4 rounded-lg border ${statusColors[schedule.status]}`}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        <span className="font-medium">{schedule.zone}</span>
                                    </div>
                                    <Icon className="w-4 h-4" />
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Inicio: {schedule.startTime}</span>
                                    <span>Duración: {schedule.duration} min</span>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Información adicional */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="font-medium text-blue-800 mb-2">Datos de Riego</h4>
                    <ul className="space-y-2">
                        <li className="text-sm text-blue-700 flex items-start gap-2">
                            <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                            Volumen total programado: 450 m³
                        </li>
                        <li className="text-sm text-blue-700 flex items-start gap-2">
                            <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                            Tiempo total de riego: 115 min
                        </li>
                    </ul>
                </div>
            </div>
        </Card>
    )
}