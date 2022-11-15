import { Handlers, PageProps } from '$fresh/server.ts';
import { asset } from '$fresh/runtime.ts';

import * as gfm from 'gfm';

import { Navbar } from '@/components/Navbar.tsx';
import { Footer } from '@/components/Footer.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { Head } from '@/components/Head.tsx';
import { loadPost, Post } from '@/utils/blogPosts.ts';

// any langue I am likely to use
import 'https://esm.sh/prismjs@1.27.0/components/prism-typescript?no-check';
import 'https://esm.sh/prismjs@1.27.0/components/prism-javascript?no-check';
import 'https://esm.sh/prismjs@1.27.0/components/prism-scss?no-check';
import 'https://esm.sh/prismjs@1.27.0/components/prism-css?no-check';
import 'https://esm.sh/prismjs@1.27.0/components/prism-jsx?no-check';
import 'https://esm.sh/prismjs@1.27.0/components/prism-tsx?no-check';
import 'https://esm.sh/prismjs@1.27.0/components/prism-rust?no-check';
import 'https://esm.sh/prismjs@1.27.0/components/prism-bash?no-check';
import 'https://esm.sh/prismjs@1.27.0/components/prism-diff?no-check';
import 'https://esm.sh/prismjs@1.27.0/components/prism-json?no-check';
import 'https://esm.sh/prismjs@1.27.0/components/prism-c?no-check';
import 'https://esm.sh/prismjs@1.27.0/components/prism-cpp?no-check';
import 'https://esm.sh/prismjs@1.27.0/components/prism-dart?no-check';
import 'https://esm.sh/prismjs@1.27.0/components/prism-yaml?no-check';
import 'https://esm.sh/prismjs@1.27.0/components/prism-toml?no-check';

interface Data {
	post: Post;
}

export const handler: Handlers<Data> = {
	async GET(_req, ctx) {
		const post = await loadPost(ctx.params.slug);

		if (!post) {
			return ctx.renderNotFound();
		}

		const content = gfm.render(post.content);

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

			<Navbar active='blog' />

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
