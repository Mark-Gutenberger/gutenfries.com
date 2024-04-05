import { PageProps } from '$fresh/server.ts';
import { Routes } from '@/routes.ts';
import { Navbar } from '@/components/Navbar.tsx';
import { Footer } from '@/components/Footer.tsx';
import { Head } from '@/components/Head.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import IconQuote from '@tabler/icons/quote.tsx';
import { asset } from '$fresh/runtime.ts';

export default function MWOTWPage(props: PageProps) {
	return (
		<>
			<Head PageProps={props} />
			<Navbar
				active={Routes.mwotw}
			/>
			<NoScript />
			<main
				id='main-content'
				className='bg-gray-100 dark:bg-gray-900 p-6 pt-20 text-gray-800 dark:text-gray-200 transition'
			>
				<section className='flex flex-wrap mx-auto md:px-10 py-40 container'>
					<img
						className='mb-10 rounded-lg w-full lg:w-1/2 aspect-square object-center object-cover' // magic number is the height of the code block slide
						src={asset('/images/mwotw/9186A9E2-5A86-49DF-A899-1213A8BE3A4D.jpg')}
						alt='Musical Wonders of the World'
					/>
					<div className='flex flex-col flex-wrap mb-10 lg:py-6 lg:pl-12 w-full lg:w-1/2 text-left'>
						<div className='flex flex-col flex-grow items-center lg:items-start mb-5 text-center'>
							<h2 className='flex justify-center items-center w-full font-semibold text-5xl text-center md:text-6xl xl:text-7xl'>
								A Musical World of Wonders
							</h2>
						</div>
						<div className='flex flex-col flex-grow items-center lg:items-start mb-5'>
							<p className='lg:p-6 text-2xl text-gray-700 sm:text-3xl dark:text-gray-300 !leading-loose transition'>
								<span className='font-bold text-3xl sm:text-4xl'>
									<span className='underline'>M</span>usical{' '}
									<span className='underline'>W</span>onders{' '}
									<span className='underline'>o</span>f{' '}
									<span className='underline'>t</span>he{' '}
									<span className='underline'>W</span>orld
								</span>{' '}
								is a music program that encourages listeners analyze and appreciate
								music from various time periods and cultures. The ultimate goal with
								this is to help connect us to other societies/parts of the world
								while instilling a sense of international unity and understanding.
								<br />― Rene Lecour, Co-Founder
							</p>
						</div>
					</div>
				</section>

				{
					/* <section className='mx-auto px-5 py-32 container'>
					<div className='flex flex-col justify-end w-full text-center'>
						<span className='m-6 mx-auto'>
							<IconQuote size={48} />
						</span>
						<blockquote className='text-xl'>
							We know that you, as a bee, have worked your whole life to get to the
							point where you can work for your whole life. Honey begins when our
							valiant Pollen Jocks bring the nectar to the hive. Our top-secret
							formula is automatically color-corrected, scent-adjusted and
							bubble-contoured into this soothing sweet syrup with its distinctive
							golden glow you know as Honey!
						</blockquote>

						<hr className='border-1 border-purple-500 bg-purple-500 mx-auto my-5 rounded-lg w-2/5 h-0' />
						<h2 className='text-3xl'>
							Marc Gutenberger
						</h2>
						<p className='text-xl'>
							MWOTW Co-Founder
						</p>
					</div>
				</section> */
				}
			</main>
			<Footer />
		</>
	);
}
