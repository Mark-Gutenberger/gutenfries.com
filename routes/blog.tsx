import { Handlers, PageProps } from '$fresh/server.ts';
import { listPosts, Post } from '@/utils/blogPosts.ts';
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

export default function BlogPage(props: PageProps<Data>) {
	const { posts } = props.data;
	return (
		<>
			<section className='flex flex-wrap mx-auto md:px-10 py-40 container'>
				<ul>
					{posts.map((post, i) => (
						<li className={i === 0 ? '' : 'border-t'}>
							<BlogPostPreview post={post} />
						</li>
					))}
				</ul>
			</section>
		</>
	);
}
