/** @jsx h */
import { Fragment, h } from 'preact';
import { Head as FreshHead } from '$fresh/runtime.ts';
import { PageProps } from '$fresh/server.ts';
import { asset } from '$fresh/runtime.ts';

type HeadProps = {
	route: string | URL | URLPattern;
	title?: string;
	description: string;
	pageProps_: PageProps;
};

function Head({ route, pageProps_, description, title }: HeadProps) {
	const ogImageUrl = new URL(asset('/logo.svg'), pageProps_.url).href;
	return (
		<FreshHead>
			<title>{route} | Marcus Gutenberger</title>

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

			<script defer src='fontawesome-6.1.2/js/all.min.js'></script>
		</FreshHead>
	);
}

export { Head };
