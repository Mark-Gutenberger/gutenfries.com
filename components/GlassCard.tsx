/** @jsx h */
import { ComponentChildren, h } from 'preact';

interface GlassCardProps {
	children?: ComponentChildren;
	width?: string | number;
	height?: string | number;
}

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

const GlassCard = ({ children, width, height }: GlassCardProps) => {
	return (
		<div className='top-20 absolute flex items-center place-content-center p-5'>
			<div
				className={classNames(
					'bg-gray-800 text-gray-100 bg-opacity-50 p-2.5 flex flex-col rounded-lg',
					width ? `w-[${width}]` : 'h-full',
					height ? `h-[${height}]` : 'w-full',
				)}
			>
				{children}
			</div>
		</div>
	);
};

export { GlassCard };
