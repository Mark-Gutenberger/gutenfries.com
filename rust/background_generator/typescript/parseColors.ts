const parseColors = (colors: string): string[] => {
	const colorArray = colors.split(';');
	return colorArray;
};

export { parseColors };
