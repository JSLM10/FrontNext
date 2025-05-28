'use client'

import { ContestantTable } from "../components/contestant/ContestantTable";
import { BattleList } from "../components/battle/BattleList";
import { DictatorCard } from "../components/dictator/DictatorCard";
import { SponsorList } from "../components/sponsor/SponsorList";
import { TransactionLog } from "../components/transaction/Transactionlog";
import { useDictatorStore } from "../stores/dictatorStore";

export default function Dashboard() {
  const { dictators } = useDictatorStore();

  return (
    <main className="min-h-screen bg-black py-8 px-4 sm:px-6 lg:px-8 space-y-10">
      
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-400">
            LUCHA MUERE
          </span>
        </h1>
        <p className="text-gray-300">Panel de Control del Torneo</p>
      </div>

      {/* Sección de Dictadores */}
      <section className="bg-gray-900/80 p-6 rounded-xl border border-red-600 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-red-500">DICTADORES DESTACADOS</h2>
          <span className="text-sm px-3 py-1 bg-red-900/50 text-white rounded-full border border-red-600">
            {dictators.length} REGISTROS
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dictators.slice(0, 3).map((dictator) => (
            <DictatorCard key={dictator.id} dictator={dictator} />
          ))}
        </div>
      </section>

      {/* Sección de Combates */}
      <section className="bg-gray-900/80 p-6 rounded-xl border border-red-600 shadow-lg">
        <h2 className="text-2xl font-bold text-red-500 mb-6">COMBATES RECIENTES</h2>
        <BattleList />
      </section>

      {/* Sección de Contendientes */}
      <section className="bg-gray-900/80 p-6 rounded-xl border border-red-600 shadow-lg">
        <h2 className="text-2xl font-bold text-red-500 mb-6">LISTA DE CONTENDIENTES</h2>
        <ContestantTable />
      </section>

      {/* Sección de Patrocinadores */}
      <section className="bg-gray-900/80 p-6 rounded-xl border border-red-600 shadow-lg">
        <h2 className="text-2xl font-bold text-red-500 mb-6">PATROCINADORES</h2>
        <SponsorList />
      </section>

      {/* Sección de Mercado Negro */}
      <section className="bg-gray-900/80 p-6 rounded-xl border border-red-600 shadow-lg">
        <h2 className="text-2xl font-bold text-red-500 mb-6">TRANSC. MERCADO NEGRO</h2>
        <TransactionLog />
      </section>

      
      <div className="text-center text-sm text-gray-400 mt-12">
        <p>Sistema de gestión del torneo LUCHA MUERE - Todos los derechos pertenecen a Carolina la Conquistadora</p>
      </div>
    </main>
  );
}