/** @jsx h */
/** @jsxFrag Fragment */
import { Component, Fragment, h } from 'preact';
import Navbar from '../islands/Navbar.tsx';
import { PageProps } from '$fresh/server.ts';
import { asset, Head } from '$fresh/runtime.ts';

type MainLayoutProps = {
	route: string | URL | URLPattern;
	theme: Record<string, string>;
	title: string;
	description: string;
	pageProps_: PageProps;
	children?:
		| preact.AnyComponent[]
		| preact.AnyComponent
		| preact.VNode[]
		| preact.VNode
		| Element[]
		| Element;
};

/**
 * Main layout wrapper
 */
function MainLayout({ route, title, description, theme, pageProps_, children }: MainLayoutProps) {
	const ogImageUrl = new URL(asset('/logo.svg'), pageProps_.url).href;

	return (
		<>
			<Head>
				<title>{title}</title>

				<meta name='description' content={description} />
				<meta property='og:title' content={title} />
				<meta property='og:description' content={description} />
				<meta property='og:type' content='website' />
				<meta property='og:url' content={pageProps_.url.href} />
				<meta property='og:image' content={ogImageUrl} />

				<link rel='preconnect' href='https://fonts.googleapis.com'></link>
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true'></link>
				<link
					href='https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
					rel='stylesheet'
				>
				</link>
			</Head>

			<main>
				<Navbar theme={theme} route={route} />
				{children}
			</main>
		</>
	);
}

export { MainLayout };
