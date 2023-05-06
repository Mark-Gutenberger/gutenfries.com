import { Navbar, Routes } from '@/components/Navbar.tsx';

import { Head } from '@/components/Head.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { UnknownPageProps } from '$fresh/server.ts';
import { asset } from '$fresh/runtime.ts';

function NotFoundPage(PageProps: UnknownPageProps) {
	return (
		<>
			<Head PageProps={PageProps} />
			<Navbar active={Routes.serverError} />

			<NoScript />

			<link
				rel='stylesheet'
				href={asset('/styles/glitch.css')}
			/>

			<main
				id='main-content'
				className='bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200 text-center flex flex-col items-center justify-center h-screen'
			>
				<span>
					<h1>HTTP Error 404</h1>
					<h2>HTTP Error 404</h2>
					<h2>HTTP Error 404</h2>
				</span>
				<br />
				<br />
				<span>
					<h3>Resource not found</h3>
					<h3>Resource not found</h3>
					<h3>Resource not found</h3>
				</span>
				<br />
				<br />
				<br />
				<br />
				<span>
					<h4>
						:(
					</h4>
					<h4>
						:(
					</h4>
					<h4>
						:(
					</h4>
				</span>
			</main>
		</>
	);
}

export default NotFoundPage;
