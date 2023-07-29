import { Handlers } from '$fresh/server.ts';
import { SitemapContext } from 'fresh_seo';
import manifest from '@/fresh.gen.ts';
import { listPosts } from '@/utils/blogPosts.ts';

export const handler: Handlers = {
	async GET() {
		const posts = await listPosts();

		const sitemap = new SitemapContext(
			'https://gutenfries.deno.dev',
			manifest,
		);

		// add all blog posts
		for (const post of posts) {
			sitemap.add(`/blog/${post.slug}`);
		}

		// add all resumes
		sitemap.add('/resume?activeResume=techResume');
		sitemap.add('/resume?activeResume=musicResume');

		// remove the /home route, as it is a HTTP 307 redirect to /
		sitemap.remove('/home');

		return sitemap.render();
	},
};
