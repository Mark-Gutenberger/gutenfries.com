/** @jsx h */
import { h } from 'preact';
import { PageProps, UnknownPageProps } from '$fresh/server.ts';
import { asset, Head as FreshHead } from '$fresh/runtime.ts';

interface HeadProps {
	pageProps_: PageProps | UnknownPageProps;
}

function Head({ pageProps_ }: HeadProps) {
	const ogImageUrl =
		new URL(asset('images/gutenfries.deno.dev_home_1200x328.png'), pageProps_.url).href;

	let pipe: string;
	if (pageProps_.url.pathname.slice(1) != '') {
		pipe = '|';
	} else {
		pipe = '';
	}

	return (
		<FreshHead>
			<title>
				{pageProps_.url.pathname.slice(1)} {pipe} Mark Gutenberger
			</title>

			<link rel='icon' href={asset('/icons/favicon.ico')}></link>

			{/* Chrome, Firefox OS and Opera */}
			<meta name='theme-color' content='#27272a' />
			{/* Windows Phone */}
			<meta name='msapplication-navbutton-color' content='#27272a' />
			<meta name='msapplication-TileColor' content='#27272a' />
			{/* iOS Safari */}
			<meta name='apple-mobile-web-app-capable' content='yes' />
			<meta name='apple-mobile-web-app-status-bar-style' content='#27272a' />

			<meta name='description' content='Mark Gutenberger - Software Developer' />

			{/* Open Graph / Facebook */}
			<meta property='og:type' content='website' />
			<meta property='og:url' content={pageProps_.url.href} />
			<meta
				property='og:title'
				content={`${pageProps_.url.pathname.slice(1)} ${pipe} Mark Gutenberger`}
			/>
			<meta property='og:description' content='Mark Gutenberger - Software Developer' />
			<meta
				property='og:image'
				content={ogImageUrl}
			/>

			{/* Twitter */}
			<meta property='twitter:card' content='summary_large_image' />
			<meta property='twitter:url' content='https://gutenfries.deno.dev/home' />
			<meta property='twitter:title' content='home | Mark Gutenberger' />
			<meta property='twitter:description' content='Mark Gutenberger - Software Developer' />
			<meta
				property='twitter:image'
				content={ogImageUrl}
			/>

			{/* google fonts */}
			<link rel='preconnect' href='https://fonts.googleapis.com'></link>
			<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true'></link>
			<link
				href='https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
				rel='stylesheet'
			>
			</link>

			<style type='text/css'>
				{`*, html {overscroll-behavior: none;}html, body {position: fixed;overflow: auto;}* {scrollbar-color: #3b82f6 #d1d5db ;z-index: 100;}*::-webkit-scrollbar {width: 16px;z-index: 100;}*::-webkit-scrollbar-track {background: #d1d5db ;border-radius: 6px;z-index: 99;}*::-webkit-scrollbar-thumb {background-color: #3b82f6 ;border-radius: 6px;z-index: 100;}`}
			</style>
		</FreshHead>
	);
}

export { Head };
