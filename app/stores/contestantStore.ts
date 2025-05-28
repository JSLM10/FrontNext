import { create } from "zustand";
import { Contestant } from "../schemas/Contestant/contestant";
import { getContestants, createContestant } from "../services/contestantService";

interface ContestantState {
  contestants: Contestant[];
  loading: boolean;
  error: string | null;
  fetchContestants: () => Promise<void>;
  addContestant: (contestant: Omit<Contestant, "id">) => Promise<void>;
}

export const useContestantStore = create<ContestantState>((set) => ({
  contestants: [],
  loading: false,
  error: null,
  fetchContestants: async () => {
    set({ loading: true });
    try {
      const contestants = await getContestants();
      set({ contestants, loading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : "Failed to fetch contestants", 
        loading: false 
      });
    }
  },
  addContestant: async (contestant) => {
    set({ loading: true });
    try {
      const newContestant = await createContestant(contestant);
      set((state) => ({
        contestants: [...state.contestants, newContestant],
        loading: false,
      }));
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : "Failed to add contestant", 
        loading: false 
      });
    }
  },
}));