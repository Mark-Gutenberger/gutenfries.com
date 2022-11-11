import { ComponentChildren, JSX, VNode } from 'preact';

function TechCard({
	tech,
	icon,
	techLink,
	children,
}: {
	tech: string;
	icon: JSX.Element | VNode;
	techLink: string;
	children: ComponentChildren;
}) {
	return (
		<div className='p-4 xl:w-1/3 md:w-1/2'>
			<div className='p-8 border rounded-lg'>
				<a
					className='flex items-center w-1/2 mb-3 text-blue-500 hover:text-blue-600 active:text-blue-700'
					href={techLink}
					target='_blank'
					rel='noopener'
				>
					<i className='flex items-center justify-center flex-shrink-0 w-10 h-10 p-1 mr-3 text-gray-800 bg-blue-500 rounded-full'>
						{icon}
					</i>

					<h3 className='text-lg'>
						{tech}
					</h3>
				</a>

				<p className='text-base text-lg text-gray-700 dark:text-gray-300'>
					{children}
				</p>
			</div>
		</div>
	);
}

export { TechCard };
