/** @jsx h */
import { h } from 'preact';

import { ErrorPageProps } from '$fresh/server.ts';

import { ErrorPageLayout } from '@/layouts/ErrorPageLayout.tsx';

function ErrorPage(errorPageProps_: ErrorPageProps) {
	return (
		<ErrorPageLayout errorPageProps_={errorPageProps_}>
			<div className='flex flex-col items-center justify-center h-screen'>
				<h2 className='text-4xl font-bold text-center text-white'>
					500 - Internal Server Error :(
				</h2>

				{errorPageProps_.error instanceof Error
					? <hr className='w-1/2 my-5 rounded h-1 text-white bg-white' />
					: null}
				<p className='text-center text-white'>
					{errorPageProps_.error instanceof Error
						? (errorPageProps_.error as Error).message
						: JSON.stringify(errorPageProps_.error)}
				</p>
			</div>
		</ErrorPageLayout>
	);
}

export default ErrorPage;
