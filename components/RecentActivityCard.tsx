import { ComponentChildren } from 'preact';

interface RecentActivityCardProps {
	title: string;
	children: ComponentChildren | string;
	icon: preact.JSX.Element;
}

function RecentActivityCard({ title, children, icon }: RecentActivityCardProps) {
	return (
		<div className='flex flex-col bg-gray-800 p-8 rounded-lg h-full'>
			<div className='flex items-center mb-3'>
				<i className='flex flex-shrink-0 justify-center items-center bg-purple-500 mr-3 p-1 rounded-full w-10 h-10 text-gray-800'>
					{icon}
				</i>
				<h3 className='text-lg'>
					{title}
				</h3>
			</div>
			<div className='flex-grow'>
				<p className='text-base text-gray-300'>
					{children}
				</p>
			</div>
		</div>
	);
}

export { RecentActivityCard };
