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
				className='flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 p-6 pt-20 h-screen text-gray-800 dark:text-gray-200 transition'
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
				<span class='relative flex justify-center items-center'>
					<h4 className='z-10 absolute'>
						<i>
							<IconDirectionsOff size={64} />
						</i>
					</h4>
					<h4 className='z-20 absolute'>
						<i>
							<IconDirectionsOff size={64} />
						</i>
					</h4>
					<h4 className='z-30 absolute'>
						<i>
							<IconDirectionsOff size={64} />
						</i>
					</h4>
				</span>
			</main>
		</>
	);
}

export default NotFoundPage;
