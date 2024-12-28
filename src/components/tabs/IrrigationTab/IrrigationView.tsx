// src/components/tabs/IrrigationTab/IrrigationView.tsx
import { SoilMoisture } from './SoilMoisture'
import { IrrigationScheduling } from './IrrigationScheduling'
import { WaterQuality } from './WaterQuality'
import { DetailedWaterAnalysis } from './DetailedWaterAnalysis'
import { WeatherStationAnalysis } from './WeatherStationAnalysis'
import { IrrigationRecommendations } from './IrrigationRecommendations'

export const IrrigationView = () => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <SoilMoisture />
                <IrrigationScheduling />
                <WaterQuality />
            </div>

            <DetailedWaterAnalysis />
            <WeatherStationAnalysis />
            <IrrigationRecommendations />
        </div>
    )
}