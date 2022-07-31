/** @jsx h */
import { h } from 'preact';
import { Handlers } from '$fresh/server.ts';
import MainLayout from '../layouts/MainLayout.tsx';

export const handler: Handlers = {
	async GET(req, ctx) {
		const resp = await ctx.render();
		resp.headers.set('X-Custom-Header', 'Hello');
		return resp;
	},
};

const AboutPage = () => (
	<MainLayout>
		<h1>About</h1>
		<p>This is the about page.</p>
	</MainLayout>
);

export default AboutPage;
