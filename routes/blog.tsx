/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { Handlers, PageProps } from '$fresh/server.ts';

import { listPosts, Post } from '@/utils/blogPosts.ts';

import { Footer } from '@/components/Footer.tsx';
import { BlogPostPreview } from '@/components/BlogPostPreview.tsx';
import { Head } from '@/components/Head.tsx';
import { Navbar } from '@/components/Navbar.tsx';
import { NoScript } from '@/components/NoScript.tsx';

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
			<Head PageProps={props} />
			<div className='bg-gray-100 dark:bg-gray-900 font-[fira]'>
				<a
					href='#main-content'
					className='sr-only focus:not-sr-only text-red-500 outline-none focus:outline-none '
				>
					Skip to main content
				</a>
				<Navbar active='blog' />

				<NoScript />
				<main id='main-content'>
					<section className='p-4 pt-20'>
						{/* <Container> */}
						<ul className='mt-16'>
							{posts.map((post) => <BlogPostPreview post={post} />)}
						</ul>
						{/* </Container> */}
					</section>
				</main>
				<Footer />
			</div>
		</>
	);
}
