import {SectionHeader} from "@/components/shared/SectionHeader";
import {Card} from "@/components/ui/card";
import {Droplet, ThermometerSun, Wind} from "lucide-react";
import {sensorData} from "@/data/mockData";

const SensorValue = ({label, value}: { label: string; value: string }) => (
    <div className="flex flex-col">
        <span className="text-sm text-gray-500">{label}</span>
        <span className="text-lg font-medium text-emerald-700">{value}</span>
    </div>
);

export const SensorReadings = () => {
    return (
        <Card className="overflow-hidden h-full">
            <SectionHeader
                title="Sensores de Suelo"
                subtitle="Mediciones en diferentes profundidades"
            />
            <div className="p-4 space-y-4">
                {sensorData.map((data) => (
                    <div key={data.depth} className="bg-white rounded-lg border border-emerald-100 overflow-hidden">
                        <div className="px-4 py-2">
              <span className="bg-emerald-600 text-white px-4 py-1 rounded-full text-sm inline-block">
                Profundidad: {data.depth}
              </span>
                        </div>
                        <div className="grid grid-cols-3 gap-4 p-4">
                            <div className="flex items-center gap-3">
                                <Droplet className="w-5 h-5 text-emerald-600"/>
                                <SensorValue label="Humedad" value={data.humidity}/>
                            </div>
                            <div className="flex items-center gap-3">
                                <ThermometerSun className="w-5 h-5 text-emerald-600"/>
                                <SensorValue label="Temperatura" value={data.temperature}/>
                            </div>
                            <div className="flex items-center gap-3">
                                <Wind className="w-5 h-5 text-emerald-600"/>
                                <SensorValue label="Conductividad" value={data.conductivity}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};