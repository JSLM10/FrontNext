import { create } from "zustand";

interface AppState {
  darkMode: boolean;
  toggleDarkMode: () => void;
  currentUser: any;
  setCurrentUser: (user: any) => void;
}

export const useAppStore = create<AppState>((set) => ({
  darkMode: true, 
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  currentUser: null,
  setCurrentUser: (user) => set({ currentUser: user }),
}));