// src/components/tabs/HarvestTab/HarvestView.tsx
'use client'

import { MaturityStatus } from './MaturityStatus'
import { YieldAnalysis } from './YieldAnalysis'
import { QualityMetrics } from './QualityMetrics'
import {OrganicMatterAnalysis} from "@/components/tabs/HarvestTab/OrganicMatterAnalysis";
import {CropReadiness} from "@/components/tabs/HarvestTab/CropReadiness";
import {WeatherPlanning} from "@/components/tabs/HarvestTab/WeatherPlanning";
import {HarvestPredictions} from "@/components/tabs/HarvestTab/HarvestPredictions";
import {AIReportAnalysis} from "@/components/tabs/HarvestTab/AIReportAnalysis";

export const HarvestView = () => {
    return (
        <div className="space-y-6">
            {/* Primera fila - Métricas principales */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <MaturityStatus />
                <YieldAnalysis />
                <QualityMetrics />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <OrganicMatterAnalysis />
                <CropReadiness />
            </div>
            {/* TODO: Implementar*/}
            <WeatherPlanning />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <HarvestPredictions />
            <AIReportAnalysis />
            </div>
        </div>
    )
}