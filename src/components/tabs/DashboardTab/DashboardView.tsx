// src/components/DashboardTab/DashboardView.tsx
import { DashboardCard } from './DashboardCard'
import { StatusIndicator } from './StatusIndicator'
import { AlertItem } from './AlertItem'
import { TaskItem } from './TaskItem'
import { Droplet, ThermometerSun, Wind } from 'lucide-react'

export const DashboardView = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <DashboardCard 
        title="Estado del Cultivo" 
        description="Resumen general"
        className="bg-gradient-to-br from-white to-emerald-50"
      >
        <div className="space-y-3">
          <StatusIndicator 
            icon={Droplet} 
            label="Humedad del suelo" 
            value="65%" 
          />
          <StatusIndicator 
            icon={ThermometerSun} 
            label="pH del suelo" 
            value="6.5" 
          />
          <StatusIndicator 
            icon={Wind} 
            label="Temperatura" 
            value="24°C" 
          />
        </div>
      </DashboardCard>

      <DashboardCard 
        title="Alertas Activas" 
        description="Requieren atención"
      >
        <div className="space-y-3">
          <AlertItem 
            message="Nivel bajo de nitrógeno en sector A3" 
            type="error" 
          />
          <AlertItem 
            message="Riego programado en 2 horas" 
            type="warning" 
          />
        </div>
      </DashboardCard>

      <DashboardCard 
        title="Próximas Tareas" 
        description="Calendario de actividades"
      >
        <div className="space-y-2">
          <TaskItem 
            task="Fertilización" 
            date="Mañana" 
          />
          <TaskItem 
            task="Control de plagas" 
            date="En 3 días" 
          />
        </div>
      </DashboardCard>
    </div>
  )
}
