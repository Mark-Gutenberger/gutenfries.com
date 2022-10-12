/** @jsx h */
import { h } from 'preact';

import { asset } from '$fresh/runtime.ts';
import { PageProps } from '$fresh/server.ts';

import { MainLayout } from '@/layouts/MainLayout.tsx';

import Icons from '@/components/Icons.tsx';

function HomePage(PageProps: PageProps) {
	return (
		<MainLayout PageProps={PageProps}>
			<section className='snap-start text-gray-800 body-font'>
				<div className='container mx-auto flex px-5 pb-32 pt-8 md:flex-row flex-col items-center'>
					<div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
						<h1 className='animate-fade-in-0.5 title-font text-6xl mb-4 font-medium text-gray-300 hover:text-white'>
							<u>
								Hi there
							</u>
						</h1>
						<br className='hidden lg:inline-block' />
						<h2 className='animate-fade-in-0.5 title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-300 hover:text-white'>
							I'm Mark Gutenberger
						</h2>
						<p className='animate-fade-in-1 text-lg text-gray-300 hover:text-white mb-8'>
							I am a{' '}
							<u>
								<strong>musician</strong>
							</u>{' '}
							and{' '}
							<u>
								<strong>software developer</strong>
							</u>{' '}
							from WI, USA.
						</p>
						{
							/* 	<div className='flex justify-center'>
							<button type='button' className='animate-fade-in-0.5 inline-flex text-gray-800 hover:text-gray-700 bg-gray-300 border-0 py-2 px-6  hover:bg-white rounded-lg text-lg'>
								Two Buttons
							</button>
							<button type='button' className='animate-fade-in-0.5 ml-4 inline-flex text-gray-300 hover:text-white hover:text-white bg-gray-800 border-0 py-2 px-6  hover:bg-gray-700 rounded-lg text-lg'>
								That Do Nothing
							</button>
						</div> */
						}
					</div>
					<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
						<img
							className='object-cover object-center rounded-lg'
							alt='Mark Gutenberger'
							src={asset('images/mark-gutenberger-05.jpg')}
						/>
					</div>
				</div>
			</section>
			<section className='snap-start text-gray-800 body-font border-gray-300'>
				<div className='container px-5 py-32 mx-auto'>
					<div className='flex flex-col text-center w-full mb-20'>
						<h2 className='text-xs text-blue-500 tracking-widest font-medium title-font mb-1'>
							subtext that says something
						</h2>
						<h2 className='sm:text-4xl text-2xl font-medium title-font text-gray-300 hover:text-white'>
							Projects I've Worked On
						</h2>
					</div>
					<div className='flex flex-wrap -m-4'>
						<div className='p-4 md:w-1/3'>
							<div className='flex rounded-lg h-full bg-gray-800 p-8 flex-col'>
								<div className='flex items-center mb-3'>
									<div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-gray-800 flex-shrink-0'>
										<Icons.App className='w-5 h-5' />
									</div>
									<h2 className='text-gray-300 hover:text-white text-lg title-font font-medium'>
										Personal Website
									</h2>
								</div>
								<div className='flex-grow'>
									<p className='text-lg text-gray-300 hover:text-white text-base'>
										I have worked extensively on my personal website,
										chronically adding to it and improving it.
									</p>
									<a
										className='mt-3 text-blue-500 inline-flex items-center hover:text-blue-600 active:text-gray-7000'
										href='https://github.com/gutenfries/gutenfries.deno.dev'
									>
										Learn More
										<Icons.ExternalLink className='w-4 h-4 ml-2' />
									</a>
								</div>
							</div>
						</div>
						<div className='p-4 md:w-1/3'>
							<div className='flex rounded-lg h-full bg-gray-800 p-8 flex-col'>
								<div className='flex items-center mb-3'>
									<div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-gray-800 flex-shrink-0'>
										<Icons.User className='w-5 h-5' />
									</div>
									<h2 className='text-gray-300 hover:text-white text-lg title-font font-medium'>
										The Catalyzer
									</h2>
								</div>
								<div className='flex-grow'>
									<p className='text-lg text-gray-300 hover:text-white text-base'>
										Blue bottle crucifix vinyl post-ironic four dollar toast
										vegan taxidermy. Gastropub indxgo juice poutine.
									</p>
									<a className='mt-3 text-blue-500 inline-flex items-center hover:text-blue-600 active:text-gray-700'>
										Learn More
										<Icons.ExternalLink className='w-4 h-4 ml-2' />
									</a>
								</div>
							</div>
						</div>
						<div className='p-4 md:w-1/3'>
							<div className='flex rounded-lg h-full bg-gray-800 p-8 flex-col'>
								<div className='flex items-center mb-3'>
									<div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-gray-800 flex-shrink-0'>
										<Icons.Accessibility className='w-5 h-5' />
									</div>
									<h2 className='text-gray-300 hover:text-white text-lg title-font font-medium'>
										Neptune
									</h2>
								</div>
								<div className='flex-grow'>
									<p className='text-lg text-gray-300 hover:text-white text-base'>
										Blue bottle crucifix vinyl post-ironic four dollar toast
										vegan taxidermy. Gastropub indxgo juice poutine.
									</p>
									<a className='mt-3 text-blue-500 inline-flex items-center hover:text-blue-600 active:text-gray-700'>
										Learn More
										<Icons.ExternalLink className='w-4 h-4 ml-2' />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='snap-start text-gray-800 body-font  border-gray-300'>
				<div className='container px-5 py-32 mx-auto flex flex-wrap'>
					<div className='lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden'>
						<img
							alt='feature'
							className='object-cover object-center h-full w-full'
							src='https://dummyimage.com/600x600/edf2f7/a5afbd'
						/>
					</div>
					<div className='flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center'>
						<div className='flex flex-col mb-10 lg:items-start items-center'>
							<div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5'>
								<svg
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									className='w-6 h-6'
									viewBox='0 0 24 24'
								>
									<path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
								</svg>
							</div>
							<div className='flex-grow'>
								<h2 className='text-gray-300 hover:text-white text-lg title-font font-medium mb-3'>
									Shooting Stars
								</h2>
								<p className='text-lg text-gray-300 hover:text-white text-base'>
									Blue bottle crucifix vinyl post-ironic four dollar toast vegan
									taxidermy. Gastropub indxgo juice poutine.
								</p>
								<a className='mt-3 text-blue-500 inline-flex items-center hover:text-blue-600 active:text-gray-700'>
									Learn More
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										className='w-4 h-4 ml-2'
										viewBox='0 0 24 24'
									>
										<path d='M5 12h24M12 5l7 7-7 7'></path>
									</svg>
								</a>
							</div>
						</div>
						<div className='flex flex-col mb-10 lg:items-start items-center'>
							<div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5'>
								<svg
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									className='w-6 h-6'
									viewBox='0 0 24 24'
								>
									<circle cx='6' cy='6' r='3'></circle>
									<circle cx='6' cy='18' r='3'></circle>
									<path d='M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12'>
									</path>
								</svg>
							</div>
							<div className='flex-grow'>
								<h2 className='text-gray-300 hover:text-white text-lg title-font font-medium mb-3'>
									The Catalyzer
								</h2>
								<p className='text-lg text-gray-300 hover:text-white text-base'>
									Blue bottle crucifix vinyl post-ironic four dollar toast vegan
									taxidermy. Gastropub indxgo juice poutine.
								</p>
								<a className='mt-3 text-blue-500 inline-flex items-center hover:text-blue-600 active:text-gray-700'>
									Learn More
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										className='w-4 h-4 ml-2'
										viewBox='0 0 24 24'
									>
										<path d='M5 12h24M12 5l7 7-7 7'></path>
									</svg>
								</a>
							</div>
						</div>
						<div className='flex flex-col mb-10 lg:items-start items-center'>
							<div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5'>
								<svg
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									className='w-6 h-6'
									viewBox='0 0 24 24'
								>
									<path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
									<circle cx='12' cy='7' r='4'></circle>
								</svg>
							</div>
							<div className='flex-grow'>
								<h2 className='text-gray-300 hover:text-white text-lg title-font font-medium mb-3'>
									Neptune
								</h2>
								<p className='text-lg text-gray-300 hover:text-white text-base'>
									Blue bottle crucifix vinyl post-ironic four dollar toast vegan
									taxidermy. Gastropub indxgo juice poutine.
								</p>
								<a className='mt-3 text-blue-500 inline-flex items-center hover:text-blue-600 active:text-gray-700'>
									Learn More
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										className='w-4 h-4 ml-2'
										viewBox='0 0 24 24'
									>
										<path d='M5 12h24M12 5l7 7-7 7'></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='snap-start text-gray-800 body-font  border-gray-300'>
				<div className='container px-5 py-32 mx-auto'>
					<div className='flex flex-wrap w-full mb-20 flex-col items-center text-center'>
						<h2 className='sm:text-4xl text-2xl font-medium title-font mb-2 text-gray-300 hover:text-white'>
							Pitchfork Kickstarter Taxidermy
						</h2>
						<p className='text-lg text-gray-300 hover:text-white lg:w-1/2 w-full text-base'>
							Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
							gentrify, subway tile poke farm-to-table.
						</p>
					</div>
					<div className='flex flex-wrap -m-4'>
						<div className='xl:w-1/3 md:w-1/2 p-4'>
							<div className='border border-gray-300 p-6 rounded-lg'>
								<div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4'>
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										className='w-6 h-6'
										viewBox='0 0 24 24'
									>
										<path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
									</svg>
								</div>
								<h2 className='text-lg text-gray-300 hover:text-white font-medium title-font mb-2'>
									Shooting Stars
								</h2>
								<p className='text-lg text-gray-300 hover:text-white text-base'>
									Fingerstache flexitarian street art 8-bit waist co, subway tile
									poke farm.
								</p>
							</div>
						</div>
						<div className='xl:w-1/3 md:w-1/2 p-4'>
							<div className='border border-gray-300 p-6 rounded-lg'>
								<div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4'>
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										className='w-6 h-6'
										viewBox='0 0 24 24'
									>
										<circle cx='6' cy='6' r='3'></circle>
										<circle cx='6' cy='18' r='3'></circle>
										<path d='M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12'>
										</path>
									</svg>
								</div>
								<h2 className='text-lg text-gray-300 hover:text-white font-medium title-font mb-2'>
									The Catalyzer
								</h2>
								<p className='text-lg text-gray-300 hover:text-white text-base'>
									Fingerstache flexitarian street art 8-bit waist co, subway tile
									poke farm.
								</p>
							</div>
						</div>
						<div className='xl:w-1/3 md:w-1/2 p-4'>
							<div className='border border-gray-300 p-6 rounded-lg'>
								<div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4'>
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										className='w-6 h-6'
										viewBox='0 0 24 24'
									>
										<path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
										<circle cx='12' cy='7' r='4'></circle>
									</svg>
								</div>
								<h2 className='text-lg text-gray-300 hover:text-white font-medium title-font mb-2'>
									Neptune
								</h2>
								<p className='text-lg text-gray-300 hover:text-white text-base'>
									Fingerstache flexitarian street art 8-bit waist co, subway tile
									poke farm.
								</p>
							</div>
						</div>
						<div className='xl:w-1/3 md:w-1/2 p-4'>
							<div className='border border-gray-300 p-6 rounded-lg'>
								<div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4'>
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										className='w-6 h-6'
										viewBox='0 0 24 24'
									>
										<path d='M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7'>
										</path>
									</svg>
								</div>
								<h2 className='text-lg text-gray-300 hover:text-white font-medium title-font mb-2'>
									Melanchole
								</h2>
								<p className='text-lg text-gray-300 hover:text-white text-base'>
									Fingerstache flexitarian street art 8-bit waist co, subway tile
									poke farm.
								</p>
							</div>
						</div>
						<div className='xl:w-1/3 md:w-1/2 p-4'>
							<div className='border border-gray-300 p-6 rounded-lg'>
								<div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4'>
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										className='w-6 h-6'
										viewBox='0 0 24 24'
									>
										<path d='M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z'>
										</path>
									</svg>
								</div>
								<h2 className='text-lg text-gray-300 hover:text-white font-medium title-font mb-2'>
									Bunker
								</h2>
								<p className='text-lg text-gray-300 hover:text-white text-base'>
									Fingerstache flexitarian street art 8-bit waist co, subway tile
									poke farm.
								</p>
							</div>
						</div>
						<div className='xl:w-1/3 md:w-1/2 p-4'>
							<div className='border border-gray-300 p-6 rounded-lg'>
								<div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4'>
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										className='w-6 h-6'
										viewBox='0 0 24 24'
									>
										<path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'>
										</path>
									</svg>
								</div>
								<h2 className='text-lg text-gray-300 hover:text-white font-medium title-font mb-2'>
									Ramona Falls
								</h2>
								<p className='text-lg text-gray-300 hover:text-white text-base'>
									Fingerstache flexitarian street art 8-bit waist co, subway tile
									poke farm.
								</p>
							</div>
						</div>
					</div>
					<button
						type='button'
						className='flex mx-auto mt-16 text-gray-800 bg-blue-500 border-0 py-2 px-8  hover:bg-blue-600 rounded-lg text-lg'
					>
						Button
					</button>
				</div>
			</section>
			{
				/* 	<section className='snap-start text-gray-800 body-font  border-gray-300'>
				<div className='container px-5 py-32 mx-auto'>
					<div className='flex flex-col text-center w-full mb-20'>
						<h2 className='sm:text-4xl text-2xl font-medium title-font mb-4 text-gray-300 hover:text-white'>
							Our Team
						</h2>
						<p className='text-lg text-gray-300 hover:text-white lg:w-2/3 mx-auto text-base'>
							Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
							gentrify, subway tile poke farm-to-table. Franzen you probably haven't
							heard of them.
						</p>
					</div>
					<div className='flex flex-wrap -m-2'>
						<div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
							<div className='h-full flex items-center border-gray-300 border p-4 rounded-lg'>
								<img
									alt='team'
									className='w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4'
									src='https://dummyimage.com/80x80/edf2f7/a5afbd'
								/>
								<div className='flex-grow'>
									<h2 className='text-gray-300 hover:text-white title-font font-medium'>
										Holden Caulfield
									</h2>
									<p className='text-lg text-gray-300 hover:text-white'>
										UI Designer
									</p>
								</div>
							</div>
						</div>
						<div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
							<div className='h-full flex items-center border-gray-300 border p-4 rounded-lg'>
								<img
									alt='team'
									className='w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4'
									src='https://dummyimage.com/84x84/edf2f7/a5afbd'
								/>
								<div className='flex-grow'>
									<h2 className='text-gray-300 hover:text-white title-font font-medium'>
										Henry Letham
									</h2>
									<p className='text-lg text-gray-300 hover:text-white'>CTO</p>
								</div>
							</div>
						</div>
						<div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
							<div className='h-full flex items-center border-gray-300 border p-4 rounded-lg'>
								<img
									alt='team'
									className='w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4'
									src='https://dummyimage.com/88x88/edf2f7/a5afbd'
								/>
								<div className='flex-grow'>
									<h2 className='text-gray-300 hover:text-white title-font font-medium'>
										Oskar Blinde
									</h2>
									<p className='text-lg text-gray-300 hover:text-white'>Founder</p>
								</div>
							</div>
						</div>
						<div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
							<div className='h-full flex items-center border-gray-300 border p-4 rounded-lg'>
								<img
									alt='team'
									className='w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4'
									src='https://dummyimage.com/90x90/edf2f7/a5afbd'
								/>
								<div className='flex-grow'>
									<h2 className='text-gray-300 hover:text-white title-font font-medium'>
										John Doe
									</h2>
									<p className='text-lg text-gray-300 hover:text-white'>DevOps</p>
								</div>
							</div>
						</div>
						<div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
							<div className='h-full flex items-center border-gray-300 border p-4 rounded-lg'>
								<img
									alt='team'
									className='w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4'
									src='https://dummyimage.com/94x94/edf2f7/a5afbd'
								/>
								<div className='flex-grow'>
									<h2 className='text-gray-300 hover:text-white title-font font-medium'>
										Martin Eden
									</h2>
									<p className='text-lg text-gray-300 hover:text-white'>
										Software Engineer
									</p>
								</div>
							</div>
						</div>
						<div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
							<div className='h-full flex items-center border-gray-300 border p-4 rounded-lg'>
								<img
									alt='team'
									className='w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4'
									src='https://dummyimage.com/98x98/edf2f7/a5afbd'
								/>
								<div className='flex-grow'>
									<h2 className='text-gray-300 hover:text-white title-font font-medium'>
										Boris Kitua
									</h2>
									<p className='text-lg text-gray-300 hover:text-white'>
										UX Researcher
									</p>
								</div>
							</div>
						</div>
						<div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
							<div className='h-full flex items-center border-gray-300 border p-4 rounded-lg'>
								<img
									alt='team'
									className='w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4'
									src='https://dummyimage.com/100x90/edf2f7/a5afbd'
								/>
								<div className='flex-grow'>
									<h2 className='text-gray-300 hover:text-white title-font font-medium'>
										Atticus Finch
									</h2>
									<p className='text-lg text-gray-300 hover:text-white'>
										QA Engineer
									</p>
								</div>
							</div>
						</div>
						<div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
							<div className='h-full flex items-center border-gray-300 border p-4 rounded-lg'>
								<img
									alt='team'
									className='w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4'
									src='https://dummyimage.com/104x94/edf2f7/a5afbd'
								/>
								<div className='flex-grow'>
									<h2 className='text-gray-300 hover:text-white title-font font-medium'>
										Alper Kamu
									</h2>
									<p className='text-lg text-gray-300 hover:text-white'>System</p>
								</div>
							</div>
						</div>
						<div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
							<div className='h-full flex items-center border-gray-300 border p-4 rounded-lg'>
								<img
									alt='team'
									className='w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4'
									src='https://dummyimage.com/108x98/edf2f7/a5afbd'
								/>
								<div className='flex-grow'>
									<h2 className='text-gray-300 hover:text-white title-font font-medium'>
										Rodrigo Monchi
									</h2>
									<p className='text-lg text-gray-300 hover:text-white'>
										Product Manager
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */
			}
			<section className='snap-start text-gray-800 body-font overflow-hidden  border-gray-300'>
				<div className='container px-5 py-32 mx-auto flex flex-wrap'>
					<div className='lg:w-1/4 mt-48 hidden lg:block'>
						<div className='mt-px  border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden'>
							<p className='text-lg text-gray-300 hover:text-white bg-gray-800 text-gray-300 hover:text-white h-12 text-center px-4 flex items-center justify-start -mt-px'>
								Fingerstache disrupt
							</p>
							<p className='text-lg text-gray-300 hover:text-white text-gray-300 hover:text-white h-12 text-center px-4 flex items-center justify-start'>
								Franzen hashtag
							</p>
							<p className='text-lg text-gray-300 hover:text-white bg-gray-800 text-gray-300 hover:text-white h-12 text-center px-4 flex items-center justify-start'>
								Tilde art party
							</p>
							<p className='text-lg text-gray-300 hover:text-white text-gray-300 hover:text-white h-12 text-center px-4 flex items-center justify-start'>
								Banh mi cornhole
							</p>
							<p className='text-lg text-gray-300 hover:text-white bg-gray-800 text-gray-300 hover:text-white h-12 text-center px-4 flex items-center justify-start'>
								Waistcoat squid hexagon
							</p>
							<p className='text-lg text-gray-300 hover:text-white text-gray-300 hover:text-white h-12 text-center px-4 flex items-center justify-start'>
								Pinterest occupy authentic
							</p>
							<p className='text-lg text-gray-300 hover:text-white bg-gray-800 text-gray-300 hover:text-white h-12 text-center px-4 flex items-center justify-start'>
								Brooklyn helvetica
							</p>
							<p className='text-lg text-gray-300 hover:text-white text-gray-300 hover:text-white h-12 text-center px-4 flex items-center justify-start'>
								Long Feature Two
							</p>
							<p className='text-lg text-gray-300 hover:text-white bg-gray-800 text-gray-300 hover:text-white h-12 text-center px-4 flex items-center justify-start'>
								Feature One
							</p>
						</div>
					</div>
					<div className='flex lg:w-3/4 w-full flex-wrap lg:border border-gray-300 rounded-lg'>
						<div className='lg:w-1/3 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-gray-300  rounded-lg lg:rounded-none'>
							<div className='px-2 text-center h-48 flex flex-col items-center justify-center'>
								<h3 className='tracking-widest'>START</h3>
								<h2 className='text-5xl text-gray-300 hover:text-white font-medium leading-none mb-4 mt-2'>
									Free
								</h2>
								<span className='text-sm text-gray-600'>Next 3 months</span>
							</div>
							<p className='text-lg text-gray-300 hover:text-white bg-gray-800 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center  border-gray-300'>
								Schlitz single-origin
							</p>
							<p className='text-lg text-gray-300 hover:text-white text-gray-600 text-center h-12 flex items-center justify-center'>
								<span className='w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-gray-800 rounded-full flex-shrink-0'>
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='3'
										className='w-3 h-3'
										viewBox='0 0 24 24'
									>
										<path d='M20 6L9 17l-5-5'></path>
									</svg>
								</span>
							</p>
							<p className='text-lg text-gray-300 hover:text-white bg-gray-800 text-gray-600 text-center h-12 flex items-center justify-center'>
								<span className='w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-gray-800 rounded-full flex-shrink-0'>
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='3'
										className='w-3 h-3'
										viewBox='0 0 24 24'
									>
										<path d='M20 6L9 17l-5-5'></path>
									</svg>
								</span>
							</p>
							<p className='text-lg text-gray-300 hover:text-white h-12 text-gray-600 px-6 text-center flex items-center justify-center'>
								Feature
							</p>
							<p className='text-lg text-gray-300 hover:text-white bg-gray-800 text-gray-600 text-center h-12 flex items-center justify-center'>
								<span className='w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-gray-800 rounded-full flex-shrink-0'>
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='3'
										className='w-3 h-3'
										viewBox='0 0 24 24'
									>
										<path d='M20 6L9 17l-5-5'></path>
									</svg>
								</span>
							</p>
							<p className='text-lg text-gray-300 hover:text-white text-gray-600 text-center h-12 flex items-center justify-center'>
								<svg
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2.2'
									className='w-5 h-5 text-gray-500'
									viewBox='0 0 24 24'
								>
									<path d='M18 6L6 18M6 6l12 12'></path>
								</svg>
							</p>
							<p className='text-lg text-gray-300 hover:text-white bg-gray-800 text-gray-600 text-center h-12 flex items-center justify-center'>
								<svg
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2.2'
									className='w-5 h-5 text-gray-500'
									viewBox='0 0 24 24'
								>
									<path d='M18 6L6 18M6 6l12 12'></path>
								</svg>
							</p>
							<p className='text-lg text-gray-300 hover:text-white text-gray-600 text-center h-12 flex items-center justify-center'>
								<svg
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2.2'
									className='w-5 h-5 text-gray-500'
									viewBox='0 0 24 24'
								>
									<path d='M18 6L6 18M6 6l12 12'></path>
								</svg>
							</p>
							<p className='text-lg text-gray-300 hover:text-white bg-gray-800 text-gray-600 text-center h-12 flex items-center justify-center'>
								<svg
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2.2'
									className='w-5 h-5 text-gray-500'
									viewBox='0 0 24 24'
								>
									<path d='M18 6L6 18M6 6l12 12'></path>
								</svg>
							</p>
							<div className=' border-gray-300 p-6 text-center rounded-bl-lg'>
								<button
									type='button'
									className='flex items-center mt-auto text-gray-800 bg-blue-500 border-0 py-2 px-4 w-full  hover:bg-blue-600 rounded-lg'
								>
									Button
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										className='w-4 h-4 ml-auto'
										viewBox='0 0 24 24'
									>
										<path d='M5 12h24M12 5l7 7-7 7'></path>
									</svg>
								</button>
								<p className='text-lg text-gray-300 hover:text-white text-xs text-gray-500 mt-3'>
									Literally you probably haven't heard of them jean shorts.
								</p>
							</div>
						</div>
						<div className='lg:w-1/3 lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg border-blue-500 relative'>
							<span className='bg-blue-500 text-gray-800 px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl'>
								POPULAR
							</span>
							<div className='px-2 text-center h-48 flex flex-col items-center justify-center'>
								<h3 className='tracking-widest'>PRO</h3>
								<h2 className='text-5xl text-gray-300 hover:text-white font-medium flex items-center justify-center leading-none mb-4 mt-2'>
									$38
									<span className='text-gray-600 text-base ml-1'>/mo</span>
								</h2>
								<span className='text-sm text-gray-600'>
									Charging $456 per year
								</span>
							</div>
							<p className='text-lg text-gray-300 hover:text-white bg-gray-800 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center  border-gray-300'>
								Schlitz single-origin
							</p>
							<p className='text-lg text-gray-300 hover:text-white text-gray-600 text-center h-12 flex items-center justify-center'>
								<span className='w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-gray-800 rounded-full flex-shrink-0'>
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='3'
										className='w-3 h-3'
										viewBox='0 0 24 24'
									>
										<path d='M20 6L9 17l-5-5'></path>
									</svg>
								</span>
							</p>
							<p className='text-lg text-gray-300 hover:text-white bg-gray-800 text-gray-600 text-center h-12 flex items-center justify-center'>
								<span className='w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-gray-800 rounded-full flex-shrink-0'>
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='3'
										className='w-3 h-3'
										viewBox='0 0 24 24'
									>
										<path d='M20 6L9 17l-5-5'></path>
									</svg>
								</span>
							</p>
							<p className='text-lg text-gray-300 hover:text-white h-12 text-gray-600 text-center flex items-center justify-center'>
								Feature
							</p>
							<p className='text-lg text-gray-300 hover:text-white bg-gray-800 text-gray-600 text-center h-12 flex items-center justify-center'>
								<span className='w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-gray-800 rounded-full flex-shrink-0'>
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='3'
										className='w-3 h-3'
										viewBox='0 0 24 24'
									>
										<path d='M20 6L9 17l-5-5'></path>
									</svg>
								</span>
							</p>
							<p className='text-lg text-gray-300 hover:text-white text-gray-600 text-center h-12 flex items-center justify-center'>
								<span className='w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-gray-800 rounded-full flex-shrink-0'>
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='3'
										className='w-3 h-3'
										viewBox='0 0 24 24'
									>
										<path d='M20 6L9 17l-5-5'></path>
									</svg>
								</span>
							</p>
							<p className='text-lg text-gray-300 hover:text-white bg-gray-800 text-gray-600 text-center h-12 flex items-center justify-center'>
								<svg
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2.2'
									className='w-5 h-5 text-gray-500'
									viewBox='0 0 24 24'
								>
									<path d='M18 6L6 18M6 6l12 12'></path>
								</svg>
							</p>
							<p className='text-lg text-gray-300 hover:text-white text-gray-600 text-center h-12 flex items-center justify-center'>
								<svg
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2.2'
									className='w-5 h-5 text-gray-500'
									viewBox='0 0 24 24'
								>
									<path d='M18 6L6 18M6 6l12 12'></path>
								</svg>
							</p>
							<p className='text-lg text-gray-300 hover:text-white bg-gray-800 text-gray-600 text-center h-12 flex items-center justify-center'>
								<svg
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2.2'
									className='w-5 h-5 text-gray-500'
									viewBox='0 0 24 24'
								>
									<path d='M18 6L6 18M6 6l12 12'></path>
								</svg>
							</p>
							<div className='p-6 text-center  border-gray-300'>
								<button
									type='button'
									className='flex items-center mt-auto text-gray-800 bg-blue-500 border-0 py-2 px-4 w-full  hover:bg-blue-600 rounded-lg'
								>
									Button
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										className='w-4 h-4 ml-auto'
										viewBox='0 0 24 24'
									>
										<path d='M5 12h24M12 5l7 7-7 7'></path>
									</svg>
								</button>
								<p className='text-lg text-gray-300 hover:text-white text-xs text-gray-500 mt-3'>
									Literally you probably haven't heard of them jean shorts.
								</p>
							</div>
						</div>
						<div className='lg:w-1/3 w-full lg:mt-px border-2 border-gray-300  rounded-lg lg:rounded-none'>
							<div className='px-2 text-center h-48 flex flex-col items-center justify-center'>
								<h3 className='tracking-widest'>BUSINESS</h3>
								<h2 className='text-5xl text-gray-300 hover:text-white font-medium flex items-center justify-center leading-none mb-4 mt-2'>
									$54
									<span className='text-gray-600 text-base ml-1'>/mo</span>
								</h2>
								<span className='text-sm text-gray-600'>
									Charging $648 per year
								</span>
							</div>
							<p className='text-lg text-gray-300 hover:text-white bg-gray-800 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center  border-gray-300'>
								Schlitz single-origin
							</p>
							<p className='text-lg text-gray-300 hover:text-white text-gray-600 text-center h-12 flex items-center justify-center'>
								<span className='w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-gray-800 rounded-full flex-shrink-0'>
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='3'
										className='w-3 h-3'
										viewBox='0 0 24 24'
									>
										<path d='M20 6L9 17l-5-5'></path>
									</svg>
								</span>
							</p>
							<p className='text-lg text-gray-300 hover:text-white bg-gray-800 text-gray-600 text-center h-12 flex items-center justify-center'>
								<span className='w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-gray-800 rounded-full flex-shrink-0'>
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='3'
										className='w-3 h-3'
										viewBox='0 0 24 24'
									>
										<path d='M20 6L9 17l-5-5'></path>
									</svg>
								</span>
							</p>
							<p className='text-lg text-gray-300 hover:text-white h-12 text-gray-600 text-center flex items-center justify-center'>
								Feature
							</p>
							<p className='text-lg text-gray-300 hover:text-white bg-gray-800 text-gray-600 text-center h-12 flex items-center justify-center'>
								<span className='w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-gray-800 rounded-full flex-shrink-0'>
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='3'
										className='w-3 h-3'
										viewBox='0 0 24 24'
									>
										<path d='M20 6L9 17l-5-5'></path>
									</svg>
								</span>
							</p>
							<p className='text-lg text-gray-300 hover:text-white text-gray-600 text-center h-12 flex items-center justify-center'>
								<svg
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2.2'
									className='w-5 h-5 text-gray-500'
									viewBox='0 0 24 24'
								>
									<path d='M18 6L6 18M6 6l12 12'></path>
								</svg>
							</p>
							<p className='text-lg text-gray-300 hover:text-white bg-gray-800 text-gray-600 text-center h-12 flex items-center justify-center'>
								<svg
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2.2'
									className='w-5 h-5 text-gray-500'
									viewBox='0 0 24 24'
								>
									<path d='M18 6L6 18M6 6l12 12'></path>
								</svg>
							</p>
							<p className='text-lg text-gray-300 hover:text-white text-gray-600 text-center h-12 flex items-center justify-center'>
								<svg
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2.2'
									className='w-5 h-5 text-gray-500'
									viewBox='0 0 24 24'
								>
									<path d='M18 6L6 18M6 6l12 12'></path>
								</svg>
							</p>
							<p className='text-lg text-gray-300 hover:text-white bg-gray-800 text-gray-600 text-center h-12 flex items-center justify-center'>
								<svg
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2.2'
									className='w-5 h-5 text-gray-500'
									viewBox='0 0 24 24'
								>
									<path d='M18 6L6 18M6 6l12 12'></path>
								</svg>
							</p>
							<div className='p-6 text-center  border-gray-300'>
								<button
									type='button'
									className='flex items-center mt-auto text-gray-800 bg-blue-500 border-0 py-2 px-4 w-full  hover:bg-blue-600 rounded-lg'
								>
									Button
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										className='w-4 h-4 ml-auto'
										viewBox='0 0 24 24'
									>
										<path d='M5 12h24M12 5l7 7-7 7'></path>
									</svg>
								</button>
								<p className='text-lg text-gray-300 hover:text-white text-xs text-gray-500 mt-3'>
									Literally you probably haven't heard of them jean shorts.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='snap-start text-gray-800 body-font  border-gray-300'>
				<div className='container px-5 py-32 mx-auto'>
					<div className='xl:w-1/2 lg:w-3/4 w-full mx-auto text-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							className='inline-block w-8 h-8 text-gray-400 mb-8'
							viewBox='0 0 975.036 975.036'
						>
							<path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h245.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h245.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'>
							</path>
						</svg>
						<p className='text-lg text-gray-300 hover:text-white text-lg'>
							Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
							taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman
							taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny
							pack vaporware. Man bun next level coloring book skateboard four loko
							knausgaard. Kitsch keffiyeh master cleanse direct trade blue juice
							before they sold out gentrify plaid gastropub normcore XOXO 90's pickled
							cblue jean shorts. Slow-carb next level shoblueitch ethical authentic,
							yr scenester sriracha forage franzen organic drinking vinegar.
						</p>
						<span className='inline-block h-1 w-10 rounded-lg bg-blue-500 mt-8 mb-6'>
						</span>
						<h2 className='text-gray-300 hover:text-white font-medium title-font tracking-wider text-sm'>
							HOLDEN CAULFIELD
						</h2>
						<p className='text-lg text-gray-300 hover:text-white'>
							Senior Product Designer
						</p>
					</div>
				</div>
			</section>
			{
				/* <section className='snap-start text-gray-800 body-font relative'>
				<div className='absolute inset-0 bg-gray-300'>
					<iframe
						width='100%'
						height='100%'
						frameBorder='0'
						marginHeight={0}
						marginWidth={0}
						title='map'
						scrolling='no'
						src='https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed'
						style='filter: grayscale(1) contrast(1.2) opacity(0.4);'
					>
					</iframe>
				</div>
				<div className='container px-5 py-32 mx-auto flex'>
					<div className='lg:w-1/3 md:w-1/2 bg-gray-800 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10'>
						<h2 className='text-gray-300 hover:text-white text-lg mb-1 font-medium title-font'>
							Feedback
						</h2>
						<p className='text-lg text-gray-300 hover:text-white mb-5 text-gray-600'>
							Post-ironic portland shabby chic echo park, banjo fashion axe
						</p>
						<input
							className='bg-gray-800 rounded-lg border border-gray-400  focus:border-blue-500 text-base px-4 py-2 mb-4'
							placeholder='Email'
							type='email'
						/>
						<textarea
							className='bg-gray-800 rounded-lg border border-gray-400  h-32 focus:border-blue-500 text-base px-4 py-2 mb-4 resize-none'
							placeholder='Message'
						>
						</textarea>
						<button type='button' className='text-gray-800 bg-blue-500 border-0 py-2 px-6  hover:bg-blue-600 rounded-lg text-lg'>
							Button
						</button>
						<p className='text-lg text-gray-300 hover:text-white text-xs text-gray-500 mt-3'>
							Chicharrones blog helvetica normcore iceland tousled brook viral
							artisan.
						</p>
					</div>
				</div>
			</section> */
			}
			<footer className='text-gray-800 body-font'>
				<div className='container px-5 py-32 mx-auto'>
					<div className='flex flex-wrap md:text-left text-center -mb-10 -mx-4'>
						<section className='snap-start lg:w-1/6 md:w-1/2 w-full px-4'>
							<h2 className='title-font font-bold text-md text-blue-500 tracking-widest mb-3'>
								CATEGORIES
							</h2>
							<nav className='list-none mb-10'>
								<ul>
									<li>
										<a className='text-gray-300 hover:text-white hover:text-white text-underline cursor-pointer'>
											First Link
										</a>
									</li>
									<li>
										<a className='text-gray-300 hover:text-white hover:text-white text-underline cursor-pointer'>
											Second Link
										</a>
									</li>
									<li>
										<a className='text-gray-300 hover:text-white hover:text-white text-underline cursor-pointer'>
											Third Link
										</a>
									</li>
									<li>
										<a className='text-gray-300 hover:text-white hover:text-white text-underline cursor-pointer'>
											Fourth Link
										</a>
									</li>
								</ul>
							</nav>
						</section>
						<section className='snap-start lg:w-1/6 md:w-1/2 w-full px-4'>
							<h2 className='title-font font-bold text-md text-blue-500 tracking-widest mb-3'>
								CATEGORIES
							</h2>
							<nav className='list-none mb-10'>
								<ul>
									<li>
										<a className='text-gray-300 hover:text-white hover:text-white text-underline cursor-pointer'>
											First Link
										</a>
									</li>
									<li>
										<a className='text-gray-300 hover:text-white hover:text-white text-underline cursor-pointer'>
											Second Link
										</a>
									</li>
									<li>
										<a className='text-gray-300 hover:text-white hover:text-white text-underline cursor-pointer'>
											Third Link
										</a>
									</li>
									<li>
										<a className='text-gray-300 hover:text-white hover:text-white text-underline cursor-pointer'>
											Fourth Link
										</a>
									</li>
								</ul>
							</nav>
						</section>
						<section className='snap-start lg:w-1/6 md:w-1/2 w-full px-4'>
							<h2 className='title-font font-bold text-md text-blue-500 tracking-widest mb-3'>
								CATEGORIES
							</h2>
							<nav className='list-none mb-10'>
								<ul>
									<li>
										<a className='text-gray-300 hover:text-white hover:text-white text-underline cursor-pointer'>
											First Link
										</a>
									</li>
									<li>
										<a className='text-gray-300 hover:text-white hover:text-white text-underline cursor-pointer'>
											Second Link
										</a>
									</li>
									<li>
										<a className='text-gray-300 hover:text-white hover:text-white text-underline cursor-pointer'>
											Third Link
										</a>
									</li>
									<li>
										<a className='text-gray-300 hover:text-white hover:text-white text-underline cursor-pointer'>
											Fourth Link
										</a>
									</li>
								</ul>
							</nav>
						</section>
						<section className='snap-start lg:w-1/6 md:w-1/2 w-full px-4'>
							<h2 className='title-font font-bold text-md text-blue-500 tracking-widest mb-3'>
								CATEGORIES
							</h2>
							<nav className='list-none mb-10'>
								<ul>
									<li>
										<a className='text-gray-300 hover:text-white hover:text-white text-underline cursor-pointer'>
											First Link
										</a>
									</li>
									<li>
										<a className='text-gray-300 hover:text-white hover:text-white text-underline cursor-pointer'>
											Second Link
										</a>
									</li>
									<li>
										<a className='text-gray-300 hover:text-white hover:text-white text-underline cursor-pointer'>
											Third Link
										</a>
									</li>
									<li>
										<a className='text-gray-300 hover:text-white hover:text-white text-underline cursor-pointer'>
											Fourth Link
										</a>
									</li>
								</ul>
							</nav>
						</section>
						<section className='snap-start lg:w-1/6 md:w-1/2 w-full px-4'>
							<h2 className='title-font font-bold text-md text-blue-500 tracking-widest mb-3'>
								CATEGORIES
							</h2>
							<nav className='list-none mb-10'>
								<ul>
									<li>
										<a className='text-gray-300 hover:text-white hover:text-white text-underline cursor-pointer'>
											First Link
										</a>
									</li>
									<li>
										<a className='text-gray-300 hover:text-white hover:text-white text-underline cursor-pointer'>
											Second Link
										</a>
									</li>
									<li>
										<a className='text-gray-300 hover:text-white hover:text-white text-underline cursor-pointer'>
											Third Link
										</a>
									</li>
									<li>
										<a className='text-gray-300 hover:text-white hover:text-white text-underline cursor-pointer'>
											Fourth Link
										</a>
									</li>
								</ul>
							</nav>
						</section>
						<section className='snap-start lg:w-1/6 md:w-1/2 w-full px-4'>
							<h2 className='title-font font-bold text-md text-blue-500 tracking-widest mb-3'>
								CATEGORIES
							</h2>
							<nav className='list-none mb-10'>
								<ul>
									<li>
										<a className='text-gray-300 hover:text-white hover:text-white text-underline cursor-pointer'>
											First Link
										</a>
									</li>
									<li>
										<a className='text-gray-300 hover:text-white hover:text-white text-underline cursor-pointer'>
											Second Link
										</a>
									</li>
									<li>
										<a className='text-gray-300 hover:text-white hover:text-white text-underline cursor-pointer'>
											Third Link
										</a>
									</li>
									<li>
										<a className='text-gray-300 hover:text-white hover:text-white text-underline cursor-pointer'>
											Fourth Link
										</a>
									</li>
								</ul>
							</nav>
						</section>
					</div>
				</div>

				<section className='snap-end bg-gray-800 rounded-lg'>
					<div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
						<p className='text-lg text-gray-300 hover:text-white text-sm text-center sm:text-left'>
							© {new Date().getFullYear()} Mark Gutenberger -
							<a
								href='https://twitter.com/knyttneve'
								className='text-white ml-1'
								target='_blank'
								rel='noopener noreferrer'
							>
								@gutenfries
							</a>
						</p>
						<span className='sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-400 text-sm'>
							Created with {'<'}3
						</span>
					</div>
				</section>
			</footer>
		</MainLayout>
	);
}

export default HomePage;
