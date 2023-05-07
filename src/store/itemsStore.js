import { create } from 'zustand';
import { saveInStorage } from '../middleware/storageMiddleware';
import { storageConfig } from '../config/storageConfig';

const itemsAlias = storageConfig.itemsAlias;

const initialCache = localStorage[itemsAlias];

export const useItemsStore = create(
	saveInStorage(
		set => ({
			items: initialCache ? JSON.parse(initialCache) : 0,
			incrementItems: () => set(state => ({ items: state.items + 1 })),
			decrementItems: () => set(state => ({ items: state.items - 1 })),
			resetItems: () => set(state => ({ items: 0 })),
		}),
		{
			alias: itemsAlias,
		}
	)
);
