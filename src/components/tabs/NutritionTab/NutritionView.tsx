// src/components/tabs/NutritionTab/NutritionView.tsx
'use client'

import { NutritionStatus } from './NutritionStatus'
import { FertilizationControl } from './FertilizationControl'
import { CropHealth } from './CropHealth'
import { DetailedNutritionAnalysis } from './DetailedNutritionAnalysis'
import { DronePhotogrammetry } from './DronePhotogrammetry'
import BiomassAndPhenology from "@/components/tabs/NutritionTab/BiomassAndPhenology";


export const NutritionView = () => {
    return (
        <div className="space-y-6">
            {/* Grid superior con los tres componentes principales */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <NutritionStatus />
                <FertilizationControl />
                <CropHealth />
            </div>

            {/* Análisis detallado */}
            <DetailedNutritionAnalysis />

            {/* Fotogrametría con dron */}
            <DronePhotogrammetry />

            {/* Panel de biomasa y fenología */}
            <BiomassAndPhenology />
        </div>
    )
}