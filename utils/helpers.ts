/**
 * joins two or more JSX `className` properties
 */
function classNames(...classes: string[]): string {
	return classes.filter(Boolean).join(' ');
}

/**
 * trunacates a string to a given length
 */
function truncate(str: string, length: number, addElipses?: boolean): string {
	const elipses = addElipses ? '...' : '';
	if (str.length >= length) {
		return str.substring(0, length) + elipses;
	}
	return str;
}

export { classNames, truncate };
