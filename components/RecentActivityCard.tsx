import Icons from '@/utils/Icons.tsx';
import { VNode } from 'preact';

function RecentActivityCard({
	title,
	description,
	icon,
	source,
}: {
	title: string;
	description: string;
	icon: Element | VNode;
	source: string;
}) {
	return (
		<div className='flex flex-col h-full p-8 bg-gray-800 rounded-lg'>
			<div className='flex items-center mb-3'>
				<i className='flex items-center justify-center flex-shrink-0 w-10 h-10 p-1 mr-3 text-gray-800 bg-blue-500 rounded-full'>
					{icon}
				</i>
				<h3 className='text-lg'>
					{title}
				</h3>
			</div>
			<div className='flex-grow'>
				<p className='text-base text-lg text-gray-700 dark:text-gray-300'>
					{description}
				</p>

				<a
					href={source}
					className='inline-flex items-center mt-3 text-blue-500 hover:text-blue-600 active:text-blue-700'
					target='_blank'
					rel='noopener'
				>
					Source Code
					<Icons.ExternalLink className='inline-block w-4 h-4 ml-1' />
				</a>
			</div>
		</div>
	);
}

export { RecentActivityCard };
