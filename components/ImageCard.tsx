interface ImageCardProps {
	src: string;
	alt: string;
	title: string;
	description: string;
}

const ImageCard = ({ src, alt, title, description }: ImageCardProps) => {
	return (
		<div className='w-full mb-64 overflow-hidden lg:my-auto lg:w-1/2 xl:py-12 xl:mb-10'>
			<img
				// crop to 16:9 from the top
				className='w-full rounded-lg shadow-lg h-96 object-cover object-left-top'
				src={src}
				alt={alt}
			/>
			<div className='px-6 py-4 mx-6 bg-gray-600 bg-opacity-25 rounded-b-lg shadow-lg'>
				<h3 className='mb-2 text-xl font-bold'>{title}</h3>
				<p className='text-base text-gray-700 dark:text-gray-300'>
					{description}
				</p>
			</div>
		</div>
	);
};

export default ImageCard;
