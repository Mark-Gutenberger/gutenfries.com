/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { ErrorPageProps } from '$fresh/server.ts';

import { Head } from '@/components/Head.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { Navbar } from '@/components/Navbar.tsx';

function ErrorPage(PageProps: ErrorPageProps) {
	return (
		<>
			<Head PageProps={PageProps} />
			<div className='bg-gray-100 dark:bg-gray-900 font-[fira]'>
				<Navbar active='404' />

				<NoScript />

				<div className='flex flex-col items-center justify-center h-screen'>
					<h2 className='text-4xl font-bold text-center text-gray-50'>
						HTTP Error 500 - Internal Server Error :(
					</h2>

					{PageProps.error instanceof Error
						? <hr className='w-1/2 my-5 rounded h-1 text-gray-50 bg-white' />
						: null}
					<p className='text-center text-gray-50'>
						{PageProps.error instanceof Error
							? (PageProps.error as Error).message
							: JSON.stringify(PageProps.error)}
					</p>
				</div>
			</div>
		</>
	);
}

export default ErrorPage;
