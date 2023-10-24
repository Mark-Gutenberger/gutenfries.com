import { asset } from '$fresh/runtime.ts';
import { UnknownPageProps } from '$fresh/server.ts';

import { Head } from '@/src/components/Head.tsx';
import { Navbar, Routes } from '@/src/components/Navbar.tsx';
import { NoScript } from '@/src/components/NoScript.tsx';
import IconDirectionsOff from '@tabler/icons/directions-off.tsx';

function NotFoundPage(PageProps: UnknownPageProps) {
	return (
		<>
			<Head PageProps={PageProps} />
			<Navbar active={Routes.serverError} />

			<NoScript />

			<link
				rel='stylesheet'
				href={asset('/styles/animations/glitch.css')}
			/>

			<main
				id='main-content'
				className='bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200 text-center flex flex-col items-center justify-center h-screen'
			>
				<span>
					<h1>Error 404:</h1>
					<h2>Error 404:</h2>
					<h2>Error 404:</h2>
				</span>
				<br />
				<br />
				<span>
					<h3>Not Found</h3>
					<h3>Not Found</h3>
					<h3>Not Found</h3>
				</span>
				<br />
				<br />
				<br />
				<br />
				<div class='relative flex items-center justify-center'>
					<span class='relative block'>
						<h4 className='z-10 relative'>
							<IconDirectionsOff className='w-24 h-24' />
						</h4>
						<h4 className='z-20 relative -mt-24'>
							<IconDirectionsOff className='w-24 h-24' />
						</h4>
						<h4 className='z-30 relative -mt-24'>
							<IconDirectionsOff className='w-24 h-24' />
						</h4>
					</span>
				</div>
			</main>
		</>
	);
}

export default NotFoundPage;
