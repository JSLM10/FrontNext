"use client";

import { useSponsorStore } from "../../stores/sponsorStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Package, Shield } from "lucide-react";

export function SponsorStats() {
  const { sponsors } = useSponsorStore();

  const totalSponsors = sponsors.length;
  const totalDonations = sponsors.reduce((sum, s) => sum + s.donated_items.split(',').length, 0);
  const averageDonations = totalSponsors > 0 ? Math.round(totalDonations / totalSponsors) : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="border-red-600 bg-gray-900">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-white">
            Patrocinadores Totales
          </CardTitle>
          <Shield className="h-4 w-4 text-red-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">{totalSponsors}</div>
        </CardContent>
      </Card>

      <Card className="border-red-600 bg-gray-900">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-white">
            Donaciones Totales
          </CardTitle>
          <Package className="h-4 w-4 text-red-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">{totalDonations}</div>
        </CardContent>
      </Card>

      <Card className="border-red-600 bg-gray-900">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-white">
            Promedio por Patrocinador
          </CardTitle>
          <DollarSign className="h-4 w-4 text-red-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">{averageDonations}</div>
        </CardContent>
      </Card>
    </div>
  );
}