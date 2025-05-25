"use client";

import { useMarketStore } from "../../stores/transactionStore";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function TransactionLog() {
  const { transactions } = useMarketStore();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-green-400";
      case "Failed":
        return "text-red-400";
      case "Discovered":
        return "text-yellow-400";
      default:
        return "text-white";
    }
  };

  return (
    <div className="border border-red-600 rounded-lg overflow-hidden">
      <Table>
        <TableHeader className="bg-gray-800">
          <TableRow className="hover:bg-gray-800">
            <TableHead className="text-red-400">Comprador</TableHead>
            <TableHead className="text-red-400">Vendedor</TableHead>
            <TableHead className="text-red-400">Artículo</TableHead>
            <TableHead className="text-red-400">Monto</TableHead>
            <TableHead className="text-red-400">Estado</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-gray-900">
          {transactions.map((transaction) => (
            <TableRow key={transaction.id} className="hover:bg-gray-800/50 border-red-600/50">
              <TableCell className="font-medium text-white">
                #{transaction.buyer_id.substring(0, 6)}...
              </TableCell>
              <TableCell className="text-white">
                #{transaction.seller_id.substring(0, 6)}...
              </TableCell>
              <TableCell className="text-white">{transaction.item}</TableCell>
              <TableCell className="text-white">
                ${transaction.amount.toFixed(2)}
              </TableCell>
              <TableCell className={getStatusColor(transaction.status)}>
                {transaction.status === "Completed" ? "COMPLETADA" : 
                 transaction.status === "Failed" ? "FALLIDA" : "DESCUBIERTA"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}