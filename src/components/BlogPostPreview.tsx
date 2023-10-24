import { Post } from '@/src/utils/blogPosts.ts';

function BlogPostPreview(props: { post: Post }) {
	const { post } = props;
	return (
		<a
			href={`/blog/${post.slug}`}
			className='grid p-12 text-gray-800 group sm:grid-cols-3 dark:text-gray-200'
		>
			<time>
				{new Date(post.publishedAt).toDateString() ?? 'Error Parsing Date'}
			</time>
			<div className='sm:col-span-2'>
				<h2 className='text-2xl font-bold group-hover:underline'>{post.title}</h2>
				<p className='mt-2'>{post.description}</p>
			</div>
		</a>
	);
}

export { BlogPostPreview };
