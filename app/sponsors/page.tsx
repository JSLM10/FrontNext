"use client";

import { SponsorList } from "../components/sponsor/SponsorList";
import { AddSponsorForm } from "../components/sponsor/AddSponsorForm";
import { SponsorStats } from "../components/sponsor/SponsorStats";
import { useSponsorStore } from "../stores/sponsorStore";
import { useEffect } from "react";

export default function SponsorsPage() {
  const { fetchSponsors } = useSponsorStore();

  useEffect(() => {
    fetchSponsors();
  }, [fetchSponsors]);

  return (
    <main className="min-h-screen bg-black py-8 px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-400">
              PATROCINADORES CORPORATIVOS
            </span>
          </h1>
          <p className="text-white mt-2">Gestión de financiamiento del torneo</p>
        </div>
        <div className="bg-gray-900 px-4 py-2 rounded-lg border border-red-600">
          <span className="font-mono text-white">
            FONDOS: <span className="text-red-500">1.2M</span>
          </span>
        </div>
      </div>

      {/* Stats Section */}
      <div className="text-white">
        <SponsorStats />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sponsor List */}
        <div className="lg:col-span-2">
          <div className="bg-gray-900/80 p-6 rounded-xl border border-red-600 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-red-500">DIRECTORIO DE PATROCINADORES</h2>
              <span className="text-sm px-3 py-1 bg-red-900/50 text-white rounded-full border border-red-600">
                {useSponsorStore.getState().sponsors.length} REGISTROS
              </span>
            </div>
            <SponsorList />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          
          <div className="bg-gray-900/80 p-6 rounded-xl border border-red-600 shadow-lg">
            <h2 className="text-2xl font-bold text-red-500 mb-6">REGISTRAR NUEVO PATROCINADOR</h2>
            <AddSponsorForm />
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-12">
        <p>Los patrocinadores desleales serán convertidos en contendientes</p>
      </div>
    </main>
  );
}