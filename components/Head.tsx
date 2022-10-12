/** @jsx h */
import { h } from 'preact';

import { ErrorPageProps, PageProps, UnknownPageProps } from '$fresh/server.ts';
import { asset, Head as FreshHead } from '$fresh/runtime.ts';

interface HeadProps {
	PageProps: PageProps | UnknownPageProps | ErrorPageProps;
}

function Head({ PageProps }: HeadProps) {
	const ogImageUrl =
		new URL(asset('images/gutenfries.deno.dev_home_1200x328.png'), PageProps.url).href;

	let pipe: string;
	if (PageProps.url.pathname.slice(1) != '') {
		pipe = '|';
	} else {
		pipe = '';
	}

	return (
		<FreshHead>
			<title>
				{PageProps.url.pathname.slice(1)} {pipe} Mark Gutenberger
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
			<meta property='og:url' content={PageProps.url.href} />
			<meta
				property='og:title'
				content={`${PageProps.url.pathname.slice(1)} ${pipe} Mark Gutenberger`}
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
			<meta
				property='twitter:description'
				content='Mark Gutenberger - Software Developer'
			/>
			<meta
				property='twitter:image'
				content={ogImageUrl}
			/>

			<link rel='stylesheet' href={asset('/styles/nunito.min.css')}></link>
			<link rel='stylesheet' href={asset('/styles/tailwind-extended.min.css')}></link>
			<link rel='stylesheet' href={asset('/styles/global.min.css')}></link>

			{/* console easter egg */}
			<script
				dangerouslySetInnerHTML={{
					__html: `console.log('%cHi there! 👋', 'font-size: 2rem; font-weight: bold;');`,
				}}
			>
			</script>
		</FreshHead>
	);
}

export { Head };
