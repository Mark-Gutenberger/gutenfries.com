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
						<h1 className='animate-fade-in-0.5 sm:text-8xl text-6xl font-medium title-font text-gray-300 hover:text-white'>
							Hi there
						</h1>
						<br className='hidden lg:inline-block' />
						<h2 className='animate-fade-in-0.5 title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-300 hover:text-white'>
							I'm Mark Gutenberger
						</h2>
						<p className='animate-fade-in-1 text-lg text-gray-300 hover:text-white mb-8'>
							I am a{' '}
							<strong className='animate-fade-in-0.5 text-underline decoration-blue-500'>
								musician
							</strong>{' '}
							and{' '}
							<strong className='animate-fade-in-0.5 text-underline decoration-blue-500'>
								software developer
							</strong>{' '}
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
							loading='lazy'
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
						<h2 className='sm:text-4xl text-2xl font-medium title-font text-gray-300 hover:text-white'>
							My Projects
						</h2>
						<p className='text-xs text-blue-500 tracking-widest font-medium title-font mt-1'>
							Some things I have built and am working on
						</p>
					</div>
					<div className='flex flex-wrap -m-4'>
						<div className='p-4 md:w-1/3'>
							<div className='flex rounded-lg h-full bg-gray-800 p-8 flex-col'>
								<div className='flex items-center mb-3'>
									<div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-gray-800 flex-shrink-0'>
										<Icons.App className='w-5 h-5' />
									</div>
									<h3 className='text-gray-300 hover:text-white text-lg title-font font-medium'>
										Personal Website
									</h3>
								</div>
								<div className='flex-grow'>
									<p className='text-lg text-gray-300 hover:text-white text-base'>
										I have worked extensively on my personal website,
										continually improving it.
									</p>
									<a
										className='mt-3 text-blue-500 inline-flex items-center hover:text-blue-600 active:text-gray-7000'
										href='https://github.com/gutenfries/gutenfries.deno.dev'
									>
										Learn More
										<Icons.ExternalLink className='w-4 h-4 ml-1' />
									</a>
								</div>
							</div>
						</div>
						<div className='p-4 md:w-1/3'>
							<div className='flex rounded-lg h-full bg-gray-800 p-8 flex-col'>
								<div className='flex items-center mb-3'>
									<div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-gray-800 flex-shrink-0'>
										<Icons.BorderAll className='w-5 h-5' />
									</div>
									<h3 className='text-gray-300 hover:text-white text-lg title-font font-medium'>
										C++ Tetris
									</h3>
								</div>
								<div className='flex-grow'>
									<p className='text-lg text-gray-300 hover:text-white text-base'>
										I created Tetris in C++ using std and ncurses, utilizing the
										Object-Oriented language features.
									</p>

									<a
										href='https://github.com/gutenfries/cpp-tetris'
										className='mt-3 text-blue-500 inline-flex items-center hover:text-blue-600 active:text-gray-700'
									>
										Learn More
										<Icons.ExternalLink className='w-4 h-4 ml-1' />
									</a>
								</div>
							</div>
						</div>
						<div className='p-4 md:w-1/3'>
							<div className='flex rounded-lg h-full bg-gray-800 p-8 flex-col'>
								<div className='flex items-center mb-3'>
									<div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-gray-800 flex-shrink-0'>
										<Icons.Terminal className='w-5 h-5' />
									</div>
									<h3 className='text-gray-300 hover:text-white text-lg title-font font-medium'>
										Rust Dino Game
									</h3>
								</div>
								<div className='flex-grow'>
									<p className='text-lg text-gray-300 hover:text-white text-base'>
										I am currently building a dino game from scratch, in Rust. I
										plan to target this for web in the future as well.
									</p>
									<a
										href='https://github.com/gutenfries/dino_rs'
										className='mt-3 text-blue-500 inline-flex items-center hover:text-blue-600 active:text-gray-700'
									>
										Learn More
										<Icons.ExternalLink className='w-4 h-4 ml-1' />
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
							loading='lazy'
							alt='feature'
							className='object-cover object-center h-full w-full'
							src='https://dummyimage.com/600x600/edf2f7/a5afbd'
						/>
					</div>
					<div className='flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center'>
						<div className='flex flex-col mb-10 lg:items-start items-center'>
							<div className='flex-grow'>
								<h2 className='sm:text-8xl text-4xl font-medium title-font text-gray-300 hover:text-white'>
									About Me
								</h2>
							</div>
						</div>
						<div className='flex flex-col mb-10 lg:items-start items-center'>
							<div className='flex-grow'>
								<h3 className='text-gray-300 hover:text-white sm:text-4xl text-2lg title-font font-medium mb-3'>
									Software Development
								</h3>
								<p className='text-lg text-gray-300 hover:text-white text-base'>
									I am a software developer, currently searching for fitting work.
									I mainly work with web technologies, as well as C++ and Rust,
									but am always trying to learn something new.
								</p>
								{
									/* <a className='mt-3 text-blue-500 inline-flex items-center hover:text-blue-600 active:text-gray-700'>
									Learn More
									<Icons.ExternalLink className='w-4 h-4 ml-1' />
								</a> */
								}
							</div>
						</div>
						<div className='flex flex-col mb-10 lg:items-start items-center'>
							<div className='flex-grow'>
								<h3 className='text-gray-300 hover:text-white sm:text-4xl text-2lg title-font font-medium mb-3'>
									Music
								</h3>
								<p className='text-lg text-gray-300 hover:text-white text-base'>
									I am a musician, namely a drummer. I have been playing for
									several years and am passionate about jazz and corps-style
									rudimental drumming. I also play guitar, bass, banjo, and piano.
								</p>
								{
									/* <a className='mt-3 text-blue-500 inline-flex items-center hover:text-blue-600 active:text-gray-700'>
									Learn More
									<Icons.ExternalLink className='w-4 h-4 ml-1' />
								</a> */
								}
							</div>
						</div>
						<div className='flex flex-col mb-10 lg:items-start items-center'>
							<div className='flex-grow'>
								<h3 className='text-gray-300 hover:text-white sm:text-4xl text-2lg title-font font-medium mb-3'>
									Personal
								</h3>
								<p className='text-lg text-gray-300 hover:text-white text-base'>
									Aside from programming and music, I enjoy mountain biking,
									skiing, and learning new things. I really enjoy good coffee and
									spending time with friends.
								</p>
								{
									/* <a className='mt-3 text-blue-500 inline-flex items-center hover:text-blue-600 active:text-gray-700'>
									Learn More
									<Icons.ExternalLink className='w-4 h-4 ml-1' />
								</a> */
								}
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
								<h3 className='text-lg text-gray-300 hover:text-white font-medium title-font mb-2'>
									Shooting Stars
								</h3>
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
								<h3 className='text-lg text-gray-300 hover:text-white font-medium title-font mb-2'>
									The Catalyzer
								</h3>
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
								<h3 className='text-lg text-gray-300 hover:text-white font-medium title-font mb-2'>
									Neptune
								</h3>
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
								<h3 className='text-lg text-gray-300 hover:text-white font-medium title-font mb-2'>
									Melanchole
								</h3>
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
								<h3 className='text-lg text-gray-300 hover:text-white font-medium title-font mb-2'>
									Bunker
								</h3>
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
								<h3 className='text-lg text-gray-300 hover:text-white font-medium title-font mb-2'>
									Ramona Falls
								</h3>
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
