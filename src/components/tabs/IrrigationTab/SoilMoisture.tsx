import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { moistureData } from '@/data/irrigationMockData'
import { Droplet, ArrowUp, ArrowDown, Minus } from 'lucide-react'

const statusColors = {
    optimal: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    low: 'bg-yellow-50 border-yellow-100 text-yellow-700',
    high: 'bg-blue-50 border-blue-100 text-blue-700'
}

const statusIcons = {
    optimal: Minus,
    low: ArrowDown,
    high: ArrowUp
}

export const SoilMoisture = () => {
    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Humedad del Suelo"
                subtitle="Mediciones por profundidad"
            />
            <div className="p-4 space-y-6">
                {/* Sensores de humedad */}
                <div className="space-y-4">
                    {moistureData.map((sensor) => {
                        const Icon = statusIcons[sensor.status]
                        return (
                            <div
                                key={sensor.sensor}
                                className={`p-4 rounded-lg ${statusColors[sensor.status]}`}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <Droplet className="w-4 h-4" />
                                        <span className="font-medium">Sensor {sensor.sensor}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Icon className="w-4 h-4" />
                                        <span>{sensor.value}%</span>
                                    </div>
                                </div>
                                <p className="text-sm ml-6">Profundidad: {sensor.depth}</p>
                            </div>
                        )
                    })}
                </div>

                {/* Estado general */}
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                    <h4 className="font-medium text-emerald-800 mb-2">Estado General</h4>
                    <ul className="space-y-2">
                        <li className="text-sm text-emerald-700 flex items-start gap-2">
                            <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                            Nivel de humedad óptimo en capa superior
                        </li>
                        <li className="text-sm text-emerald-700 flex items-start gap-2">
                            <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                            Monitorear humedad en profundidad media
                        </li>
                    </ul>
                </div>
            </div>
        </Card>
    )
}