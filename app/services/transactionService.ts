import api from "../api/apiClient";
import { Transaction } from "../schemas/Transaction/transaction";

export const getTransactions = async (): Promise<Transaction[]> => {
  const response = await api.get("/transactions");
  return response.data;
};

export const createTransaction = async (
  transaction: Omit<Transaction, "id">
) => {
  const response = await api.post("/transactions", transaction);
  return response.data;
};

export const updateTransactionStatus = async (
  transactionId: string,
  status: "Completed" | "Failed" | "Discovered"
) => {
  const response = await api.patch(`transactions/${transactionId}`, {
    status,
  });
  return response.data;
};