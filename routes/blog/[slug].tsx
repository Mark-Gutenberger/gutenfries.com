import { Handlers, PageProps } from '$fresh/server.ts';
import { Navbar, Routes } from '@/components/Navbar.tsx';
import { loadPost, Post } from '@/utils/blogPosts.ts';

import { Footer } from '@/components/Footer.tsx';
import { Head } from '@/components/Head.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { asset } from '$fresh/runtime.ts';
import { render as renderGFM } from 'gfm';

interface Data {
	post: Post;
}

export const handler: Handlers<Data> = {
	async GET(_req, ctx) {
		const post = await loadPost(ctx.params.slug);

		if (!post) {
			return ctx.renderNotFound();
		}

		const content = renderGFM(post.content);

		return ctx.render(
			{
				post: {
					...post,
					content,
				},
			},
		);
	},
};

export default function PostPage(props: PageProps<Data>) {
	const { post } = props.data;

	return (
		<>
			<Head PageProps={props} />

			<Navbar active={Routes.blog} />

			<NoScript />

			<main
				id='main-content'
				className='p-4 pt-20 bg-gray-100 dark:bg-gray-900'
			>
				<div className='p-10 mt-12 text-center text-gray-900 bg-gray-100 rounded-t-lg shadow-xl dark:bg-gray-900 dark:text-gray-200'>
					<h1 className='text-5xl font-bold'>{post.title}</h1>
					<time className='inline-block mt-4'>
						{new Date(post.publishedAt).toLocaleDateString('en-us', {
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}
					</time>
				</div>
				<link rel='stylesheet' href={asset('/styles/markdown.css')} />
				<article
					data-color-mode='auto'
					data-light-theme='light'
					data-dark-theme='dark'
					class='markdown-body'
					className='p-10 rounded-b-lg shadow-xl'
					dangerouslySetInnerHTML={{ __html: post.content }}
				/>
			</main>

			<Footer />
		</>
	);
}
