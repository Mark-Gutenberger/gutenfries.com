import { Handlers } from '$fresh/server.ts';
import { IS_BROWSER } from '$fresh/runtime.ts';
import { listPosts } from '@/utils/blogPosts.ts';

export const handler: Handlers = {
	async GET() {
		const posts = await listPosts();
		const sitemap = new RssFeedContext(
			'https://gutenfries.deno.dev/blog',
		);
		// add all the blog urls
		for (const post of posts) {
			sitemap.add(post.slug);
		}
		return sitemap.render();
	},
};

interface Route {
	pathName: string;
}

class RssFeedContext {
	#url: string;
	#routes: Array<Route> = [];

	constructor(url: string) {
		this.#url = url;
	}

	get routes() {
		return this.#routes;
	}

	add(route: string) {
		this.#routes.push({
			pathName: route.replace(/(^\/?)|(\/?$)/, '/'),
		});

		return this;
	}

	set(route: string) {
		const i = this.#routes.findIndex(
			(v) => v.pathName === route.replace(/(^\/?)|(\/?$)/, '/'),
		);
		if (i === -1) return this;
		return this;
	}

	remove(route: string) {
		this.#routes = this.#routes.filter((r) => r.pathName !== route);
		return this;
	}

	generate() {
		const xmlHeaders = '<?xml version="1.0" encoding="UTF-8"?>';
		const rssVersion = '2.0';
		return `${xmlHeaders}
			<rss version="${rssVersion}" xmlns:atom="http://www.w3.org/2005/Atom">
				<channel>
					<atom:link href="${this.#url}/feed.rss" rel="self" type="application/rss+xml" />
					<title><![CDATA[ Mark Gutenberger's Blog ]]></title>
					<link>https://gutenfries.deno.dev/blog</link>
					<description><![CDATA[ Mark Gutenberger's Blog ]]></description>
					<copyright>© Mark Gutenberger - @gutenfries</copyright>
					<language>en-us</language>
					<generator>https://gutenfries.deno.dev</generator>
					<image>
						<url>https://gutenfries.deno.dev/images/penguin-icon.png</url>
						<title><![CDATA[ Mark Gutenberger's Blog ]]></title>
						<link>https://gutenfries.deno.dev/blog</link>
					</image>
					${
			this.#routes
				.map((route) => {
					const { pathName } = route;
					return `<item>
							<title><![CDATA[ ${pathName} ]]></title>
							<link>${this.#url}${pathName}</link>
							<guid isPermaLink="true">${this.#url}${pathName}</guid>
							<description><![CDATA[ ${pathName}]]></description>
						</item>\n`;
				})
				.join('')
		}
				</channel>
			</rss>`;
	}

	render() {
		return new Response(this.generate().replace(/\t/g, '').replace(/(\r\n|\n|\r)/gm, ''), {
			headers: {
				'Content-Type': 'application/xml',
				'Cache-Control': 'no-cache',
			},
		});
	}
}
