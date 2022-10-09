/** @jsx h */
import { h } from 'preact';

import { PageProps } from '$fresh/server.ts';

import { HomeLayout } from '@/layouts/HomeLayout.tsx';

import AnimatedCarousel from '@/islands/AnimatedCarousel.tsx';

function HomePage(pageProps_: PageProps) {
	return (
		<HomeLayout pageProps_={pageProps_}>
			<h1 className='animate-fade-in-0.5 text-5xl font-bold text-center mt-5 text-gray-200'>
				Hi
			</h1>
			<AnimatedCarousel />
		</HomeLayout>
	);
}

export default HomePage;
