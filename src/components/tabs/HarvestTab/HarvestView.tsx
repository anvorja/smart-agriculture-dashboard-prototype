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
import {QualityDistribution} from "@/components/tabs/HarvestTab/QualityDistribution";

export const HarvestView = () => {
    return (
        <div className="space-y-6">
            {/* Primera fila - Vista rápida */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <MaturityStatus/>
                <QualityMetrics/>
                <YieldAnalysis/>
            </div>

            {/* Distribución de calidad */}
            <QualityDistribution/>

            {/* Segunda fila - Análisis de campo */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <OrganicMatterAnalysis/> {/* Análisis a la izquierda */}
                <CropReadiness/> {/* Estado actual a la derecha */}
            </div>

            {/* Tercera fila - Panel de planificación */}
            <WeatherPlanning/> {/* Componente de ancho completo */}

            {/* Cuarta fila - Inteligencia y predicciones */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <HarvestPredictions/> {/* Predicciones a la izquierda */}
                <AIReportAnalysis/> {/* Análisis IA a la derecha */}
            </div>
        </div>
    )
}