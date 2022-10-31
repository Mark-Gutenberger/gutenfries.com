import { Handlers, PageProps } from '$fresh/server.ts';

import * as gfm from 'gfm';

import { Container } from '@/components/Container.tsx';
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
			<Container>
				<h1 className='font-bold text-5xl pt-20'>{post.title}</h1>
				<time className='inline-block mt-4'>
					{new Date(post.publishedAt).toLocaleDateString('en-us', {
						year: 'numeric',
						month: 'long',
						day: 'numeric',
					})}
				</time>
				<style dangerouslySetInnerHTML={{ __html: gfm.CSS }} />
				<article
					className='mt-12 markdown-body'
					dangerouslySetInnerHTML={{ __html: gfm.render(post.content) }}
				/>
			</Container>
		</>
	);
}
