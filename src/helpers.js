export const debounce = (fn, ms) => {
	let timeout;

	return () => {
    clearTimeout(timeout);
		timeout = setTimeout(() => fn.apply(), ms);
	};
};


export const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1)
