/** @jsx h */
import { h } from 'preact';
import { HomeLayout } from '@/layouts/HomeLayout.tsx';
import { PageProps } from '$fresh/server.ts';

function HomePage(pageProps_: PageProps) {
	return (
		<HomeLayout pageProps_={pageProps_}>
			<h1 className='animate-fade-in-0.5 text-5xl font-bold text-center mt-5'>
				Hi
			</h1>
			<h2 className='animate-fade-in-0.5 text-3xl font-bold text-center mt-5'>
				I'm <span className='text-blue-500'>@fresh</span>
			</h2>
		</HomeLayout>
	);
}

export default HomePage;
