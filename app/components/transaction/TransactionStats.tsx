"use client";

import { useMarketStore } from "../../stores/transactionStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, AlertCircle, CheckCircle, XCircle } from "lucide-react";

export function MarketStats() {
  const { transactions } = useMarketStore();

  const totalTransactions = transactions.length;
  const completedTransactions = transactions.filter(t => t.status === "Completed").length;
  const totalAmount = transactions.reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="border-red-600 bg-gray-900">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-white">
            Transacciones Totales
          </CardTitle>
          <DollarSign className="h-4 w-4 text-red-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">{totalTransactions}</div>
        </CardContent>
      </Card>

      <Card className="border-red-600 bg-gray-900">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-white">
            Transacciones Completadas
          </CardTitle>
          <CheckCircle className="h-4 w-4 text-green-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">{completedTransactions}</div>
        </CardContent>
      </Card>

      <Card className="border-red-600 bg-gray-900">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-white">
            Monto Total ($)
          </CardTitle>
          <AlertCircle className="h-4 w-4 text-yellow-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">${totalAmount.toFixed(2)}</div>
        </CardContent>
      </Card>
    </div>
  );
}