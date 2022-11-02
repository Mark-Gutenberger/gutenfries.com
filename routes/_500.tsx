import { ErrorPageProps } from '$fresh/server.ts';
import { asset } from '$fresh/runtime.ts';

import { Head } from '@/components/Head.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { Navbar } from '@/components/Navbar.tsx';

function ErrorPage(PageProps: ErrorPageProps) {
	return (
		<>
			<Head PageProps={PageProps} />
			<Navbar active='404' />

			<NoScript />
			<link
				rel='stylesheet'
				href={asset('/styles/glitch.css')}
			/>

			<main
				id='main-content'
				className='bg-gray-100 dark:bg-gray-900 font-[fira] text-gray-900 dark:text-gray-50 text-center flex flex-col justify-center h-screen'
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
