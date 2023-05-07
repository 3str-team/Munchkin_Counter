import { create } from 'zustand';
import { saveInStorage } from '../middleware/storageMiddleware';
import { storageConfig } from '../config/storageConfig';

const genderAlias = storageConfig.genderAlias;

const initialCache = localStorage[genderAlias];

export const useGenderStore = create(
	saveInStorage(
		set => ({
			isMale: initialCache ? JSON.parse(initialCache) : true,
			changeGender: () => set(store => ({ isMale: !store.isMale })),
		}),
		{
			alias: genderAlias,
		}
	)
);
