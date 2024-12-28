// src/components/tabs/PreparationTab/FertilizationRequirements.tsx
import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/shared/SectionHeader'
import {
    Sprout,
    FlaskConical,
    Leaf
} from 'lucide-react'

const requirementsData = {
    cultivo: 'Maíz',
    requerimientos: {
        nitrogeno: { actual: 35, requerido: 80 },
        fosforo: { actual: 25, requerido: 40 },
        potasio: { actual: 180, requerido: 200 }
    },
    recomendaciones: [
        { tipo: 'Orgánica', cantidad: '2.5 ton/ha', detalles: 'Compost maduro' },
        { tipo: 'Química', cantidad: '300 kg/ha', detalles: 'NPK 15-15-15' }
    ]
}

const NutrientBar = ({
                         current,
                         required,
                         label
                     }: {
    current: number;
    required: number;
    label: string;
}) => {
    const percentage = (current / required) * 100;

    return (
        <div className="space-y-2">
            <div className="flex justify-between text-sm">
                <span className="text-emerald-700 font-medium">{label}</span>
                <span className="text-emerald-600">{current}/{required} mg/kg</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                    className="h-full bg-emerald-600 rounded-full transition-all"
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                />
            </div>
        </div>
    )
}

export const FertilizationRequirements = () => {
    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Requerimientos de Fertilización"
                subtitle="Análisis y recomendaciones"
            />
            <div className="p-4 space-y-6">
                {/* Cultivo Seleccionado */}
                <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                    <Sprout className="w-5 h-5 text-emerald-600" />
                    <div>
                        <p className="text-sm text-emerald-600">Cultivo Seleccionado</p>
                        <p className="font-semibold text-emerald-900">{requirementsData.cultivo}</p>
                    </div>
                </div>

                {/* Requerimientos de Nutrientes */}
                <div className="space-y-4">
                    <h3 className="font-medium text-gray-700 flex items-center gap-2">
                        <FlaskConical className="w-4 h-4" />
                        Balance de Nutrientes
                    </h3>
                    <div className="space-y-4">
                        <NutrientBar
                            label="Nitrógeno (N)"
                            current={requirementsData.requerimientos.nitrogeno.actual}
                            required={requirementsData.requerimientos.nitrogeno.requerido}
                        />
                        <NutrientBar
                            label="Fósforo (P)"
                            current={requirementsData.requerimientos.fosforo.actual}
                            required={requirementsData.requerimientos.fosforo.requerido}
                        />
                        <NutrientBar
                            label="Potasio (K)"
                            current={requirementsData.requerimientos.potasio.actual}
                            required={requirementsData.requerimientos.potasio.requerido}
                        />
                    </div>
                </div>

                {/* Recomendaciones de Fertilización */}
                <div className="space-y-3">
                    <h3 className="font-medium text-gray-700 flex items-center gap-2">
                        <Leaf className="w-4 h-4" />
                        Recomendaciones
                    </h3>
                    {requirementsData.recomendaciones.map((rec, index) => (
                        <div
                            key={index}
                            className="p-3 bg-emerald-50/50 border border-emerald-100 rounded-lg"
                        >
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-medium text-emerald-800">{rec.tipo}</span>
                                <span className="text-emerald-600 font-medium">{rec.cantidad}</span>
                            </div>
                            <p className="text-sm text-emerald-600">{rec.detalles}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    )
}