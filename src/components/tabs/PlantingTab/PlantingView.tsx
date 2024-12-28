// src/components/tabs/PlantingTab/PlantingView.tsx
'use client'

import { CropSelection } from './CropSelection'
import { PlantingPlan } from './PlantingPlan'
import { MarketAnalysis } from './MarketAnalysis'
import { DetailedAnalysis } from './DetailedAnalysis'

export const PlantingView = () => {
    return (
        <div className="space-y-4">
            {/* Grid superior con los tres componentes principales */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <CropSelection />
                <PlantingPlan />
                <MarketAnalysis />
            </div>

            {/* Panel inferior de análisis detallado */}
            <div className="w-full">
                <DetailedAnalysis />
            </div>
        </div>
    )
}