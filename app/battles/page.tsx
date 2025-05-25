"use client";

import { BattleList } from "../components/battle/BattleList";
import { AddBattlesForm } from "../components/battle/AddBattlesForm";
import { BattleStats } from "../components/battle/BattleStats";
import { useBattleStore } from "../stores/battleStore";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function BattlesPage() {
  const { fetchBattles } = useBattleStore();

  useEffect(() => {
    fetchBattles();
  }, [fetchBattles]);

  return (
    <main className="min-h-screen bg-black py-8 px-4 sm:px-6 lg:px-8 space-y-8">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-400">
              ARENA DE COMBATE
            </span>
          </h1>
          <p className="text-white mt-2">Gestión de enfrentamientos del torneo</p>
        </div>
        <div className="bg-gray-900 px-4 py-2 rounded-lg border border-red-600">
          <span className="font-mono text-white">
            ESTADO: <span className="text-red-500">ACTIVO</span>
          </span>
        </div>
      </div>

      {/* Stats Section */}
      <div className="text-white">
        <BattleStats />
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
       
        <div className="lg:col-span-2">
          <div className="bg-gray-900/80 p-6 rounded-xl border border-red-600 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-red-500">REGISTRO DE COMBATES</h2>
              <span className="text-sm px-3 py-1 bg-red-900/50 text-white rounded-full border border-red-600">
                {useBattleStore.getState().battles.length} REGISTROS
              </span>
            </div>
            <BattleList />
          </div>
        </div>

        
        <div className="space-y-6">
          
          <div className="bg-gray-900/80 p-6 rounded-xl border border-red-600 shadow-lg">
            <h2 className="text-2xl font-bold text-red-500 mb-6">PROGRAMAR COMBATE</h2>
            <AddBattlesForm />
          </div>

          
        </div>
      </div>

      
      <div className="text-center text-sm text-gray-400 mt-12">
        <p>Todos los combates son supervisados personalmente por Carolina</p>
      </div>
    </main>
  );
}