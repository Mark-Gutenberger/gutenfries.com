/** @jsx h */
import { h } from 'preact';
import { random_tw_colors } from '@/wasm/wasm.js';
import { parseColors } from '@/rust/background_generator/typescript/parseColors.ts';
import { ComponentChildren } from 'preact';

interface GradientBackgroundProps {
	children?: ComponentChildren;
}

const GradientBackground = ({ children }: GradientBackgroundProps) => {
	const BgColor = random_tw_colors(3, 100.0, 'tailwind');
	const BgColors = parseColors(BgColor);

	return (
		<div
			className={`${`background-animate`} bg-gradient-to-r
				from-${BgColors[0]} via-${BgColors[1]} to-${BgColors[2]}
				flex items-center place-content-center p-5 pt-[6.25rem] h-screen w-screen`}
		>
			{children}
		</div>
	);
};

export { GradientBackground };
