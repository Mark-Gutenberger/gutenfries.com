/** @jsx h */
import { Fragment, h } from 'preact';
import { tw } from '@twind';
import { MainLayout } from '../layouts/MainLayout.tsx';
import { PageProps } from '$fresh/server.ts';
import { theme } from '../utils/theme.ts';

function Home(pageProps_: PageProps) {
	// const route = pageProps_.url.pathname.substring(1);
	const route = 'Home';
	const description = 'Marcus Gutenberger is a software engineer and designer';
	return (
		<html>
			<MainLayout
				// title={title}
				description={description}
				pageProps_={pageProps_}
				theme={theme}
				route={route}
			>
				<h1>{route}</h1>
				<p>This is the about page.</p>
			</MainLayout>
		</html>
	);
}

export default Home;
