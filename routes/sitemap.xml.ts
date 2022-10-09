import { Handlers } from '$fresh/server.ts';

import { SitemapContext } from 'fresh_seo';

import manifest from '@/fresh.gen.ts';

export const handler: Handlers = {
	GET() {
		const sitemap = new SitemapContext('https://gutenfries.deno.dev', manifest);
		return sitemap.render();
	},
};
