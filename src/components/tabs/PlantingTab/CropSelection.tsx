'use client'

// src/components/tabs/PlantingTab/CropSelection.tsx
import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { cropOptions } from '@/data/plantingMockData'
import {
    Calendar,
    Users,
    Shield,
    TrendingUp
} from 'lucide-react'

interface RatingIndicatorProps {
    value: number;
    label: string;
    maxValue?: number;
}

const RatingIndicator = ({ value, label, maxValue = 10 }: RatingIndicatorProps) => {
    const percentage = (value / maxValue) * 100;

    return (
        <div className="space-y-1">
            <div className="flex justify-between text-sm">
                <span className="text-gray-600">{label}</span>
                <span className="text-emerald-600 font-medium">{value}/{maxValue}</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                    className="h-full bg-emerald-600 rounded-full transition-all"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
};

export const CropSelection = () => {
    const selectedCrop = cropOptions[0]; // Por ahora usamos el primer cultivo

    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Selección de Cultivo"
                subtitle="Características y requisitos"
            />
            <div className="p-4 space-y-6">
                {/* Información básica */}
                <div className="bg-emerald-50 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-emerald-800">
                        {selectedCrop.name}
                    </h3>
                    <div className="mt-3 grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm text-emerald-700">
                {selectedCrop.cycle} días
              </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm text-emerald-700">
                {selectedCrop.density}
              </span>
                        </div>
                    </div>
                </div>

                {/* Resistencia */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-emerald-600" />
                        <h3 className="font-medium text-gray-700">Resistencia</h3>
                    </div>
                    <div className="space-y-3">
                        <RatingIndicator
                            label="Enfermedades"
                            value={selectedCrop.resistance.diseases}
                        />
                        <RatingIndicator
                            label="Plagas"
                            value={selectedCrop.resistance.pests}
                        />
                    </div>
                </div>

                {/* Mercado */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-emerald-600" />
                        <h3 className="font-medium text-gray-700">Mercado</h3>
                    </div>
                    <div className="space-y-3">
                        <RatingIndicator
                            label="Demanda"
                            value={selectedCrop.market.demand}
                        />
                        <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                            <span className="text-sm text-emerald-700">Precio Proyectado</span>
                            <span className="font-semibold text-emerald-800">
                ${selectedCrop.market.projectedPrice}/ton
              </span>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};