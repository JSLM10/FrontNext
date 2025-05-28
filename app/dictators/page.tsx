"use client";

import { DictatorList } from "../components/dictator/DictatorList";
import { AddDictatorForm } from "../components/dictator/AddDictatorForm";
import { DictatorStats } from "../components/dictator/DictatorStats";
import { useDictatorStore } from "../stores/dictatorStore";
import { useEffect } from "react";

export default function DictatorsPage() {
  const { fetchDictators } = useDictatorStore();

  useEffect(() => {
    fetchDictators();
  }, [fetchDictators]);

  return (
    <main className="min-h-screen bg-black py-8 px-4 sm:px-6 lg:px-8 space-y-8">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-400">
              RED DE DICTADORES
            </span>
          </h1>
          <p className="text-white mt-2">Administra los aliados regionales de Carolina</p>
        </div>
        
      </div>

     
      <div className="text-white">
        <DictatorStats />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Dictator List */}
        <div className="lg:col-span-2">
          <div className="bg-gray-900/80 p-6 rounded-xl border border-red-600 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-red-500">DICTADORES REGIONALES</h2>
              <span className="text-sm px-3 py-1 bg-red-900/50 text-white rounded-full border border-red-600">
                {useDictatorStore.getState().dictators.length} REGISTROS
              </span>
            </div>
            <DictatorList />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          
          <div className="bg-gray-900/80 p-6 rounded-xl border border-red-600 shadow-lg">
            <h2 className="text-2xl font-bold text-red-500 mb-6">AÑADIR DICTADOR</h2>
            <AddDictatorForm />
          </div>


        </div>
      </div>

      
      <div className="text-center text-sm text-gray-400 mt-12">
        <p>La deslealtad será castigada con la máxima severidad</p>
      </div>
    </main>
  );
}