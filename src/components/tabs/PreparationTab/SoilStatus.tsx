// src/components/tabs/PreparationTab/SoilStatus.tsx
import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { DataPoint } from '@/components/shared/DataPoint'
import {
    Gauge,
    Beaker, // Reemplazando Flask por Beaker
    Droplet
} from 'lucide-react'

const soilData = {
    compactacion: '45%',
    ph: '6.5',
    nitratos: '35 mg/kg',
    fosforo: '25 mg/kg',
    potasio: '180 mg/kg',
    materiaOrganica: '2.8%'
}

interface StatusIndicatorProps {
    value: number
    status: 'optimal' | 'warning' | 'alert'
}

const StatusIndicator = ({ value, status }: StatusIndicatorProps) => {
    const colors = {
        optimal: 'bg-emerald-100 text-emerald-700',
        warning: 'bg-yellow-100 text-yellow-700',
        alert: 'bg-red-100 text-red-700'
    }

    return (
        <div className={`w-full h-2 rounded-full bg-gray-200 overflow-hidden`}>
            <div
                className={`h-full ${colors[status]}`}
                style={{ width: `${value}%` }}
            />
        </div>
    )
}

export const SoilStatus = () => {
//     return (
//         <Card className="overflow-hidden">
//             <SectionHeader
//                 title="Estado del Suelo"
//                 subtitle="Análisis actual del terreno"
//             />
//             <div className="p-4 space-y-6">
//                 {/* Compactación */}
//                 <div className="space-y-2">
//                     <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-2">
//                             <Gauge className="w-5 h-5 text-emerald-600" />
//                             <span className="font-medium">Compactación del Suelo</span>
//                         </div>
//                         <span className="text-emerald-700 font-semibold">{soilData.compactacion}</span>
//                     </div>
//                     <StatusIndicator value={45} status="optimal" />
//                 </div>
//
//                 {/* Nutrientes */}
//                 <div className="space-y-4">
//                     <h3 className="font-medium text-gray-700">Nutrientes Disponibles</h3>
//                     <div className="grid grid-cols-2 gap-4">
//                         <div className="p-4 rounded-lg bg-emerald-50/50 border border-emerald-100">
//                             <div className="flex items-center gap-2 mb-2">
//                                 <Flask className="w-4 h-4 text-emerald-600" />
//                                 <span className="text-sm font-medium">pH del Suelo</span>
//                             </div>
//                             <span className="text-2xl font-semibold text-emerald-700">
//                 {soilData.ph}
//               </span>
//                         </div>
//                         <div className="p-4 rounded-lg bg-emerald-50/50 border border-emerald-100">
//                             <div className="flex items-center gap-2 mb-2">
//                                 <Droplet className="w-4 h-4 text-emerald-600" />
//                                 <span className="text-sm font-medium">Materia Orgánica</span>
//                             </div>
//                             <span className="text-2xl font-semibold text-emerald-700">
//                 {soilData.materiaOrganica}
//               </span>
//                         </div>
//                     </div>
//
//                     <div className="space-y-3">
//                         <DataPoint
//                             icon={Flask}
//                             label="Nitratos (N)"
//                             value={soilData.nitratos}
//                         />
//                         <DataPoint
//                             icon={Flask}
//                             label="Fósforo (P)"
//                             value={soilData.fosforo}
//                         />
//                         <DataPoint
//                             icon={Flask}
//                             label="Potasio (K)"
//                             value={soilData.potasio}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </Card>
//     )
// }
    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Estado del Suelo"
                subtitle="Análisis actual del terreno"
            />
            <div className="p-4 space-y-6">
                {/* Compactación */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Gauge className="w-5 h-5 text-emerald-600" />
                            <span className="font-medium text-gray-700">Compactación del Suelo</span>
                        </div>
                        <span className="text-emerald-700 font-semibold">{soilData.compactacion}</span>
                    </div>
                    <StatusIndicator value={45} status="optimal" />
                </div>

                {/* Nutrientes */}
                <div className="space-y-4">
                    <h3 className="font-medium text-gray-700">Nutrientes Disponibles</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-emerald-50/50 border border-emerald-100">
                            <div className="flex items-center gap-2 mb-2">
                                <Beaker className="w-4 h-4 text-emerald-600" />
                                <span className="text-sm font-medium">pH del Suelo</span>
                            </div>
                            <span className="text-2xl font-semibold text-emerald-700">
                {soilData.ph}
              </span>
                        </div>
                        <div className="p-4 rounded-lg bg-emerald-50/50 border border-emerald-100">
                            <div className="flex items-center gap-2 mb-2">
                                <Droplet className="w-4 h-4 text-emerald-600" />
                                <span className="text-sm font-medium">Materia Orgánica</span>
                            </div>
                            <span className="text-2xl font-semibold text-emerald-700">
                {soilData.materiaOrganica}
              </span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <DataPoint
                            icon={Beaker}
                            label="Nitratos (N)"
                            value={soilData.nitratos}
                        />
                        <DataPoint
                            icon={Beaker}
                            label="Fósforo (P)"
                            value={soilData.fosforo}
                        />
                        <DataPoint
                            icon={Beaker}
                            label="Potasio (K)"
                            value={soilData.potasio}
                        />
                    </div>
                </div>
            </div>
        </Card>
    )
}