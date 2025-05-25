"use client";

import { ContestantTable } from "../components/contestant/ContestantTable";
import { AddContestantForm } from "../components/contestant/AddContestantForm";
import { ContestantStats } from "../components/contestant/ContestantStats";
import { useContestantStore } from "../stores/contestantStore";
import { useEffect } from "react";

export default function ContestantsPage() {
  const { fetchContestants } = useContestantStore();

  useEffect(() => {
    fetchContestants();
  }, [fetchContestants]);

  return (
    <main className="min-h-screen bg-black py-8 px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-400">
              GESTIÓN DE CONTENDIENTES
            </span>
          </h1>
          <p className="text-white mt-2">Administra los esclavos del torneo</p>
        </div>
        <div className="bg-gray-900 px-4 py-2 rounded-lg border border-red-600">
          <span className="font-mono text-white">
            STATUS: <span className="text-red-500">ACTIVO</span>
          </span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="text-white">
        <ContestantStats />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-white">
        {/* Contestant Table */}
        <div className="lg:col-span-2">
          <div className="bg-gray-900 p-6 rounded-xl border border-red-600 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-red-500">
                LISTA DE CONTENDIENTES
              </h2>
              <span className="text-sm px-3 py-1 bg-red-900/50 text-white rounded-full border border-red-600">
                {useContestantStore.getState().contestants.length} REGISTROS
              </span>
            </div>
            <div className="border-t border-red-600/30 pt-4">
              <ContestantTable />
            </div>
          </div>
        </div>

        {/* Add Contestant Form */}
        <div className="bg-gray-900 p-6 rounded-xl border border-red-600 shadow-lg">
          <h2 className="text-2xl font-bold text-red-500 mb-6">
            AÑADIR CONTENDIENTE
          </h2>
          <AddContestantForm />
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-sm text-gray-300 mt-12">
        <p>Recuerda: Carolina siempre está vigilando. Cada error será castigado.</p>
      </div>
    </main>
  );
}