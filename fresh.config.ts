import { defineConfig } from '$fresh/server.ts';
import tailwind from '$fresh/plugins/tailwind.ts';
import tailwindConfig from '@/tailwind.config.ts';

import { freshSEOPlugin } from 'fresh_seo';
import manifest from '@/fresh.gen.ts';
import { listPosts } from '@/utils/blogPosts.ts';

const blogPosts = await listPosts();
const blogRoutes: string[] = blogPosts.map((post) => `/blog/${post.slug}`);

export default defineConfig({
	plugins: [
		tailwind(tailwindConfig), // ignore error, bug within the framework plugin
		freshSEOPlugin(manifest, {
			include: [
				...blogRoutes,
			],
			exclude: [
				'/home', // remove the /home route, as it is a HTTP 307 redirect to /.
				'/blog/feed.rss',
			],
		}),
	],
});
