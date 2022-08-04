/** @jsx h */
import { h } from 'preact';
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

function AboutPage(props: PageProps) {
	const route = 'about';
	return (
		<MainLayout theme={theme} route={route}>
			<h1>About</h1>
			<p>This is the about page.</p>
		</MainLayout>
	);
}

export default AboutPage;
