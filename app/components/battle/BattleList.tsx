"use client";

import { useBattleStore } from "../../stores/battleStore";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skull, Sword } from "lucide-react";

export function BattleList() {
  const { battles } = useBattleStore();

  return (
    <div className="border border-red-600 rounded-lg overflow-hidden">
      <Table>
        <TableHeader className="bg-gray-800">
          <TableRow className="hover:bg-gray-800">
            <TableHead className="text-red-400">Combate</TableHead>
            <TableHead className="text-red-400">Fecha</TableHead>
            <TableHead className="text-red-400">Resultado</TableHead>
            <TableHead className="text-red-400">Tipo</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-gray-900">
          {battles.map((battle) => (
            <TableRow key={battle.id} className="hover:bg-gray-800/50 border-red-600/50">
              <TableCell className="font-medium text-white">
                <div className="flex items-center gap-2">
                  <Sword className="h-4 w-4 text-red-400" />
                  #{battle.contestant_1_id.substring(0, 5)} vs #{battle.contestant_2_id.substring(0, 5)}
                </div>
              </TableCell>
              <TableCell className="text-white">
                {new Date(battle.date).toLocaleDateString()}
              </TableCell>
              <TableCell className="text-white">
                {battle.winner_id ? (
                  <span className="px-2 py-1 bg-green-900/30 text-green-400 rounded-full border border-green-600">
                    Ganador: #{battle.winner_id.substring(0, 5)}
                  </span>
                ) : (
                  <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded-full border border-gray-600">
                    Pendiente
                  </span>
                )}
              </TableCell>
              <TableCell>
                {battle.death_occurred ? (
                  <div className="flex items-center gap-2 text-red-400">
                    <Skull className="h-4 w-4" />
                    <span>Mortal</span>
                  </div>
                ) : (
                  <span className="text-yellow-400">No mortal</span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}