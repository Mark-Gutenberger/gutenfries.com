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
					<title>Mark Gutenberger's Blog</title>
					<link>https://gutenfries.deno.dev/blog</link>
					<description>Mark Gutenberger's Blog</description>
					<copyright>© Mark Gutenberger - @gutenfries</copyright>
					<language>en-us</language>
					${
			this.#routes
				.map((route) => {
					const { pathName } = route;
					return `<item>
							<title>${pathName}</title>
							<link>${this.#url}${pathName}</link>
							<guid>${this.#url}${pathName}</guid>
							<description>${pathName}</description>
						</item>\n`;
				})
				.join('')
		}
				</channel>
			</rss>`;
	}

	render() {
		return new Response(this.generate().replace(/\t/g, ''), {
			headers: {
				'Content-Type': 'application/xml',
				'Cache-Control': 'no-cache',
			},
		});
	}
}
