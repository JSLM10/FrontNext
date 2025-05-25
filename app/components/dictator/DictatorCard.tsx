"use client";

import { Dictator } from "../../schemas/Dictator/dictator";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DictatorCardProps {
  dictator: Dictator;
}

export function DictatorCard({ dictator }: DictatorCardProps) {
  return (
    <Card className="bg-gray-800 border-red-600 text-white">
      <CardHeader>
        <CardTitle className="text-blood">{dictator.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-400">Territory</p>
            <p>{dictator.territory}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Slaves</p>
            <Badge variant="outline" className="text-blood border-blood">
              {dictator.number_of_slaves}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}