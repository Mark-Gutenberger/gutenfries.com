import { Navbar, Routes } from '@/components/Navbar.tsx';

import { ErrorPageProps } from '$fresh/server.ts';
import { Head } from '@/components/Head.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { asset } from '$fresh/runtime.ts';

function ErrorPage(PageProps: ErrorPageProps) {
	return (
		<>
			<Head PageProps={PageProps} />
			<Navbar active={Routes.notFound} />

			<NoScript />
			<link
				rel='stylesheet'
				href={asset('/styles/glitch.css')}
			/>

			<main
				id='main-content'
				className='bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200 text-center flex flex-col justify-center h-screen overflow-x-hidden'
			>
				<span>
					<h2>HTTP Error 500</h2>
					<h2>HTTP Error 500</h2>
					<h2>HTTP Error 500</h2>
				</span>
				<br />
				<br />
				<span>
					<h3>Internal Server Error</h3>
					<h3>Internal Server Error</h3>
					<h3>Internal Server Error</h3>
				</span>

				{PageProps.error instanceof Error
					? (
						<>
							<br />
							<br />
							<span>
								<hr />
								<hr />
								<hr />
							</span>
							<br />
						</>
					)
					: null}
				<p className='text-center text-gray-300'>
					{PageProps.error instanceof Error ? (PageProps.error as Error).message : null}
				</p>
			</main>
		</>
	);
}

export default ErrorPage;
