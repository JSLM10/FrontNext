"use client";

import { TransactionLog } from "../components/transaction/Transactionlog";
import { AddTransactionForm } from "../components/transaction/AddTransactionForm";
import { TransactionStats } from "../components/transaction/TransactionStats";
import { useTransactionStore } from "../stores/transactionStore";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function TransactionPage() {
  const { fetchTransactions } = useTransactionStore();

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <main className="min-h-screen bg-black py-8 px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-400">
              MERCADO NEGRO
            </span>
          </h1>
          <p className="text-white mt-2">Transacciones ilegales del torneo</p>
        </div>
        
      </div>

      {/* Stats Section */}
      <div className="text-white">
        <TransactionStats />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-2">
          <div className="bg-gray-900/80 p-6 rounded-xl border border-red-600 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-red-500">HISTORIAL DE TRANSACCIONES</h2>
              <span className="text-sm px-3 py-1 bg-red-900/50 text-white rounded-full border border-red-600">
                {useTransactionStore.getState().transactions.length} REGISTROS
              </span>
            </div>
            <TransactionLog />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Add Transaction Form */}
          <div className="bg-gray-900/80 p-6 rounded-xl border border-red-600 shadow-lg">
            <h2 className="text-2xl font-bold text-red-500 mb-6">NUEVA TRANSACCIÓN</h2>
            <AddTransactionForm />
          </div>

          {/* Transaction Controls */}
          
        </div>
      </div>

     
      <div className="text-center text-sm text-gray-400 mt-12">
        <p>Todas las transacciones son monitoreadas por la guardia de Carolina</p>
      </div>
    </main>
  );
}