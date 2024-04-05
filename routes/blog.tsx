import { Handlers, PageProps } from '$fresh/server.ts';
import { Routes } from '@/routes.ts';
import { Navbar } from '@/components/Navbar.tsx';
import { listPosts, Post } from '@/utils/blogPosts.ts';

import { BlogPostPreview } from '@/components/BlogPostPreview.tsx';
import { Footer } from '@/components/Footer.tsx';
import { Head } from '@/components/Head.tsx';
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

export default function BlogPage(props: PageProps<Data>) {
	const { posts } = props.data;
	return (
		<>
			<Head PageProps={props} />
			<Navbar
				active={Routes.blog}
			/>
			<NoScript />
			<main
				id='main-content'
				className='bg-gray-100 dark:bg-gray-900 p-6 pt-20 text-gray-800 dark:text-gray-200 transition'
			>
				<section className='flex flex-wrap mx-auto md:px-10 py-40 container'>
					<ul>
						{posts.map((post, i) => (
							<li className={i === 0 ? '' : 'border-t'}>
								<BlogPostPreview post={post} />
							</li>
						))}
					</ul>
				</section>
			</main>
			<Footer />
		</>
	);
}
