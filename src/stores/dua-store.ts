import { create } from "zustand";
import { uuid } from "uuidv4";

import { Dua } from "@/model/dua";

interface DuaState {
  query: string;
  duas: Dua[];
  addDua: (
    title: string,
    originalText: string,
    translation: string,
    explanation: string,
    source: string,
    reference: string,
  ) => void;
  setQuery: (quert: string) => void;
  removeDua: (id: string) => void;
  clear: () => void;
}

export const useStore = create<DuaState>((set) => ({
  query: "",
  duas: [],
  addDua: (title, originalText, translation, explanation, source, reference) => {
    set((state) => ({
      duas: [
        ...state.duas,
        {
          id: uuid(),
          title,
          originalText,
          translation,
          explanation,
          source,
          reference,
        } as Dua,
      ],
    }));
  },
  setQuery: (query: string) => {
    set(() => ({
      query: query
    }))
  },
  removeDua: (id: string) => {
    set((state) => ({
      duas: state.duas.filter((dua) => dua.id !== id),
    }));
  },
  clear: () => {
    set(() => ({
      duas: [],
    }));
  },
}));
