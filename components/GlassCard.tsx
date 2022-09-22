/** @jsx h */
import { h } from 'preact';
import { ComponentChildren } from 'preact';

interface GlassCardProps {
	children?: ComponentChildren;
}

const GlassCard = ({ children }: GlassCardProps) => {
	return (
		<div className='top-0 absolute flex items-center place-content-center p-5 pt-[6.25rem] h-screen w-screen'>
			<div
				className={`bg-gray-700 text-gray-100 bg-clip-padding ${`backdrop-filter`} ${`backdrop-blur-md`} bg-opacity-50
			p-2.5 w-full h-full flex flex-col
			overflow-hidden relative w-full rounded-xl`}
			>
				{children}
			</div>
		</div>
	);
};

export { GlassCard };
