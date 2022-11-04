import { Post } from '@/utils/blogPosts.ts';

function BlogPostPreview(props: { post: Post }) {
	const { post } = props;
	return (
		<li className='border-t'>
			<a
				href={`/blog/${post.slug}`}
				className='p-12 group grid sm:grid-cols-3 text-gray-800 dark:text-gray-100'
			>
				<time>
					{new Date(post.publishedAt).toDateString() ?? 'Error Parsing Date'}
				</time>
				<div className='sm:col-span-2'>
					<h2 className='text-2xl font-bold group-hover:underline'>{post.title}</h2>
					<p className='mt-2'>{post.description}</p>
				</div>
			</a>
		</li>
	);
}

export { BlogPostPreview };
