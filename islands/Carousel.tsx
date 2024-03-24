import { useSignal } from '@preact/signals';
import { useEffect, useRef } from 'preact/hooks';
import IconChevronRight from '@tabler/icons/chevron-right.tsx';
import IconChevronLeft from '@tabler/icons/chevron-left.tsx';
import { asset, IS_BROWSER } from '$fresh/runtime.ts';
import { ComponentChild } from 'preact';

const SLIDES = [
	{
		title: 'Software Development',
		description: 'Multi-paradigm systems-level programming in the Rust and C languages.',
		content: (
			<div className='flex'>
				<link
					rel='stylesheet'
					href={asset('/styles/visual-studio-dark.css')}
				/>

				<script type='module'>
					{`import { highlightAll } from 'https://unpkg.com/@speed-highlight/core@1.2.6/dist/index.js';highlightAll();`}
				</script>
				<div className='p-3 rounded-lg text-xs sm:text-sm lg:text-xs xl:text-base grow shj-lang-rs shj-multiline'>
					{`pub struct Marc {
	email: &str,
	loves_dinosaurs: bool,
	skills: Vec<&str>,
}
impl Marc {
	pub fn about() -> Marc {
		Marc {
			email: "gutenfries@gmail.com",
			loves_dinosaurs: true,
			skills: vec![
				"Rust", "C",
				"TypeScript", "Flutter",
				"(P)react", "HTML & CSS",
			],
		}
	}
}`}
				</div>
			</div>
		),
	},
	{
		title: 'Musical Wonders of the World',
		description: 'Reaching youth through the music of different cultures and time periods.',
		content: (
			<div className='flex'>
				<img
					className='bg-gray-200 dark:bg-[#1e1e1e] rounded-lg w-full h-[456px] transition object-center object-cover' // magic number is the height of the code block slide, and magic color is the color of the code block component
					src={asset('/images/mwotw/6C81BFC9-7256-4CBA-BB18-6B4CCBE16F69.png')}
					alt='Musical Wonders of the World'
				/>
			</div>
		),
	},
	{
		title: 'Drumline Instruction',
		description: 'Teaching youth the marching percussive art form.',
		content: (
			<div className='flex'>
				<img
					className='object-left rounded-lg w-full h-[456px] object-cover' // magic number is the height of the code block slide
					src={asset('/images/highschool-drum-tech.jpg')}
					alt='high school drumline rehearsing'
				/>
			</div>
		),
	},
];

interface SlideProps {
	content: ComponentChild;
	description: string;
	title: string;
	className?: string;
	key?: number;
}

function Slide(props: SlideProps) {
	// if (props.className === undefined) props.className = '';
	return (
		<div
			key={props.key}
			className={`${props.className} h-full w-full`}
		>
			{props.content}
			<div className='bg-gray-600 bg-opacity-25 shadow-lg mx-6 px-6 py-4 rounded-b-lg'>
				<h2 className='mb-2 font-bold text-gray-800 text-lg sm:text-xl dark:text-gray-200 transition'>
					{props.title}
				</h2>
				<p className='text-gray-700 text-sm sm:text-base dark:text-gray-300 transition'>
					{props.description}
				</p>
			</div>
		</div>
	);
}

interface CarouselProps {
	slides: {
		title: string;
		description: string;
		content: ComponentChild;
	}[];
	showNavigation: boolean;
	interval: number;
	currentSlide?: number;
	automatic?: boolean;
	className?: string;
}

function Carousel(
	{ slides = SLIDES, showNavigation = true, interval = 3500, ...props }: CarouselProps,
) {
	if (!IS_BROWSER) return <></>;
	const INTERVAL = interval;
	const NAVIGATION_COLOR = `hover:text-gray-300 text-white`;
	const CHEVRON_STYLE = `absolute z-30 w-10 h-10 ${NAVIGATION_COLOR} cursor-pointer`;
	const currentSlide = useSignal(props.currentSlide ? props.currentSlide : 0);
	const automatic = useSignal(props.automatic === false ? false : true);
	const slideshowRef = useRef<HTMLDivElement>(null);

	function slideClassNames(idx = 0) {
		let outgoingSlide = currentSlide.value - 1;
		let incomingSlide = currentSlide.value + 1;
		if (outgoingSlide === -1) outgoingSlide = slides.length - 1;
		if (incomingSlide === slides.length) incomingSlide = 0;
		function TRANSITION_className() {
			if (currentSlide.value === idx) return 'translate-x-0 z-20';
			if (incomingSlide === idx) return 'translate-x-full z-10';
			if (outgoingSlide === idx) return '-translate-x-full z-10';
			return 'translate-x-full';
		}
		return `slide absolute top-0 left-0 transition-all ease-in-out duration-700 transform ${TRANSITION_className()}`;
	}

	function nextSlide() {
		if (slides.length === currentSlide.value + 1) {
			currentSlide.value = 0;
		} else {
			currentSlide.value++;
		}
	}

	function previousSlide() {
		if (currentSlide.value === 0) {
			currentSlide.value = slides.length - 1;
		} else {
			currentSlide.value--;
		}
	}

	function chevronClick(doCallback = () => {}) {
		if (automatic.value) automatic.value = false;
		return doCallback();
	}

	useEffect(() => {
		const interval = setInterval(() => {
			if (automatic.value) nextSlide();
		}, INTERVAL);
		return () => clearInterval(interval);
	}, []);

	function ArrowKeyNavigation() {
		function keydownHandler(event: KeyboardEvent) {
			if (automatic.value) automatic.value = false;
			switch (event.code) {
				case 'ArrowLeft':
					event.preventDefault();
					previousSlide();
					break;
				case 'ArrowRight':
					event.preventDefault();
					nextSlide();
					break;
				default:
					break;
			}
		}
		slideshowRef.current?.addEventListener('keydown', keydownHandler);
		return () => slideshowRef.current?.removeEventListener('keydown', keydownHandler);
	}
	useEffect(ArrowKeyNavigation, []);

	function goToSlide(slide_index = 0) {
		if (automatic.value) automatic.value = false;
		currentSlide.value = slide_index;
	}

	function DotsNavigation() {
		return (
			<div className={'slide_nav z-30 w-full absolute bottom-0 flex justify-center'}>
				{slides.map((_item, idx) => {
					return (
						<button
							className={`px-1 ${NAVIGATION_COLOR}`}
							onClick={() => {
								goToSlide(idx);
							}}
							key={idx}
						>
							<span className='sr-only'>
								Go to slide {idx}
							</span>
							{idx === currentSlide.value
								? (
									<span className='hover:font-bold text-gray-600 hover:text-gray-900 dark:hover:text-gray-200 dark:text-gray-500 not-sr-only'>
										●
									</span>
								)
								: (
									<span className='hover:font-bold text-gray-600 hover:text-gray-900 dark:hover:text-gray-200 dark:text-gray-500 not-sr-only'>
										○
									</span>
								)}
						</button>
					);
				})}
			</div>
		);
	}

	return (
		<div
			ref={slideshowRef}
			className={`slideshow relative flex-1 p-0 overflow-hidden ${props.className}`}
			tabIndex={0}
		>
			<button
				className={`left-0 ${CHEVRON_STYLE}`}
				style='top: calc(50% - 20px)'
				onClick={() => chevronClick(previousSlide)}
			>
				<IconChevronLeft
					size={48}
					className='text-gray-400 hover:text-gray-200'
					aria-hidden='true'
				/>
				<span className='sr-only'>Previous slide</span>
			</button>
			<button
				className={`right-0 ${CHEVRON_STYLE}`}
				style='top: calc(50% - 20px)'
				onClick={() => chevronClick(nextSlide)}
			>
				<IconChevronRight
					size={48}
					className='text-gray-400 hover:text-gray-200'
					aria-hidden='true'
				/>
				<span className='sr-only'>Next slide</span>
			</button>
			{slides.map((slide, idx) => (
				<Slide
					key={idx}
					className={slideClassNames(idx)}
					content={slide.content}
					title={slide.title}
					description={slide.description}
				/>
			))}
			{showNavigation &&
				<DotsNavigation />}
			<Slide
				content={slides[0].content}
				className='opacity-0 pointer-events-none'
				title={slides[0].title}
				description={slides[0].description}
			/>
		</div>
	);
}

export default Carousel;
