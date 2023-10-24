/**
 * trunacates a string to a given length
 */
export function truncate(str: string, length: number, addElipses?: boolean): string {
	const elipses = addElipses ? '...' : '';
	if (str.length >= length) {
		return str.substring(0, length) + elipses;
	}
	return str;
}
