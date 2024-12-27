// src/components/tabs/analysis/AnalysisView.tsx
'use client'

import { TerrainAnalysis } from './TerrainAnalysis'
import { SensorReadings } from './SensorReadings'
import { DataCollection } from './DataCollection'
import { SoilComposition } from './SoilComposition'
import { NutrientAnalysis } from './NutrientAnalysis'
import { TopographicAnalysis } from './TopographicAnalysis'
//import { HistoricalTrends } from './HistoricalTrends'

export const AnalysisView = () => {
    return (
        <div className="space-y-6">
            {/* Primera fila - Indicadores principales */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <TerrainAnalysis />
                <SensorReadings />
                <DataCollection />
            </div>

            {/* Segunda fila - Análisis detallados */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <SoilComposition />
                <NutrientAnalysis />
            </div>

            {/* Tercera fila - Análisis espacial y tendencias */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <TopographicAnalysis />
                {/*<HistoricalTrends />*/}
            </div>
        </div>
    )
}