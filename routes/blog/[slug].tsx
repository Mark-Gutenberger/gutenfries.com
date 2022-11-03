import { Handlers, PageProps } from '$fresh/server.ts';

import * as gfm from 'gfm';

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
				className='font-[fira]'
			>
				<section className='p-4 pt-20'>
					<div className='rounded-lg bg-white text-center text-black p-10 mt-12'>
						<h1 className='font-bold text-5xl pt-20'>{post.title}</h1>
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
						className='rounded-lg p-10 -mt-5 markdown-body'
						dangerouslySetInnerHTML={{ __html: gfm.render(post.content) }}
					/>
				</section>
			</main>
		</>
	);
}
