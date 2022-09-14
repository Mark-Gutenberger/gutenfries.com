import { random_tw_colors } from '@/bindings/bindings.ts';
import { parseColors } from '@/rust/background_generator/typescript/parseColors.ts';

interface GradientBackgroundProps {
	children?:
		| preact.AnyComponent[]
		| preact.AnyComponent
		| preact.VNode[]
		| preact.VNode
		| Element[]
		| Element;
}

const GradientBackground = ({ children }: GradientBackgroundProps) => {
	// const BgColor = rust.random_tw_colors(3, 100.0);
	const BgColor = random_tw_colors(3, 100.0, 'tailwind');
	console.log(BgColor);
	const BgColors = parseColors(BgColor);
	console.log(BgColors);

	return (
		<div
			className={`${`background-animate`} bg-gradient-to-r
				from-${BgColors[0]} via-${BgColors[1]} to-${BgColors[2]}
				p-2.5 grid place-items-center h-screen w-screen`}
		>
			{children}
		</div>
	);
};

export { GradientBackground };
