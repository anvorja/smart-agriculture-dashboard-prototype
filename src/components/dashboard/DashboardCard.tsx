// src/components/dashboard/DashboardCard.tsx
import { DashboardCardProps } from '@/types/components'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {MoreVertical} from "lucide-react";

export const DashboardCard = ({
                                  title,
                                  description,
                                  children,
                                  className = ""
                              }: DashboardCardProps) => {
    return (
        <Card className={`
      bg-emerald-50/50 backdrop-blur-sm
      border-none
      hover:transform hover:-translate-y-1
      transition-all duration-300
      ${className}
    `}>
            <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="text-xl font-semibold text-emerald-800">
                            {title}
                        </CardTitle>
                        {description && (
                            <CardDescription className="text-emerald-600/90">
                                {description}
                            </CardDescription>
                        )}
                    </div>
                    <button className="text-emerald-600 hover:text-emerald-700">
                        <MoreVertical className="w-5 h-5" />
                    </button>
                </div>
            </CardHeader>
            <CardContent>{children}</CardContent>
        </Card>
    );
};