/** @jsx h */
import { h } from 'preact';

import { ErrorPageProps } from '$fresh/server.ts';

import { ErrorPageLayout } from '@/layouts/ErrorPageLayout.tsx';

function ErrorPage(errorPageProps_: ErrorPageProps) {
	return (
		<ErrorPageLayout errorPageProps_={errorPageProps_}>
			<div className='flex flex-col items-center justify-center h-full'>
				<h2 className='text-4xl font-bold text-center text-gray-200'>
					500 - Internal Server Error :(
				</h2>

				{errorPageProps_.error instanceof Error
					? <hr className='w-1/2 my-5 rounded h-1 text-gray-200 bg-white' />
					: null}
				<p className='text-center text-gray-200'>
					{errorPageProps_.error instanceof Error
						? (errorPageProps_.error as Error).message
						: JSON.stringify(errorPageProps_.error)}
				</p>
			</div>
		</ErrorPageLayout>
	);
}

export default ErrorPage;
