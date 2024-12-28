// src/components/tabs/NutritionTab/NutritionStatus.tsx
'use client'

import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { NutrientLevel } from '@/types/nutrition'
import { nutrientLevels } from '@/data/nutritionMockData'
import { AlertTriangle } from 'lucide-react'

const NutrientIndicator = ({ nutrient }: { nutrient: NutrientLevel }) => {
    const percentage = (nutrient.current / nutrient.optimal) * 100

    const colors = {
        optimal: 'bg-emerald-600',
        warning: 'bg-yellow-500',
        deficient: 'bg-red-500'
    }

    const textColors = {
        optimal: 'text-emerald-700',
        warning: 'text-yellow-700',
        deficient: 'text-red-700'
    }

    return (
        <div className="space-y-2">
            <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">{nutrient.name}</span>
                <span className={`text-sm font-medium ${textColors[nutrient.status]}`}>
          {nutrient.current}/{nutrient.optimal} {nutrient.unit}
        </span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                    className={`h-full ${colors[nutrient.status]} transition-all`}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                />
            </div>
        </div>
    )
}

export const NutritionStatus = () => {
    const hasWarnings = nutrientLevels.some(n => n.status !== 'optimal')

    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Estado Nutricional"
                subtitle="Niveles actuales de nutrientes"
            />
            <div className="p-4 space-y-6">
                {/* Niveles de nutrientes */}
                <div className="space-y-4">
                    {nutrientLevels.map((nutrient) => (
                        <NutrientIndicator
                            key={nutrient.name}
                            nutrient={nutrient}
                        />
                    ))}
                </div>

                {/* Alertas si existen */}
                {hasWarnings && (
                    <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
                        <div className="flex gap-2 text-yellow-700">
                            <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                            <div className="text-sm">
                                <p className="font-medium">Atención Requerida</p>
                                <p>Se detectaron niveles subóptimos en algunos nutrientes.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Card>
    )
}