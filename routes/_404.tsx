import { asset } from '$fresh/runtime.ts';
import { PageProps } from '$fresh/server.ts';

import { Head } from '@/components/Head.tsx';
import { Routes } from '@/routes.ts';
import { Navbar } from '@/components/Navbar.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import IconDirectionsOff from '@tabler/icons/directions-off.tsx';

function NotFoundPage(PageProps: PageProps) {
	return (
		<>
			<Head PageProps={PageProps} />
			<Navbar
				active={Routes.serverError}
			/>

			<NoScript />

			<link
				rel='stylesheet'
				href={asset('/styles/animations/glitch.css')}
			/>

			<main
				id='main-content'
				className='flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 h-screen text-center text-gray-900 dark:text-gray-200'
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
				<div class='relative flex justify-center items-center'>
					<span class='block relative'>
						<h4 className='relative z-10'>
							<IconDirectionsOff className='w-24 h-24' />
						</h4>
						<h4 className='relative z-20 -mt-24'>
							<IconDirectionsOff className='w-24 h-24' />
						</h4>
						<h4 className='relative z-30 -mt-24'>
							<IconDirectionsOff className='w-24 h-24' />
						</h4>
					</span>
				</div>
			</main>
		</>
	);
}

export default NotFoundPage;
