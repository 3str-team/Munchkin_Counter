import { useCallback, useEffect, useState } from 'react';

export const useStorageState = (initialValue = null, alias) => {
	const [value, setValue] = useState(initialValue);

	const setLocalStorage = useCallback(
		newValue => {
			localStorage.setItem(alias, JSON.stringify(newValue));
			setValue(newValue);
		},
		[alias]
	);

	const isAliasExist = useCallback(() => {
		const cashedValue = localStorage.getItem(alias);
		console.log(cashedValue, cashedValue !== undefined);
		return cashedValue !== undefined;
	}, [alias]);

	useEffect(() => {
		if (isAliasExist()) {
			const cashedValue = JSON.parse(localStorage.getItem(alias));
			setLocalStorage(cashedValue);
		} else {
			console.log('Set initial value', initialValue);
			setLocalStorage(initialValue);
		}
	}, [initialValue, alias, setLocalStorage, isAliasExist]);

	return [value, setLocalStorage];
};
