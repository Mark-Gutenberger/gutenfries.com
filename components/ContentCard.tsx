import { ComponentChildren } from 'preact';

interface ContentCardProps {
	children: ComponentChildren;
	title: string;
	description: string;
}

export default function ContentCard({ children, title, description }: ContentCardProps) {
	return (
		<div className='w-full mb-64 lg:my-auto lg:w-1/2 xl:py-12 xl:mb-10'>
			{children}
			<div className='px-6 py-4 mx-6 bg-gray-600 bg-opacity-25 rounded-b-lg shadow-lg'>
				<h3 className='mb-2 sm:text-xl text-lg font-bold'>{title}</h3>
				<p className='sm:text-base text-sm text-gray-700 dark:text-gray-300'>
					{description}
				</p>
			</div>
		</div>
	);
}
