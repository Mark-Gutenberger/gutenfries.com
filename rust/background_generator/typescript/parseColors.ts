/**
 * Parses a string of colors, separated by semi-colons, into an array.
 * @param {string} `colors` The string of colors to parse.
 * @returns {string[]} `colorArray` parsed colors as string array
 */
const parseColors = (colors: string): string[] => {
	const colorArray = colors.split(';');
	return colorArray;
};

export { parseColors };
