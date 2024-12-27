// src/components/DashboardTab/AlertItem.tsx
import { AlertTriangle } from 'lucide-react'
import { AlertItemProps } from '@/types/components'


const colors = {
    error: "bg-red-50 border-red-200 text-red-700",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-700",
    info: "bg-blue-50 border-blue-200 text-blue-700"
} as const;

export const AlertItem = ({
                              message,
                              type = 'warning'
                          }: AlertItemProps) => {
    return (
        <div className={`p-4 rounded-lg border shadow-sm ${colors[type]} flex items-center gap-3`}>
            <AlertTriangle className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium">{message}</span>
        </div>
    );
};