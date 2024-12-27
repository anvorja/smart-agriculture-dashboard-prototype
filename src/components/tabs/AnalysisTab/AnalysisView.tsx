// src/components/tabs/analysis/AnalysisView.tsx
'use client'

import { TerrainAnalysis } from './TerrainAnalysis'
import { DataCollection } from './DataCollection'
import {SensorReadings} from "@/components/tabs/AnalysisTab/SensorReadings";

export const AnalysisView = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <TerrainAnalysis />
            <SensorReadings />
            <DataCollection />
        </div>
    )
}