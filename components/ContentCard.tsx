import { ComponentChildren } from 'preact';

interface ContentCardProps {
	children: ComponentChildren;
	title: string;
	description: ComponentChildren;
}

export default function ContentCard({ children, title, description }: ContentCardProps) {
	return (
		<div className='lg:my-auto mb-64 xl:mb-10 xl:py-12 w-full lg:w-1/2'>
			{children}
			<div className='bg-gray-600 bg-opacity-25 shadow-lg mx-6 px-6 py-4 rounded-b-lg'>
				<h2 className='mb-2 font-bold text-lg sm:text-xl'>{title}</h2>
				<p className='text-gray-700 text-sm sm:text-base dark:text-gray-300'>
					{description}
				</p>
			</div>
		</div>
	);
}
