import { Post } from '@/utils/blogPosts.ts';

function BlogPostPreview(props: { post: Post }) {
	const { post } = props;
	return (
		<a
			href={`/blog/${post.slug}`}
			className='grid sm:grid-cols-3 p-12 text-gray-800 dark:text-gray-200 group'
		>
			<time>
				{new Date(post.publishedAt).toDateString() ?? 'Error Parsing Date'}
			</time>
			<div className='sm:col-span-2'>
				<h2 className='font-bold text-2xl group-hover:underline'>{post.title}</h2>
				<p className='mt-2'>{post.description}</p>
			</div>
		</a>
	);
}

export { BlogPostPreview };
