/** @jsx h */
import { ComponentChildren, h } from 'preact';
import { random_tw_colors } from '@/wasm/wasm.js';
import { parseColors } from '@/rust/background_generator/typescript/parseColors.ts';

function GradientBackground() {
	const randomColors = random_tw_colors(3, 100, 'tailwind');
	const theme = parseColors(randomColors);

	return (
		<div
			className={`${`background-animate`} bg-gradient-to-r from-${theme[0]} via-${
				theme[1]
			} to-${
				theme[2]
			} flex items-center place-content-center p-5 pt-[6.25rem] h-screen w-screen`}
		/>
	);
}

export { GradientBackground };
