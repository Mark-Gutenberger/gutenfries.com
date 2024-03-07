import { extract } from '$std/encoding/front_matter.ts';

/**
 * Data type for a blog post
 */
interface Post {
	/**
	 * The slug of the post (used for both the URL and the filename)
	 */
	slug: string;
	/**
	 * The title of the post
	 */
	title: string;
	/**
	 * The date the post was published
	 */
	publishedAt: Date;
	/**
	 * The content (body) of the post
	 */
	content: string;
	/**
	 * The description of the post (used for RSS & previews)
	 */
	description: string;
}

/**
 * Reads a blog post from a given file path and returns it as `Promise<Post>`
 * If the file (post) does not exist, it returns `Promise<null>` and an error is thrown
 */
async function loadPost(slug: string): Promise<Post | null> {
	let text: string;
	try {
		text = await Deno.readTextFile(`./src/static/blogPosts/${slug}.md`);
	} catch (e) {
		if (e instanceof Deno.errors.NotFound) {
			return null;
		}
		console.error({ e });
		throw e;
	}
	const { attrs, body } = extract(text);
	// make post smaller by remove unnecessary content to load faster over network
	const content = body.trim();
	// reassign the variable to use type coercion (isn't typescript awesome? *sarcasm*)
	const params = attrs as Record<string, string>;
	const publishedAt = new Date(params.published_at) ?? new Date();
	const { title, description } = params;
	return {
		slug,
		title,
		publishedAt,
		content,
		description,
	};
}

/**
 * Reads all blog posts from the static `blogPosts` directory and returns the metadata
 * from each post as `Promise<Post[]>`
 */
async function listPosts(): Promise<Post[]> {
	const promises = [];
	for await (const entry of Deno.readDir('./src/static/blogPosts')) {
		// Skip non-markdown files
		if (!entry.name.endsWith('.md')) continue;
		// remove the .md extension
		const slug = entry.name.replace('.md', '');
		promises.push(loadPost(slug));
	}
	const posts = await Promise.all(promises) as Post[];
	posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
	return posts;
}

export { listPosts, loadPost };
export type { Post };
