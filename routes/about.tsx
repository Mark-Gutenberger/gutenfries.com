/** @jsx h */
import { h } from 'preact';
import { MainLayout } from '@/layouts/MainLayout.tsx';
import { PageProps } from '$fresh/server.ts';

function AboutPage(pageProps_: PageProps) {
	return (
		<MainLayout
			pageProps_={pageProps_}
		>
			blah blah blah, how i made this site....
		</MainLayout>
	);
}

export default AboutPage;
