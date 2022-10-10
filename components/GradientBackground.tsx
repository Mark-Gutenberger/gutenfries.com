/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';

import { instantiate, random_tw_colors } from '@/wasm/color_generator.generated.js';
import { parseColors } from '@/rust/color_generator/src/typescript/parseColors.ts';

await instantiate();

function GradientBackground() {
	const randomColors = random_tw_colors(3, 100, 'tailwind');
	const theme = parseColors(randomColors);

	return (
		<>
			<style>
				{'.background-animate{background-size: 400%;-webkit-animation: BackgroundAnimate 3s ease infinite;-moz-animation: BackgroundAnimate 3s ease infinite;animation: BackgroundAnimate 3s ease infinite;} @keyframes BackgroundAnimate { 0%,100% {background-position: 0% 50%;} 50% {background-position: 100% 50%;}}'}
			</style>
			<div
				className={`background-animate bg-gradient-to-r from-${theme[0]} via-${
					theme[1]
				} to-${
					theme[2]
				} flex items-center place-content-center p-5 pt-[6.25rem] h-full w-full`}
			/>
		</>
	);
}

export { GradientBackground };
