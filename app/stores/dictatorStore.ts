import { create } from "zustand";
import { Dictator } from "../schemas/Dictator/dictator";
import { getDictators, createDictator, assignSlaves } from "../services/dictatorService";

interface DictatorState {
  dictators: Dictator[];
  loading: boolean;
  error: string | null;
  fetchDictators: () => Promise<void>;
  addDictator: (dictator: Omit<Dictator, "id">) => Promise<void>;
  assignSlavesToDictator: (dictatorId: string, count: number) => Promise<void>;
}

export const useDictatorStore = create<DictatorState>((set) => ({
  dictators: [],
  loading: false,
  error: null,

  fetchDictators: async () => {
    set({ loading: true });
    try {
      const dictators = await getDictators();
      set({ dictators, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch dictators", loading: false });
    }
  },

  addDictator: async (dictator) => {
    set({ loading: true });
    try {
      const newDictator = await createDictator(dictator);
      set((state) => ({
        dictators: [...state.dictators, newDictator],
        loading: false,
      }));
    } catch (error) {
      console.error("ERROR EN addDictator:", error);
      set({ error: "Failed to add dictator", loading: false });
    }
  },

  assignSlavesToDictator: async (dictatorId, count) => {
    set({ loading: true });
    try {
      await assignSlaves(dictatorId, count);
      set((state) => ({
        dictators: state.dictators.map((d) =>
          d.id === dictatorId ? { ...d, number_of_slaves: d.number_of_slaves + count } : d
        ),
        loading: false,
      }));
    } catch (error) {
      set({ error: "Failed to assign slaves", loading: false });
    }
  },
}));
