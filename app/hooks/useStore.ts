import { create } from "zustand";

interface AppState {
  darkMode: boolean;
  toggleDarkMode: () => void;
  currentUser: unknown;
  setCurrentUser: (user: unknown) => void;
}

export const useAppStore = create<AppState>((set) => ({
  darkMode: true, // Modo oscuro por defecto
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  currentUser: null,
  setCurrentUser: (user) => set({ currentUser: user }),
}));