import { asset, Head as FreshHead } from '$fresh/runtime.ts';
import { PageProps } from '$fresh/server.ts';

interface HeadProps {
	PageProps: PageProps;
}

function Head({ PageProps }: HeadProps) {
	const OGImageUrl =
		new URL(asset('/images/screenshots/screenshot-desktop-dark.png'), PageProps.url).href;
	const OGDescription =
		'pub struct Marc { name: &str, email: String, loves_dinosaurs: bool, expertise: Vec<&str>, } ...';
	const OGTitle = 'Marc Gutenberger';

	let pipe: string;
	if (PageProps.url.pathname.slice(1) != '') {
		pipe = '|';
	} else {
		pipe = '';
	}

	return (
		<FreshHead>
			{/* load fonts first to prevent font-jiggle */}
			<link rel='preconnect' href='https://fonts.googleapis.com' />
			<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
			<link
				href='https://fonts.googleapis.com/css2?family=Fira+Code&family=Sedgwick+Ave+Display&family=Source+Sans+Pro:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,700'
				rel='stylesheet'
				type='text/css'
			/>

			{/* <!-- Primary Meta Tags --> */}
			<title>
				{PageProps.url.pathname.charAt(1).toUpperCase() + PageProps.url.pathname.slice(2)}
				{' '}
				{pipe} Marc Gutenberger
			</title>
			<meta
				name='title'
				content={`${
					PageProps.url.pathname.charAt(1).toUpperCase() + PageProps.url.pathname.slice(2)
				} ${pipe} Marc Gutenberger`}
			/>
			<meta
				name='description'
				content={OGDescription}
			/>

			{/* <!-- Open Graph / Facebook --> */}
			<meta property='og:type' content='website' />
			<meta property='og:url' content={PageProps.url.href} />
			<meta property='og:title' content={OGTitle} />
			<meta
				property='og:description'
				content={OGDescription}
			/>
			<meta
				property='og:image'
				content={OGImageUrl}
			/>

			{/* <!-- Twitter --> */}
			<meta property='twitter:card' content='summary_large_image' />
			<meta property='twitter:url' content={PageProps.url.href} />
			<meta
				property='twitter:title'
				content={OGTitle}
			/>
			<meta
				property='twitter:description'
				content={OGDescription}
			/>
			<meta
				property='twitter:image'
				content={OGImageUrl}
			/>

			{/* Window theme color */}
			{/* Chrome, Firefox OS and Opera */}
			<meta name='theme-color' content='#27272a' />
			{/* Windows Phone */}
			<meta name='msapplication-navbutton-color' content='#27272a' />
			<meta name='msapplication-TileColor' content='#27272a' />
			{/* iOS Safari */}
			<meta name='apple-mobile-web-app-capable' content='yes' />
			<meta name='apple-mobile-web-app-status-bar-style' content='#27272a' />

			{/* global styles */}
			<link rel='stylesheet' href={asset('/styles/global.css')} />
			<link rel='stylesheet' href={asset('/styles/tailwind.css')} />

			{/* favicon */}
			<link rel='icon' href={asset('/images/code.svg')} />
		</FreshHead>
	);
}

export { Head };
