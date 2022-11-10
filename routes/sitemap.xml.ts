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

		for (const post of posts) {
			sitemap.add(`/blog/${post.slug}`);
		}
		sitemap.add('/resume?activeResume=techResume');
		sitemap.add('/resume?activeResume=musicResume');
		sitemap.add('/resume?activeResume=generalResume');

		return sitemap.render();
	},
};
