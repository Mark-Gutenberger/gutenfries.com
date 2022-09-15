/**
 * Parses a string of colors, separated by semi-colons, into an array.
 * @param {string} `colors` The string of colors to parse.
 * @returns {string[]} `colorArray` parsed colors as string array
 */
const parseColors = (colors: string): string[] => {
	// Split the string of colors into an array of colors
	const colorArray = colors.split(';');

	// Remove the last element, which is an empty string
	colorArray.pop();

	return colorArray;
};

export { parseColors };
