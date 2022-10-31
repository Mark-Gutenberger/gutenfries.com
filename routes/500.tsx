/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { ErrorPageProps } from '$fresh/server.ts';
import { asset } from '$fresh/runtime.ts';

import { Head } from '@/components/Head.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { Navbar } from '@/components/Navbar.tsx';

function ErrorPage(PageProps: ErrorPageProps) {
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

				<Navbar active='404' />

				<NoScript />
				<link
					rel='stylesheet'
					href={asset('styles/glitch.css')}
				/>
				<div className='flex flex-col items-center justify-center h-screen'>
					<main id='main-content'>
						<span>
							<h2>
								HTTP Error 500 - Internal Server Error :(
							</h2>
							<h2>
								HTTP Error 500 - Internal Server Error :(
							</h2>
							<h2>
								HTTP Error 500 - Internal Server Error :(
							</h2>
						</span>

						{PageProps.error instanceof Error
							? (
								<hr className='w-1/2 my-5 rounded h-1 dark:text-gray-50 text-gray-900 bg-white' />
							)
							: null}
						<p className='text-center text-gray-50'>
							{PageProps.error instanceof Error
								? (PageProps.error as Error).message
								: null}
						</p>
					</main>
				</div>
			</section>
		</>
	);
}

export default ErrorPage;
