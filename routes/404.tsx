import { UnknownPageProps } from '$fresh/server.ts';
import { asset } from '$fresh/runtime.ts';

import { Head } from '@/components/Head.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { Navbar } from '@/components/Navbar.tsx';

function NotFoundPage(PageProps: UnknownPageProps) {
	return (
		<>
			<Head PageProps={PageProps} />
			<section className='bg-gray-100 dark:bg-gray-900 font-[fira] text-gray-900 dark:text-gray-50 text-center'>
				<a
					href='#main-content'
					className='sr-only focus:not-sr-only text-red-500 outline-none focus:outline-none '
				>
					Skip to main content
				</a>

				<Navbar />

				<NoScript />

				<link
					rel='stylesheet'
					href={asset('styles/glitch.css')}
				/>

				<div className='flex flex-col items-center justify-center h-screen'>
					<main id='main-content'>
						<span>
							<h1>
								HTTP Error 404
							</h1>
							<h2>
								HTTP Error 404
							</h2>
							<h2>
								HTTP Error 404
							</h2>
						</span>
						<br />
						<br />
						<span>
							<h3>
								Resource not found
							</h3>
							<h3>
								Resource not found
							</h3>
							<h3>
								Resource not found
							</h3>
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
				</div>
			</section>
		</>
	);
}

export default NotFoundPage;
