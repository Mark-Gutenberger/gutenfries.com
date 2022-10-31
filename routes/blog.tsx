/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { Handlers, PageProps } from '$fresh/server.ts';

import { listPosts, Post } from '@/utils/blogPosts.ts';

import { Container } from '@/components/Container.tsx';
import { BlogPostPreview } from '@/components/BlogPostPreview.tsx';

interface State {
	locales: string[];
}

interface Data extends State {
	posts: Post[];
}

export const handler: Handlers<Data, State> = {
	async GET(_req, ctx) {
		const posts = await listPosts();
		return ctx.render({ ...ctx.state, posts });
	},
};

export default function Home(props: PageProps<Data>) {
	const { posts } = props.data;
	return (
		<>
			<header className='bg-yellow-200 relative min-h-[30vh]'>
				<Container>
					<h1 className='text-4xl lg:text-8xl font-bold absolute bottom-6 flex items-center'>
						Joe mama
					</h1>
				</Container>
			</header>
			<main>
				<Container>
					<ul className='mt-16'>
						{posts.map((post) => <BlogPostPreview post={post} />)}
					</ul>
				</Container>
			</main>
		</>
	);
}
