import { useCallback, useEffect, useState } from 'react';

export const useStorageStateNumber = (initialValue = null, alias) => {
	const [value, setValue] = useState(initialValue);

	const setLocalStorage = useCallback(
		newValue => {
			localStorage.setItem(alias, newValue);
			setValue(prev => Number(newValue));
		},
		[alias]
	);

	const isAliasExist = useCallback(() => {
		return (
			!isNaN(localStorage.getItem(alias)) &&
			localStorage.getItem(alias) !== null
		);
	}, [alias]);

	useEffect(() => {
		if (isAliasExist()) {
			setLocalStorage(+localStorage.getItem(alias), alias);
		} else {
			setLocalStorage(initialValue, alias);
		}
	}, [initialValue, alias, setLocalStorage, isAliasExist]);

	return [value, setLocalStorage];
};
