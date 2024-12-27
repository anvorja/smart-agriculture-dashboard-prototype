// src/components/tabs/AnalysisTab/DataCollection.tsx
import { Card } from '@/components/ui/card';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AlertTriangle, CheckCircle2, Clock } from 'lucide-react';

export const DataCollection = () => {
    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Recolección de Datos"
                subtitle="Estado de sensores y alertas"
            />
            <div className="p-4 space-y-4">
                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                            <span className="font-medium text-emerald-800">CropX SV4</span>
                        </div>
                        <span className="text-emerald-600 text-sm font-medium">Activo</span>
                    </div>
                    <p className="text-sm text-emerald-600 mt-1 ml-7">
                        Última sincronización: hace 5 minutos
                    </p>
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-blue-600" />
                            <span className="font-medium text-blue-800">TPY-6A</span>
                        </div>
                        <span className="text-blue-600 text-sm font-medium">En espera</span>
                    </div>
                    <p className="text-sm text-blue-600 mt-1 ml-7">
                        Próxima medición: en 2 horas
                    </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
                    <div className="flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-yellow-600" />
                        <span className="text-sm text-yellow-700">
              Calibración recomendada para sensor de pH
            </span>
                    </div>
                </div>
            </div>
        </Card>
    );
};