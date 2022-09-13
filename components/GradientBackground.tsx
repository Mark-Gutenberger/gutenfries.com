import * as rust from '@/wasm/wasm.js';

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
	const BgColor = rust.random_tw_colors(3, 100.0);

	return (
		<>
			<style jsx>
				{`
				.background-animate {
					background-size: 400%;
					-webkit-animation: AnimationName 3s ease infinite;
					-moz-animation: AnimationName 3s ease infinite;
					animation: AnimationName 3s ease infinite;
				}
				@keyframes AnimationName {
					0%,
					100% {
						background-position: 0% 50%;
					}
					50% {
						background-position: 100% 50%;
					}
				}
			`}
			</style>
			<div
				className={`background-animate bg-gradient-to-r
						 from-${BgColor[0]} via-${BgColor[1]} to-${BgColor[2]}
						 p-2.5 grid place-items-center h-screen w-screen`}
			>
			</div>
			{children}
		</>
	);
};

export { GradientBackground };
