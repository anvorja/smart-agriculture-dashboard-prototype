export interface HarvestMetrics {
    maturityIndex: number;
    moistureLevel: number;
    grainQuality: number;
    estimatedYield: number;
}

export interface OrganicMatterReading {
    date: string;
    chlorophyll: number;
    nitrogen: number;
    biomass: number;
    leafArea: number;
    soilMoisture: number;
}

export interface YieldEstimate {
    zone: string;
    expected: number;
    actual: number;
    unit: string;
    variance: number;
}

export interface MaturityIndicator {
    parameter: string;
    value: number;
    status: 'optimal' | 'warning' | 'critical';
    trend: 'up' | 'down' | 'stable';
}

export interface HarvestPlanning {
    estimatedDate: string;
    weatherForecast: {
        condition: string;
        probability: number;
    };
    readiness: number;
    recommendedWindow: {
        start: string;
        end: string;
    };
}

export interface QualityMetric {
    metric: string;
    value: number;
    target: number;
    unit: string;
    status: 'good' | 'warning' | 'critical';
}

export interface HistoricalYield {
    period: string;
    yield: number;
    target: number;
}

export interface QualityDataPoint {
    name: string
    value: number
    status: 'good' | 'warning' | 'critical'
    percentage: string
}
