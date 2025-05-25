import { create } from "zustand";
import { MarketTransaction } from "../schemas/Transaction/transaction";
import { getTransactions, createTransaction, updateTransactionStatus } from "../services/transactionService";

interface MarketState {
  transactions: MarketTransaction[];
  loading: boolean;
  error: string | null;
  fetchTransactions: () => Promise<void>;
  addTransaction: (transaction: Omit<MarketTransaction, "id">) => Promise<void>;
  changeTransactionStatus: (
    transactionId: string,
    status: "Completed" | "Failed" | "Discovered"
  ) => Promise<void>;
}

export const useMarketStore = create<MarketState>((set) => ({
  transactions: [],
  loading: false,
  error: null,
  fetchTransactions: async () => {
    set({ loading: true });
    try {
      const transactions = await getTransactions();
      set({ transactions, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch transactions", loading: false });
    }
  },
  addTransaction: async (transaction) => {
    set({ loading: true });
    try {
      const newTransaction = await createTransaction(transaction);
      set((state) => ({
        transactions: [...state.transactions, newTransaction],
        loading: false,
      }));
    } catch (error) {
      set({ error: "Failed to add transaction", loading: false });
    }
  },
  changeTransactionStatus: async (transactionId, status) => {
    set({ loading: true });
    try {
      await updateTransactionStatus(transactionId, status);
      set((state) => ({
        transactions: state.transactions.map((t) =>
          t.id === transactionId ? { ...t, status } : t
        ),
        loading: false,
      }));
    } catch (error) {
      set({ error: "Failed to update transaction", loading: false });
    }
  },
}));