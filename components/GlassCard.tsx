/** @jsx h */
import { ComponentChildren, h } from 'preact';

interface GlassCardProps {
	isMain: boolean;
	children?: ComponentChildren;
}

const GlassCard = ({ isMain, children }: GlassCardProps) => {
	return (
		<div className='top-0 absolute flex items-center place-content-center p-5 pt-[6.25rem] w-full h-full z-0'>
			{isMain
				? (
					<div className='bg-gray-800 text-gray-100 backdrop-filter backdrop-blur-md bg-opacity-50
					p-2.5 w-full h-full flex flex-col relative rounded-lg overflow-auto scroll-smooth'>
						{children}
					</div>
				)
				: (
					<main className='bg-gray-800 text-gray-100 backdrop-filter backdrop-blur-md bg-opacity-50
					p-2.5 w-full h-full flex flex-col relative rounded-lg overflow-auto scroll-smooth'>
						{children}
					</main>
				)}
		</div>
	);
};

export { GlassCard };
