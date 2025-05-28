import { create } from "zustand";
import { Battle } from "../schemas/Battle/battle";
import { getBattles, createBattle, scheduleBattle } from "../services/battleService";

interface BattleState {
  battles: Battle[];
  loading: boolean;
  error: string | null;
  fetchBattles: () => Promise<void>;
  addBattle: (battle: Omit<Battle, "id">) => Promise<void>;
  scheduleNewBattle: (contestant1Id: string, contestant2Id: string, date: Date) => Promise<void>;
  clearError: () => void;
}

export const useBattleStore = create<BattleState>((set) => ({
  battles: [],
  loading: false,
  error: null,
  
  fetchBattles: async () => {
    set({ loading: true, error: null });
    try {
      const battles = await getBattles();
      set({ battles, loading: false });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to fetch battles";
      set({ error: errorMessage, loading: false });
      throw error; 
    }
  },
  
  addBattle: async (battle) => {
    set({ loading: true, error: null });
    try {
      const newBattle = await createBattle(battle);
      set((state) => ({
        battles: [...state.battles, newBattle],
        loading: false,
      }));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to add battle";
      set({ error: errorMessage, loading: false });
      throw error;
    }
  },
  
  scheduleNewBattle: async (contestant1Id, contestant2Id, date) => {
    set({ loading: true, error: null });
    try {
      const newBattle = await scheduleBattle(contestant1Id, contestant2Id, date);
      set((state) => ({
        battles: [...state.battles, newBattle],
        loading: false,
      }));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to schedule battle";
      set({ error: errorMessage, loading: false });
      throw error;
    }
  },
  
  clearError: () => set({ error: null }),
}));