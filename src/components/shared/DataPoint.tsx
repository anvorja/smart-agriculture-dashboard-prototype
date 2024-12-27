// src/components/shared/DataPoint.tsx
import { LucideIcon } from "lucide-react";

interface DataPointProps {
    icon: LucideIcon;
    label: string;
    value: string;
}

export const DataPoint = ({
                              icon: Icon,
                              label,
                              value
                          }: DataPointProps) => (
    <div className="flex items-center gap-2">
        <div className="p-2 bg-emerald-50 rounded-lg">
            <Icon className="w-4 h-4 text-emerald-600" />
        </div>
        <div>
            <p className="text-sm text-gray-500">{label}</p>
            <p className="font-medium text-gray-900">{value}</p>
        </div>
    </div>
);