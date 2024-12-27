// src/components/shared/Navigation.tsx

import { TabsList } from '@/components/ui/tabs'
import { TabButton } from './TabButton'
import {
  Activity,
  Database,
  Settings,
  Sprout,
  Leaf,
  CloudRain
} from 'lucide-react'

const navigationItems = [
  { value: 'dashboard', icon: Activity, label: 'Dashboard' },
  { value: 'analysis', icon: Database, label: 'Análisis' },
  { value: 'preparation', icon: Settings, label: 'Preparación' },
  { value: 'planting', icon: Sprout, label: 'Siembra' },
  { value: 'nutrition', icon: Leaf, label: 'Nutrición' },
  { value: 'irrigation', icon: CloudRain, label: 'Riego' },
] as const

export const Navigation = () => {
  return (
      <TabsList className="w-full bg-emerald-50/50 rounded-lg flex flex-wrap gap-0.5 p-0.5">
        {navigationItems.map((item) => (
            <TabButton
                key={item.value}
                value={item.value}
                icon={item.icon}
                className="flex-1 sm:flex-initial"
            >
              {item.label}
            </TabButton>
        ))}
      </TabsList>
  )
}
