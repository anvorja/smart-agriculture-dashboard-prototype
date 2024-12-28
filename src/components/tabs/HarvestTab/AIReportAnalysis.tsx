'use client'

import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/shared/SectionHeader'
import {
    Brain,
    LineChart as LineChartIcon,
    Lightbulb,
    AlertTriangle,
    CheckCircle2,
} from 'lucide-react'
import {aiAnalysis} from "@/data/harvestMockData";

export const AIReportAnalysis = () => {
    return (
        <Card className="overflow-hidden">
            <SectionHeader
                title="Análisis Inteligente"
                subtitle="Reporte y recomendaciones de IA"
            />
            <div className="p-4 sm:p-6 space-y-6">
                {/* Puntuación general e indicadores clave */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div className="col-span-1 sm:col-span-2 bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                        <div className="flex items-center gap-3">
                            <Brain className="w-8 h-8 text-emerald-600" />
                            <div>
                                <p className="text-sm text-emerald-600">Evaluación General</p>
                                <p className="text-3xl font-bold text-emerald-700">{aiAnalysis.overallScore}/100</p>
                            </div>
                        </div>
                        <p className="mt-2 text-sm text-emerald-600">
                            Confianza del análisis: {aiAnalysis.confidence}%
                        </p>
                    </div>

                    {/* Métricas clave */}
                    {aiAnalysis.keyMetrics.map((metric) => {
                        const MetricIcon = metric.icon
                        return (
                            <div
                                key={metric.name}
                                className={`p-4 rounded-lg border ${
                                    metric.trend === 'optimal' ? 'bg-emerald-50 border-emerald-100' :
                                        metric.trend === 'good' ? 'bg-blue-50 border-blue-100' :
                                            'bg-yellow-50 border-yellow-100'
                                }`}
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <MetricIcon className={`w-4 h-4 ${
                                        metric.trend === 'optimal' ? 'text-emerald-600' :
                                            metric.trend === 'good' ? 'text-blue-600' :
                                                'text-yellow-600'
                                    }`} />
                                    <span className="text-sm text-gray-600">{metric.name}</span>
                                </div>
                                <span className="text-lg font-semibold">{metric.value}</span>
                            </div>
                        )
                    })}
                </div>

                {/* Insights y hallazgos */}
                <div>
                    <h3 className="font-medium text-gray-700 mb-4 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-emerald-600" />
                        Insights del Análisis
                    </h3>
                    <div className="space-y-3">
                        {aiAnalysis.insights.map((insight) => (
                            <div
                                key={insight.category}
                                className={`p-4 rounded-lg border ${
                                    insight.status === 'positive' ? 'bg-emerald-50 border-emerald-100' :
                                        'bg-yellow-50 border-yellow-100'
                                }`}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        {insight.status === 'positive' ? (
                                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                        ) : (
                                            <AlertTriangle className="w-4 h-4 text-yellow-600" />
                                        )}
                                        <span className="font-medium">{insight.category}</span>
                                    </div>
                                    <span className={`text-xs px-2 py-1 rounded-full ${
                                        insight.impact === 'alto' ? 'bg-red-100 text-red-700' :
                                            'bg-blue-100 text-blue-700'
                                    }`}>
                                        Impacto {insight.impact}
                                    </span>
                                </div>
                                <p className={`text-sm ${
                                    insight.status === 'positive' ? 'text-emerald-700' : 'text-yellow-700'
                                }`}>
                                    {insight.message}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recomendaciones */}
                <div>
                    <h3 className="font-medium text-gray-700 mb-4 flex items-center gap-2">
                        <Brain className="w-5 h-5 text-emerald-600" />
                        Recomendaciones IA
                    </h3>
                    <div className="space-y-3">
                        {aiAnalysis.recommendations.map((rec, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-lg border border-gray-200"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-medium text-gray-700">{rec.action}</span>
                                    <span className={`text-xs px-2 py-1 rounded-full ${
                                        rec.priority === 'alta' ? 'bg-red-100 text-red-700' :
                                            'bg-yellow-100 text-yellow-700'
                                    }`}>
                                        Prioridad {rec.priority}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Razón: {rec.rationale}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Advertencias y consideraciones */}
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                        <div className="flex items-center gap-2 mb-3">
                            <AlertTriangle className="w-4 h-4 text-yellow-600" />
                            <h4 className="font-medium text-yellow-800">Puntos de Atención</h4>
                        </div>
                        <ul className="space-y-2">
                            <li className="text-sm text-yellow-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-yellow-400" />
                                Monitorear condiciones climáticas continuamente
                            </li>
                            <li className="text-sm text-yellow-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-yellow-400" />
                                Ventana de cosecha limitada - planificar recursos
                            </li>
                        </ul>
                    </div>

                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                        <div className="flex items-center gap-2 mb-3">
                            <LineChartIcon className="w-4 h-4 text-emerald-600" />
                            <h4 className="font-medium text-emerald-800">Proyección de Resultados</h4>
                        </div>
                        <ul className="space-y-2">
                            <li className="text-sm text-emerald-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                Rendimiento esperado superior al promedio
                            </li>
                            <li className="text-sm text-emerald-700 flex items-start gap-2">
                                <span className="block w-1 h-1 mt-2 rounded-full bg-emerald-400" />
                                Alta probabilidad de calidad premium
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Card>
    )
}