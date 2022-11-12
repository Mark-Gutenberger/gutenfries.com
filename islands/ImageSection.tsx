import { useEffect, useState } from 'preact/hooks';
import { JSX } from 'preact';

interface Image {
	src: string;
	alt: string;
	title: string;
	description: string;
}

interface ImageSectionProps {
	images: Image[];
}

const ImageSection = (
	{ images }: ImageSectionProps,
): JSX.Element => {
	const [currentImage, setCurrentImage] = useState<Image>(images[0]);

	// every 5 seconds, change the image
	useEffect(() => {
		const interval = setInterval(() => {
			const currentIndex = images.indexOf(currentImage);
			const nextIndex = currentIndex + 1 >= images.length ? 0 : currentIndex + 1;
			setCurrentImage(images[nextIndex]);
		}, 5000);
		return () => clearInterval(interval);
	}, [currentImage]);

	return (
		<div className='w-full mb-64 overflow-hidden lg:my-auto lg:w-1/2 xl:py-12 xl:mb-10'>
			<img
				// crop to 16:9 from the top
				className='w-full rounded-lg shadow-lg h-96 object-cover object-left-top'
				src={currentImage.src}
				alt={currentImage.alt}
			/>
			<div className='px-6 py-4 mx-6 bg-gray-600 bg-opacity-25 rounded-b-lg shadow-lg'>
				<h3 className='mb-2 text-xl font-bold'>{currentImage.title}</h3>
				<p className='text-base text-gray-700 dark:text-gray-300'>
					{currentImage.description}
				</p>
			</div>
		</div>
	);
};

export default ImageSection;
