/** @jsx h */
import { h } from 'preact';

import Icons from '@/components/Icons.tsx';

function SocialLinks() {
	return (
		<div className=' bg-opacity-20 bg-gray-500 px-2.5 rounded-md m-2.5 flex flex-wrap justify-center'>
			<a
				className='mx-1.5  text-white hover:bg-purple-700 hover:shadow-2xl hover:text-white p-2.5 rounded-md text-3xl'
				href='mailto:gutenfries@gmail.com'
				target='_blank'
				rel='noopener noreferrer'
			>
				<span className='sr-only'>Email</span>
				<Icons.Mail />
			</a>
			{
				/* 	<a
				className='mx-1.5  text-white hover:bg-blue-500 hover:shadow-2xl hover:text-white p-2.5 rounded-md text-3xl'
				href='https://twitter.com/gutenfries'
				target='_blank'
				rel='noopener noreferrer'
			>
				<span className='sr-only'>Twitter</span>
				<Icons.Twitter />
			</a> */
			}
			<a
				className='mx-1.5  text-white hover:bg-green-700 hover:shadow-2xl hover:text-white p-2.5 rounded-md text-3xl'
				href='https://peerlist.io/gutenfries'
				target='_blank'
				rel='noopener noreferrer'
			>
				<span className='sr-only'>Peerlist</span>
				<Icons.Peerlist />
			</a>
			<a
				className='mx-1.5  text-white hover:bg-blue-600 hover:shadow-2xl hover:text-white p-2.5 rounded-md text-3xl'
				href='https://www.linkedin.com/in/gutenfries/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<span className='sr-only'>Linkedin</span>
				<Icons.LinkedIn />
			</a>
			<a
				className='mx-1.5  text-white hover:bg-gray-700 active:bg-gray-900 hover:shadow-2xl hover:text-white p-2.5 rounded-md text-3xl'
				href='https://github.com/gutenfries'
				target='_blank'
				rel='noopener noreferrer'
			>
				<span className='sr-only'>Github</span>
				<Icons.Github />
			</a>
			<a
				className='mx-1.5  text-white hover:bg-amber-600 hover:shadow-2xl hover:text-white p-2.5 rounded-md text-3xl'
				href='https://codepen.io/gutenfries'
				target='_blank'
				rel='noopener noreferrer'
			>
				<span className='sr-only'>Codepen</span>
				<Icons.Codepen />
			</a>
			<a
				className='mx-1.5  text-white hover:bg-blue-600 hover:shadow-2xl hover:text-white p-2.5 rounded-md text-3xl'
				href='https://wakatime.com/gutenfries'
				target='_blank'
				rel='noopener noreferrer'
			>
				<span className='sr-only'>Wakatime</span>
				<Icons.Wakatime />
			</a>
		</div>
	);
}

export { SocialLinks };
