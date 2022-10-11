/** @jsx h */
import { h } from 'preact';

import { ErrorPageLayout } from '@/layouts/ErrorPageLayout.tsx';

import { ErrorPageProps } from '$fresh/server.ts';

function ErrorPage(PageProps: ErrorPageProps) {
	return (
		<ErrorPageLayout PageProps={PageProps}>
			<div className='flex flex-col items-center justify-center h-screen'>
				<h2 className='text-4xl font-bold text-center text-white'>
					500 - Internal Server Error :(
				</h2>

				{PageProps.error instanceof Error
					? <hr className='w-1/2 my-5 rounded h-1 text-white bg-white' />
					: null}
				<p className='text-center text-white'>
					{PageProps.error instanceof Error
						? (PageProps.error as Error).message
						: JSON.stringify(PageProps.error)}
				</p>
			</div>
		</ErrorPageLayout>
	);
}

export default ErrorPage;
