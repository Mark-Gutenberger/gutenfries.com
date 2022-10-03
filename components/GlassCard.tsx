/** @jsx h */
import { h } from 'preact';
import { ComponentChildren } from 'preact';

interface GlassCardProps {
	isMain: boolean;
	children?: ComponentChildren;
}

const GlassCard = ({ isMain, children }: GlassCardProps) => {
	if (!isMain) {
		return (
			<div className='top-0 absolute flex items-center place-content-center p-5 pt-[6.25rem] h-screen w-screen'>
				<div className='bg-gray-700 text-gray-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50
					p-2.5 w-full h-full flex flex-col overflow-hidden relative w-full rounded-xl'>
					{children}
				</div>
			</div>
		);
	} else {
		return (
			<div className='top-0 absolute flex items-center place-content-center p-5 pt-[6.25rem] h-screen w-screen'>
				<main className='main-content bg-gray-700 text-gray-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50
					p-2.5 w-full h-full flex flex-col overflow-hidden relative w-full rounded-xl'>
					{children}
				</main>
			</div>
		);
	}
};

export { GlassCard };
