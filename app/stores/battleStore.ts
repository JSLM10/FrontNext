import { create } from "zustand";
import { Battle } from "../schemas/Battle/battle";
import { getBattles, createBattle, scheduleBattle } from "../services/battleService";

interface BattleState {
  battles: Battle[];
  loading: boolean;
  error: string | null;
  fetchBattles: () => Promise<void>;
  addBattle: (battle: Omit<Battle, "id">) => Promise<void>;
  scheduleNewBattle: (contestant1Id: string, contestant2Id: string, date: string) => Promise<void>;
}

export const useBattleStore = create<BattleState>((set) => ({
  battles: [],
  loading: false,
  error: null,
  fetchBattles: async () => {
    set({ loading: true });
    try {
      const battles = await getBattles();
      set({ battles, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch battles", loading: false });
    }
  },
  addBattle: async (battle) => {
    set({ loading: true });
    try {
      const newBattle = await createBattle(battle);
      set((state) => ({
        battles: [...state.battles, newBattle],
        loading: false,
      }));
    } catch (error) {
      set({ error: "Failed to add battle", loading: false });
    }
  },
  scheduleNewBattle: async (contestant1Id, contestant2Id, date) => {
    set({ loading: true });
    try {
      const newBattle = await scheduleBattle(contestant1Id, contestant2Id, date);
      set((state) => ({
        battles: [...state.battles, newBattle],
        loading: false,
      }));
    } catch (error) {
      set({ error: "Failed to schedule battle", loading: false });
    }
  },
}));