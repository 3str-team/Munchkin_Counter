export const saveInStorage = (config, options) => (set, get, api) =>
	config(
		(...args) => {
			set(...args);
			localStorage.setItem(options.alias, JSON.stringify(get()[options.alias]));
		},
		get,
		api
	);