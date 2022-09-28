/** @jsx h */
import { ComponentChildren, h } from 'preact';
import { instantiate, random_tw_colors } from '@/wasm/background_generator.generated.js';
import { parseColors } from '@/rust/background_generator/src/typescript/parseColors.ts';

await instantiate();

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
