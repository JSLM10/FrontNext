"use client";

import { useDictatorStore } from "../../stores/dictatorStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DictatorStats() {
  const { dictators } = useDictatorStore();

  const totalDictators = dictators.length;
  const totalSlaves = dictators.reduce((sum, d) => sum + d.number_of_slaves, 0);
  const averageSlaves = totalDictators > 0 ? Math.round(totalSlaves / totalDictators) : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="border-red-600 bg-gray-900">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-white">Dictadores Totales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-red-400">{totalDictators}</div>
        </CardContent>
      </Card>
      <Card className="border-red-600 bg-gray-900">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-white">Esclavos Controlados</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-red-400">{totalSlaves}</div>
        </CardContent>
      </Card>
      <Card className="border-red-600 bg-gray-900">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-white">Promedio por Dictador</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-red-400">{averageSlaves}</div>
        </CardContent>
      </Card>
    </div>
  );
}