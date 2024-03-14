interface ImageCardProps {
	src: string;
	alt: string;
	title: string;
	description: string;
}

const ImageCard = ({ src, alt, title, description }: ImageCardProps) => {
	return (
		<div className='lg:my-auto mb-64 xl:mb-10 xl:py-12 w-full lg:w-1/2 overflow-hidden'>
			<img
				// crop to 16:9 from the top
				className='object-left-top shadow-lg rounded-lg w-full h-96 object-cover'
				src={src}
				alt={alt}
			/>
			<div className='bg-gray-600 bg-opacity-25 shadow-lg mx-6 px-6 py-4 rounded-b-lg'>
				<h3 className='mb-2 font-bold text-xl'>{title}</h3>
				<p className='text-base text-gray-700 dark:text-gray-300'>
					{description}
				</p>
			</div>
		</div>
	);
};

export default ImageCard;
