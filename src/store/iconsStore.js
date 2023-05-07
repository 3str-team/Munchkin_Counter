import { create } from 'zustand';
import { saveInStorage } from '../middleware/storageMiddleware';
import { storageConfig } from '../config/storageConfig';

const iconsAlias = storageConfig.iconsAlias;

const initialCache = localStorage[iconsAlias];

export const useIconsStore = create(
	saveInStorage(
		set => ({
			icons: initialCache
				? JSON.parse(initialCache)
				: { type: 1, male: 'bx bx-male', female: 'bx bx-female' },
			switchIcons: () =>
				set(store => {
					if (store.icons.type === 1) {
						return {
							icons: {
								type: 2,
								male: 'bx bx-male-sign',
								female: 'bx bx-female-sign',
							},
						};
					} else {
						return {
							icons: { type: 1, male: 'bx bx-male', female: 'bx bx-female' },
						};
					}
				}),
		}),
		{
			alias: iconsAlias,
		}
	)
);
