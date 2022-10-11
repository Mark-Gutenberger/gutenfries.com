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
				<p className='text-center text-white'>
					{(PageProps.error as Error).message}
				</p>
			</div>
		</ErrorPageLayout>
	);
}

export default ErrorPage;
