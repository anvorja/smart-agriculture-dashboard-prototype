// src/components/DashboardTab/StatusIndicator.tsx
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import {StatusIndicatorProps} from "@/types/components";

export const StatusIndicator = ({
                                    icon: Icon,
                                    label,
                                    value,
                                    color = "text-emerald-600"
                                }: StatusIndicatorProps) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div className="flex items-center justify-between p-4 rounded-lg
                         bg-emerald-50/50 hover:bg-emerald-50/70
                         transition-all duration-300 cursor-help">
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${color} bg-white/80`}>
                                <Icon className="w-5 h-5" />
                            </div>
                            <div className="space-y-1">
                <span className="text-sm font-medium text-emerald-800">
                  {label}
                </span>
                                <span className="text-lg font-semibold text-emerald-900 block">
                  {value}
                </span>
                            </div>
                        </div>
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Últimas 24 horas de {label.toLowerCase()}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}