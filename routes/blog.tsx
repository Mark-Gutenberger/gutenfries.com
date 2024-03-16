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

export default function Home(props: PageProps<Data>) {
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
				<section className='shadow-xl -mt-6 p-4 rounded-b-lg markdown-body'>
					<ul>
						{posts.map((post) => (
							<li className='border-t'>
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
