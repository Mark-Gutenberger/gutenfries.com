import { ComponentChildren } from 'preact';

interface RecentActivityCardProps {
	title: string;
	children: ComponentChildren | string;
	icon: preact.JSX.Element;
}

function RecentActivityCard({ title, children, icon }: RecentActivityCardProps) {
	return (
		<div className='flex flex-col h-full p-8 bg-gray-800 rounded-lg'>
			<div className='flex items-center mb-3'>
				<i className='flex items-center justify-center flex-shrink-0 w-10 h-10 p-1 mr-3 text-gray-800 bg-purple-500 rounded-full'>
					{icon}
				</i>
				<h3 className='text-lg'>
					{title}
				</h3>
			</div>
			<div className='flex-grow'>
				<p className='text-base text-lg text-gray-300'>
					{children}
				</p>
			</div>
		</div>
	);
}

export { RecentActivityCard };
