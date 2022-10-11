/** @jsx h */
import { h } from 'preact';

import { ErrorPageLayout } from '@/layouts/ErrorPageLayout.tsx';

import { UnknownPageProps } from '$fresh/server.ts';

function NotFoundPage(PageProps: UnknownPageProps) {
	return (
		<ErrorPageLayout PageProps={PageProps}>
			<div className='flex flex-col items-center justify-center h-screen'>
				<h2 className='text-4xl font-bold text-center text-white'>
					404 - Page not found :(
				</h2>
			</div>
		</ErrorPageLayout>
	);
}

export default NotFoundPage;
