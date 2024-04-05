import { ComponentChild } from 'preact';

interface CardProps {
	title: string;
	children: ComponentChild;
	icon?: ComponentChild;
}
function Card(props: CardProps) {
	return (
		<div className='flex flex-col flex-grow items-center lg:items-start mb-5'>
			<h3 className='flex justify-center mb-3 text-3xl sm:text-4xl'>
				{props.title}
				{props.icon ? props.icon : ''}
			</h3>
			<p className='text-base text-gray-700 dark:text-gray-300 transition'>
				{props.children}
			</p>
		</div>
	);
}

export { Card };
