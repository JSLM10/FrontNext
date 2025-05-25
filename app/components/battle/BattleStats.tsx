"use client";

import { useBattleStore } from "../../stores/battleStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function BattleStats() {
  const { battles } = useBattleStore();

  const totalBattles = battles.length;
  const fatalBattles = battles.filter(b => b.death_occurred).length;
  const completedBattles = battles.filter(b => b.winner_id !== null).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="border-rust">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Total Battles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalBattles}</div>
        </CardContent>
      </Card>
      <Card className="border-rust">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Fatal Battles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-red-500">{fatalBattles}</div>
        </CardContent>
      </Card>
      <Card className="border-rust">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Completed</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-500">{completedBattles}</div>
        </CardContent>
      </Card>
    </div>
  );
}