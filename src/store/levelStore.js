import { create } from 'zustand';
import { saveInStorage } from '../middleware/storageMiddleware';
import { storageConfig } from '../config/storageConfig';

const levelAlias = storageConfig.levelAlias;

const initialCache = localStorage[levelAlias];

export const useLevelStore = create(
	saveInStorage(
		set => ({
			level: initialCache ? JSON.parse(initialCache) : 1,
			incrementLevel: () => set(state => ({ level: state.level + 1 })),
			decrementLevel: () =>
				set(state => ({ level: Math.max(1, state.level - 1) })),
			resetLevel: () => set(state => ({ level: 1 })),
		}),
		{
			alias: levelAlias,
		}
	)
);
