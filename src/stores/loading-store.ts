import { create } from "zustand";

interface LoadingState {
  isLoading: boolean;
  setLoading: (value: boolean) => void;
}

export const useLoadingState = create<LoadingState>((set) => ({
  isLoading: true,
  setLoading: (value) => {
    set(() => ({
      isLoading: value
    }));
  }
}));
