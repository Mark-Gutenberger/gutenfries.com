/**
 * Joined two or more JSX classNames
 * @param {string[]} classes
 * @returns {string} {className}
 */
function classNames(...classes: string[]): string {
	return classes.filter(Boolean).join(' ');
}

/**
 *  trunacate to 100 chacacters and add ellipsis
 */
function truncate(str: string, length: number): string {
	if (str.length >= length) {
		return str.substring(0, length) + '...';
	}
	return str;
}

export { classNames, truncate };
