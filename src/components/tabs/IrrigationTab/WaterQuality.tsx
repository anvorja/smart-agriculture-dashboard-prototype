import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { waterQualityData } from '@/data/irrigationMockData'
import { Droplet, AlertTriangle, CheckCircle2, AlertCircle } from 'lucide-react'

const statusColors = {
    good: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    warning: 'bg-yellow-50 border-yellow-100 text-yellow-700',
    alert: 'bg-red-50 border-red-100 text-red-700'
}

const statusIcons = {
    good: CheckCircle2,
    warning: AlertTriangle,
    alert: AlertCircle
}

export const WaterQuality = () => {
    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Calidad del Agua"
                subtitle="Parámetros y mediciones"
            />
            <div className="p-4 space-y-6">
                {/* Métricas de calidad */}
                <div className="space-y-4">
                    {waterQualityData.map((metric) => {
                        const Icon = statusIcons[metric.status]
                        return (
                            <div
                                key={metric.parameter}
                                className={`p-4 rounded-lg border ${statusColors[metric.status]}`}
                            >
                                <div className="flex items-center justify-between mb-1">
                                    <div className="flex items-center gap-2">
                                        <Droplet className="w-4 h-4" />
                                        <span className="font-medium">{metric.parameter}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Icon className="w-4 h-4" />
                                        <span>
                                            {metric.value} {metric.unit}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Recomendaciones */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="font-medium text-blue-800 mb-2">Recomendaciones</h4>
                    <ul className="space-y-2">
                        <li className="text-sm text-blue-700 flex items-start gap-2">
                            <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                            Monitorear niveles de sodio
                        </li>
                        <li className="text-sm text-blue-700 flex items-start gap-2">
                            <span className="block w-1 h-1 mt-2 rounded-full bg-blue-400" />
                            pH y conductividad en rangos óptimos
                        </li>
                    </ul>
                </div>
            </div>
        </Card>
    )
}