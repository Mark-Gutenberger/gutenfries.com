import { Handlers, PageProps } from '$fresh/server.ts';

import * as gfm from 'gfm';

import { Navbar } from '@/components/Navbar.tsx';
import { Footer } from '@/components/Footer.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { Head } from '@/components/Head.tsx';
import { loadPost, Post } from '@/utils/blogPosts.ts';

// any langue I am likely to use
import 'https://esm.sh/prismjs@1.27.0/components/prism-typescript?no-check';
import 'https://esm.sh/prismjs@1.27.0/components/prism-javascript?no-check';
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
	showAds: boolean;
}

export const handler: Handlers<Data> = {
	async GET(req, ctx) {
		const post = await loadPost(ctx.params.slug);
		const url = new URL(req.url);
		const showAds = url.searchParams.get('showAds') ? true : false;

		if (!post) {
			return ctx.renderNotFound();
		}

		const content = gfm.render(post.content, {
			allowIframes: true,
		});

		if (!showAds) {
			return ctx.render({
				post: {
					...post,
					content: content,
				},
				showAds: false,
			});
		}

		const ad = `<ins
						class="adsbygoogle"
						data-ad-client="ca-pub-5497887777167174"
						data-ad-slot="1062273062"
						data-ad-format="auto"
						data-ad-layout="in-article"
						style="display:block;text-align:center"
					></ins>`;
		const contentWithAds = content.replaceAll('<p>PLACE AD HERE</p>', ad);

		return ctx.render(
			{
				post: {
					...post,
					content: contentWithAds,
				},
				showAds: true,
			},
		);
	},
};

export default function PostPage(props: PageProps<Data>) {
	const { post } = props.data;
	const { showAds } = props.data;

	return (
		<>
			<Head PageProps={props} />

			{/* Google ads */}
			{showAds
				? (
					<script
						src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5497887777167174'
						crossOrigin='anonymous'
						async
						// defer
					>
					</script>
				)
				: null}

			<Navbar active='blog' />

			<NoScript />

			<main
				id='main-content'
				className='font-[fira] bg-gray-100 dark:bg-gray-900 p-4 pt-20'
			>
				<div className='rounded-t-lg bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200 text-center p-10 mt-12 shadow-xl'>
					<h1 className='text-5xl font-bold'>{post.title}</h1>
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
					className='p-10 rounded-b-lg shadow-xl markdown-body'
					dangerouslySetInnerHTML={{ __html: post.content }}
				/>
			</main>

			<Footer />

			{/* inject ads */}
			{showAds
				? (
					<script>
						{`(adsbygoogle = window.adsbygoogle || []).push({});`}
					</script>
				)
				: null}
		</>
	);
}
