import { Handlers, PageProps } from '$fresh/server.ts';
import { loadPost, Post } from '@/utils/blogPosts.ts';
import { asset } from '$fresh/runtime.ts';
import { renderMarkdown } from '@/utils/markdown.ts';

interface Data {
	post: Post;
}

export const handler: Handlers<Data> = {
	async GET(_req, ctx) {
		const post = await loadPost(ctx.params.slug);

		if (!post) {
			return ctx.renderNotFound();
		}

		const content = renderMarkdown(post.content);

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
		<section>
			<div className='bg-gray-100 dark:bg-gray-900 mt-12 p-10 text-center text-gray-900 dark:text-gray-200 transition'>
				<h1 className='font-bold text-5xl'>{post.title}</h1>
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
				className='shadow-xl p-10 rounded-b-lg m markdown-body'
				dangerouslySetInnerHTML={{ __html: post.content }}
			/>
		</section>
	);
}
