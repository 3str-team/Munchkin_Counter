import { create } from "zustand";
import { saveInStorage } from "../middleware/storageMiddleware";
import { storageConfig } from "../config/storageConfig";

const sideAlias = storageConfig.sideAlias;

const initialCache = localStorage[sideAlias];

export const useSideCountStore = create(
  saveInStorage(
    (set) => ({
      side: initialCache !== undefined ? JSON.parse(initialCache) : 0,
      setCount: (side) => set(() => ({ side })),
      resetCount: () => set(() => ({ side: 0 })),
    }),
    {
      alias: sideAlias,
    }
  )
);
