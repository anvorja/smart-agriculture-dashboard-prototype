// src/components/layout/Header.tsx
import {MapPin} from 'lucide-react'

export const Header = () => {
    return (
        <div className="flex items-center justify-between pb-6 border-b border-emerald-100">
            <div>
                <h1 className="text-3xl font-bold text-emerald-700">
                    Agricultura de Precisión
                </h1>
                <p className="text-emerald-600/80">
                    Sistema de Monitoreo y Control
                </p>
            </div>
            <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Valle del Cauca</span>
            </div>
        </div>
    );
};