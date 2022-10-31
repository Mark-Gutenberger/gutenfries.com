import { Post } from '@/utils/blogPosts.ts';

function BlogPostPreview(props: { post: Post }) {
	const { post } = props;
	return (
		<li className='border-t'>
			<a
				href={`/blog/${post.slug}`}
				className='py-12 group grid sm:grid-cols-3 text-gray-800 dark:text-gray-100'
			>
				<time>
					{new Date(post.publishedAt).toLocaleDateString('en-us', {
						year: 'numeric',
						month: 'long',
						day: 'numeric',
					})}
				</time>
				<div className='sm:col-span-2'>
					<h2 className='text-2xl font-bold group-hover:underline'>{post.title}</h2>
				</div>
			</a>
		</li>
	);
}

export { BlogPostPreview };
