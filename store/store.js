import { create } from "zustand";

export const useStore = create((set) => ({
  kartCombos: [],
  updateKartCombos: (combos) => set(() => ({ kartCombos: combos })),
}));
