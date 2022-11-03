import { Handlers, PageProps } from '$fresh/server.ts';

import * as gfm from 'gfm';

import 'https://esm.sh/prismjs@1.27.0/components/prism-typescript?no-check';
import 'https://esm.sh/prismjs@1.27.0/components/prism-bash?no-check';
import 'https://esm.sh/prismjs@1.27.0/components/prism-rust?no-check';

import { Navbar } from '@/components/Navbar.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { Head } from '@/components/Head.tsx';
import { loadPost, Post } from '@/utils/blogPosts.ts';

interface Data {
	post: Post;
}

export const handler: Handlers<Data> = {
	async GET(_req, ctx) {
		const post = await loadPost(ctx.params.slug);
		if (!post) {
			return ctx.renderNotFound();
		}
		return ctx.render({ ...ctx.state, post });
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
				className='font-[fira] bg-gray-100 dark:bg-gray-900'
			>
				<section className='p-4 pt-20'>
					<div className='rounded-t-lg bg-white dark:bg-[#0d1117] text-gray-900 dark:text-gray-50 text-center p-10 mt-12 shadow-xl'>
						<h1 className='font-bold text-5xl'>{post.title}</h1>
						<time className='inline-block mt-4'>
							{new Date(post.publishedAt).toLocaleDateString('en-us', {
								year: 'numeric',
								month: 'long',
								day: 'numeric',
							})}
						</time>
					</div>
					<style dangerouslySetInnerHTML={{ __html: gfm.CSS }} />
					<article
						data-color-mode='auto'
						data-light-theme='light'
						data-dark-theme='dark'
						className='rounded-b-lg shadow-xl p-10 markdown-body'
						dangerouslySetInnerHTML={{ __html: gfm.render(post.content) }}
					/>
				</section>
			</main>
		</>
	);
}
