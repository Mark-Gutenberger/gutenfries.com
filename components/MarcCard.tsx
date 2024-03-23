import { Link } from '@/components/Link.tsx';
import { ComponentChild } from 'preact';

interface MarcCardProps {
	title: string;
	children: ComponentChild;
}
function MarcCard(props: MarcCardProps) {
	return (
		<div className='flex flex-col flex-grow items-center lg:items-start mb-5'>
			<h3 className='mb-3 text-3xl sm:text-4xl'>{props.title}</h3>
			<p className='text-base text-gray-700 dark:text-gray-300 transition'>
				{props.children}
			</p>
		</div>
	);
}

export { MarcCard };
