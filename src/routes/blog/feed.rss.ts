import { Handlers } from '$fresh/server.ts';
import { listPosts } from '@/src/utils/blogPosts.ts';
import { truncate } from '@/src/utils/trunacate.ts';

export const handler: Handlers = {
	async GET() {
		const posts = await listPosts();
		let postSlugs: string[];

		if (posts) {
			postSlugs = posts.map((post) => post.slug);
		} else {
			console.log('Error: No posts found');
			postSlugs = [];
		}

		const sitemap = new RssFeed(
			'https://gutenfries.deno.dev/blog/',
			postSlugs,
		);
		return await sitemap.render();
	},
};

/**
 * creates a new RSS feed
 * @param url the url of the feed
 * @param title the title of the feed
 */
class RssFeed {
	/**
	 * base url of the website
	 */
	#url: string;
	/**
	 * routes that should be added to the rss feed
	 */
	#routes: string[] = [];

	constructor(url: string, routes: string[] = []) {
		this.#url = url;
		this.#routes = routes;
	}

	/**
	 * Adds a route
	 */
	add(route: string) {
		this.#routes.push(route);
		return this;
	}

	/*
	remove(route: string) {
		this.#routes = this.#routes.filter((r) => r !== route);
		return this;
	}
	*/

	/**
	 * Creates a `Promise<string>` with the rss feed as string of rss+xml
	 */
	async generate(): Promise<string> {
		// find the last post that has been updated
		const posts = await listPosts();

		const lastUpdated = posts.map(
			(post) => post.publishedAt,
		).sort(
			(a, b) => b.getTime() - a.getTime(),
		)[0];

		return `<?xml version="1.0" encoding="UTF-8"?>
			<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
				<channel>
					<atom:link href="${this.#url}feed.rss" rel="self" type="application/rss+xml" />
					<title>Marc Gutenberger's Blog</title>
					<link>${this.#url}</link>
					<description>Marc Gutenberger's Blog</description>
					<copyright>Copyright © Marc Gutenberger gutenfries@gmail.com under the MIT License https://github.com/gutenfries/gutenfries.deno.dev/blob/main/LICENSE.md</copyright>
					<language>en-us</language>
					<generator>Deno Fresh SSR</generator>
					<lastBuildDate>${lastUpdated.toUTCString()}</lastBuildDate>
					<docs>${this.#url}</docs>
					<managingEditor>gutenfries@gmail.com</managingEditor>
					<webMaster>gutenfries@gmail.com</webMaster>
					<image>
						<url>https://gutenfries.deno.dev/images/code.svg</url>
						<title>Marc Gutenberger's Blog</title>
						<link>${this.#url}</link>
					</image>
					${
			this.#routes
				.map((route) => {
					const post = posts.find((post) => post.slug === route);
					if (!post) {
						return '<!-- Error: post not found -->';
					}
					return `<item>
							<title>${post.title}</title>
							<link>${this.#url}${route}</link>
							<pubDate>${post.publishedAt.toUTCString()}</pubDate>
							<guid isPermaLink="true">${this.#url}${route}</guid>
							<description>${truncate(post.description, 100)}</description>
						</item>\n`;
				})
				.join('')
		}
				</channel>
			</rss>`;
	}

	/**
	 * Returns a `Promise<Response>` with the created rss feed
	 */
	async render(): Promise<Response> {
		// await promise
		const rss = await this.generate();
		// remove extra tabs and newlines
		const body = rss.replace(/\t/g, '').replace(/(\r\n|\n|\r)/gm, '');
		return new Response(
			body,
			{
				headers: {
					// avoid using content type 'application/rss+xml', as it isn't supported everywhere
					'Content-Type': 'application/xml',
				},
			},
		);
	}
}
