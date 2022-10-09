/** @jsx h */
import { h } from 'preact';

import { UnknownPageProps } from '$fresh/server.ts';

import { NotFoundLayout } from '@/layouts/NotFoundLayout.tsx';

function NotFoundPage(notFoundPageProps_: UnknownPageProps) {
	return (
		<NotFoundLayout notFoundPageProps_={notFoundPageProps_}>
			<div className='flex flex-col items-center justify-center h-full'>
				<h2 className='text-4xl font-bold text-center text-gray-200'>
					404 - Page not found :(
				</h2>
			</div>
		</NotFoundLayout>
	);
}

export default NotFoundPage;
