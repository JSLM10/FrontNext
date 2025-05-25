"use client";

import { useContestantStore } from "../../stores/contestantStore";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ContestantStats() {
  const { contestants } = useContestantStore();

  const aliveCount = contestants.filter(c => c.status === "Alive").length;
  const deadCount = contestants.filter(c => c.status === "Dead").length;
  const escapedCount = contestants.filter(c => c.status === "Escaped").length;
  const freeCount = contestants.filter(c => c.status === "Free").length;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
      <Card className="border-red-600 bg-gray-900">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-white">Alive</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-400">{aliveCount}</div>
        </CardContent>
      </Card>
      <Card className="border-red-600 bg-gray-900">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-white">Dead</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-red-400">{deadCount}</div>
        </CardContent>
      </Card>
      <Card className="border-red-600 bg-gray-900">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-white">Escaped</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-yellow-400">{escapedCount}</div>
        </CardContent>
      </Card>
      <Card className="border-red-600 bg-gray-900">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-white">Free</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-400">{freeCount}</div>
        </CardContent>
      </Card>
    </div>
  );
}