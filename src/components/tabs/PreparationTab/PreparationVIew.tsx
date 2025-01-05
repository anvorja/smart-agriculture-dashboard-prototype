// src/components/tabs/PreparationTab/PreparationView.tsx
'use client'

import { SoilStatus } from './SoilStatus'
import { FertilizationRequirements } from './FertilizationRequirements'
import { PreparationPlan } from './PreparationPlan'

export const PreparationView = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <SoilStatus />
            <FertilizationRequirements />
            <PreparationPlan />
        </div>
    )
}