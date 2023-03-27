import { create } from "zustand";

interface FiltersState {
  perPage: number;
  setPerPage: (perPage: number) => void;
  page: number;
  setPage: (page: number) => void;
  query: string | undefined;
  setQuery: (query: string | undefined) => void;
  type: string;
  setType: (type: string) => void;
  language: string;
  setLanguage: (language: string) => void;
  direction: string;
  setDirection: (direction: string) => void;
  sort: string;
  setSort: (direction: string) => void;
}

export const useFiltersStore = create<FiltersState>((set) => ({
  perPage: 30,
  setPerPage: (perPage) => set({ perPage }),
  page: 1,
  setPage: (page) => set({ page }),
  query: undefined,
  setQuery: (query) => set({ query }),
  type: "all",
  setType: (type) => set({ type }),
  language: "all",
  setLanguage: (language) => set({ language }),
  direction: "desc",
  setDirection: (direction) => set({ direction }),
  sort: "updated",
  setSort: (sort) => set({ sort }),
}));
