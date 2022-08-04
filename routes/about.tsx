/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { Handlers } from '$fresh/server.ts';
import { MainLayout } from '../layouts/MainLayout.tsx';
import { PageProps } from '$fresh/server.ts';
import { theme } from '../utils/theme.ts';

export const handler: Handlers = {
	async GET(req, ctx) {
		const resp = await ctx.render();
		resp.headers.set('X-Custom-Header', 'Hello');
		return resp;
	},
};

function AboutPage(pageProps_: PageProps) {
	const route = pageProps_.url.pathname;
	const title = 'Marcus Gutenberger';
	const description = 'Marcus Gutenberger is a software engineer and designer';

	return (
		<>
			<MainLayout
				title={title}
				description={description}
				pageProps_={pageProps_}
				theme={theme}
				route={route}
			>
				<h1>{route}</h1>
				<p>This is the about page.</p>
			</MainLayout>
		</>
	);
}

export default AboutPage;
