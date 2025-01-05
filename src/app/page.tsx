import { Tabs, TabsContent } from '@/components/ui/tabs'
import { Navigation } from '@/components/shared/Navigation'
import { Header } from '@/components/layout/Header'
import { DashboardView } from '@/components/tabs/DashboardTab/DashboardView'
import { AnalysisView } from '@/components/tabs/AnalysisTab/AnalysisView'
import {PreparationView} from "@/components/tabs/PreparationTab/PreparationVIew";
import {PlantingView} from "@/components/tabs/PlantingTab/PlantingView";
import {NutritionView} from "@/components/tabs/NutritionTab/NutritionView";
import {IrrigationView} from "@/components/tabs/IrrigationTab/IrrigationView";
import {HarvestView} from "@/components/tabs/HarvestTab/HarvestView";

export default function Home() {
  return (
      // <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30">
      //   <div className="max-w-7xl mx-auto p-6 space-y-6">
      //     <Header/>
      <main className="min-h-screen bg-gradient-to-br from-emerald-50/80 via-white to-emerald-50/50 p-6">
          {/*<div className="max-w-7xl mx-auto p-6 space-y-6">*/}
          <div className="max-w-7xl mx-auto p-4 sm:p-6 space-y-6">
              <Header/>

              <Tabs defaultValue="dashboard" className="w-full">
                  <div className="sticky top-0 z-10 -mx-4 bg-white/50 backdrop-blur-sm">
                      <Navigation/>
                  </div>

                  <div className="px-4 sm:px-6 mt-6">
                      <TabsContent value="dashboard" className="mt-0">
                          <DashboardView/>
                      </TabsContent>

                      <TabsContent value="analysis" className="mt-0">
                          {/* Contenido de la pestaña Análisis */}
                          <AnalysisView/>
                      </TabsContent>

                      <TabsContent value="preparation">
                          {/* Contenido de la pestaña Preparación */}
                          <PreparationView/>
                      </TabsContent>

                      <TabsContent value="planting">
                          {/* Contenido de la pestaña Siembra */}
                          <PlantingView/>
                      </TabsContent>

                      <TabsContent value="nutrition">
                          {/* Contenido de la pestaña Nutrición */}
                          <NutritionView/>
                      </TabsContent>

                      <TabsContent value="irrigation">
                          {/* Contenido de la pestaña Riego */}
                          <IrrigationView/>
                      </TabsContent>

                          <TabsContent value="harvest">
                              {/* Contenido de la pestaña Cosecha */}
                              <HarvestView/>
                      </TabsContent>
                  </div>
              </Tabs>
          </div>
      </main>
  )
}

