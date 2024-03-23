import { ComponentChild, JSX, VNode } from 'preact';

function TechCard({
	tech,
	icon,
	techLink,
	children,
}: {
	tech: string;
	icon: JSX.Element | VNode;
	techLink: string;
	children: ComponentChild;
}) {
	return (
		<span className='p-4 md:w-1/2 xl:w-1/3'>
			<div className='p-8 border rounded-lg'>
				<a
					className='flex items-center mb-3 w-1/2 text-purple-500 hover:text-purple-600 active:text-purple-700 transition'
					href={techLink}
					target='_blank'
					rel='noopener'
				>
					<i className='flex flex-shrink-0 justify-center items-center bg-purple-500 mr-3 p-1 rounded-full w-10 h-10 text-gray-800 transition'>
						{icon}
					</i>

					<h3 className='text-lg'>
						{tech}
					</h3>
				</a>

				<p className='text-base text-gray-700 dark:text-gray-300 transition'>
					{children}
				</p>
			</div>
		</span>
	);
}

export { TechCard };
