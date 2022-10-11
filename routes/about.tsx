/** @jsx h */
import { h } from 'preact';

import { PageProps } from '$fresh/server.ts';

import { MainLayout } from '@/layouts/MainLayout.tsx';

function AboutPage(PageProps: PageProps) {
	return (
		<MainLayout
			PageProps={PageProps}
		>
			<h1 className='animate-fade-in-0.5 text-5xl font-bold text-center mt-5 text-white'>
				How I made this site
			</h1>
			<p className='animate-fade-in-0.5 text-xl text-center mt-8 text-white'>
				Blah blah blah, update this later
			</p>
		</MainLayout>
	);
}

export default AboutPage;
