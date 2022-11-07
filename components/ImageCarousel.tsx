import { asset } from '$fresh/runtime.ts';
import Icons from '@/utils/Icons.tsx';

interface Image {
	src: string;
	title: string;
	description: string;
	alt: string;
}

function ImageCarousel(props: { images: Image[] }) {
	// only allow 3 images
	const carouselImages = props.images.slice(0, 3);

	return (
		<>
			<link
				rel='stylesheet'
				href={asset('/styles/carousel.css')}
			/>

			<div className='relative w-full mb-64 overflow-hidden lg:my-auto lg:w-1/2 xl:py-12 xl:mb-10'>
				<input
					type='radio'
					id='carousel-1'
					name='carousel'
					aria-hidden='true'
					hidden={true}
					checked={true}
				/>

				<div
					className='absolute opacity-0'
					class='carousel-item'
				>
					<img
						className='w-full rounded-lg shadow-lg'
						src={carouselImages[0].src}
						alt={carouselImages[0].alt}
					/>
					<div className='px-6 py-4 mx-6 bg-gray-600 bg-opacity-25 rounded-b-lg shadow-lg'>
						<h3 className='mb-2 text-xl font-bold'>{carouselImages[0].title}</h3>
						<p className='mb-6 text-base text-gray-700 dark:text-gray-300'>
							{carouselImages[0].description}
						</p>
					</div>
				</div>
				<input
					type='radio'
					id='carousel-2'
					name='carousel'
					aria-hidden='true'
					hidden={true}
				/>

				<div
					className='absolute opacity-0'
					class='carousel-item'
				>
					<img
						className='w-full rounded-lg shadow-lg'
						src={carouselImages[1].src}
						alt={carouselImages[1].alt}
					/>
					<div className='px-6 py-4 mx-6 bg-gray-600 bg-opacity-25 rounded-b-lg shadow-lg'>
						<h3 className='mb-2 text-xl font-bold'>{carouselImages[1].title}</h3>
						<p className='mb-6 text-base text-gray-700 dark:text-gray-300'>
							{carouselImages[1].description}
						</p>
					</div>
				</div>
				<input
					type='radio'
					id='carousel-3'
					name='carousel'
					aria-hidden='true'
					hidden={true}
				/>

				<div
					className='absolute opacity-0'
					class='carousel-item'
				>
					<img
						className='w-full rounded-lg shadow-lg'
						src={carouselImages[2].src}
						alt={carouselImages[2].alt}
					/>
					<div className='px-6 py-4 mx-6 bg-gray-600 bg-opacity-25 rounded-b-lg shadow-lg'>
						<h3 className='mb-2 text-xl font-bold'>{carouselImages[2].title}</h3>
						<p className='mb-6 text-base text-gray-700 dark:text-gray-300'>
							{carouselImages[2].description}
						</p>
					</div>
				</div>

				<label
					for='carousel-3'
					class='control-1'
					className='absolute dark:text-gray-100 text-gray-600 cursor-pointer hidden z-10 w-12 h-12 left-[2%] bg-gray-300 bg-opacity-50 rounded-full cursor-pointer top-1/2 dark:bg-gray-700 dark:bg-opacity-50'
				>
					<i className='flex items-center justify-center w-full h-full'>
						<Icons.ChevronLeft className='inline-block' />
					</i>
				</label>
				<label
					for='carousel-3'
					class='control-2'
					className='absolute dark:text-gray-100 text-gray-600 cursor-pointer hidden z-10 w-12 h-12 right-[2%] bg-gray-300 bg-opacity-50 rounded-full cursor-pointer top-1/2 dark:bg-gray-700 dark:bg-opacity-50'
				>
					<i className='flex items-center justify-center w-full h-full'>
						<Icons.ChevronRight className='inline-block' />
					</i>
				</label>

				<label
					for='carousel-2'
					class='control-1'
					className='absolute dark:text-gray-100 text-gray-600 cursor-pointer hidden z-10 w-12 h-12 right-[2%] bg-gray-300 bg-opacity-50 rounded-full cursor-pointer top-1/2 dark:bg-gray-700 dark:bg-opacity-50'
				>
					<i className='flex items-center justify-center w-full h-full'>
						<Icons.ChevronRight className='inline-block' />
					</i>
				</label>

				<label
					for='carousel-1'
					class='control-3'
					className='absolute dark:text-gray-100 text-gray-600 cursor-pointer hidden z-10 w-12 h-12 right-[2%] bg-gray-300 bg-opacity-50 rounded-full cursor-pointer top-1/2 dark:bg-gray-700 dark:bg-opacity-50'
				>
					<i className='flex items-center justify-center w-full h-full'>
						<Icons.ChevronRight className='inline-block' />
					</i>
				</label>
				<label
					for='carousel-1'
					class='control-2'
					className='absolute dark:text-gray-100 text-gray-600 cursor-pointer hidden z-10 w-12 h-12 left-[2%] bg-gray-300 bg-opacity-50 rounded-full cursor-pointer top-1/2 dark:bg-gray-700 dark:bg-opacity-50'
				>
					<i className='flex items-center justify-center w-full h-full'>
						<Icons.ChevronLeft className='inline-block' />
					</i>
				</label>
				<label
					for='carousel-2'
					class='control-3'
					className='absolute dark:text-gray-100 text-gray-600 cursor-pointer hidden z-10 w-12 h-12 left-[2%] bg-gray-300 bg-opacity-50 rounded-full cursor-pointer top-1/2 dark:bg-gray-700 dark:bg-opacity-50'
				>
					<i className='flex items-center justify-center w-full h-full'>
						<Icons.ChevronLeft className='inline-block' />
					</i>
				</label>

				<ul
					class='carousel-indicators'
					className='absolute bottom-0 z-10 flex justify-center w-full mb-4 list-none xl:mb-16'
				>
					<li className='inline-block'>
						<label
							for='carousel-1'
							class='carousel-bullet'
							className='block mx-1 text-gray-100 cursor-pointer hover:text-gray-300 active:text-gray-400'
						>
							<Icons.Circle
								fill='currentColor'
								className='inline-block w-3 h-3'
							/>
						</label>
					</li>
					<li className='inline-block'>
						<label
							for='carousel-2'
							class='carousel-bullet'
							className='block mx-1 text-gray-100 cursor-pointer hover:text-gray-300 active:text-gray-400'
						>
							<Icons.Circle
								fill='currentColor'
								className='inline-block w-3 h-3'
							/>
						</label>
					</li>
					<li className='inline-block'>
						<label
							for='carousel-3'
							class='carousel-bullet'
							className='block mx-1 text-gray-100 cursor-pointer hover:text-gray-300 active:text-gray-400'
						>
							<Icons.Circle
								fill='currentColor'
								className='inline-block w-3 h-3'
							/>
						</label>
					</li>
				</ul>
			</div>
		</>
	);
}

export { ImageCarousel };
