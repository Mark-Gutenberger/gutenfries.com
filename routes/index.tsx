import { PageProps } from '$fresh/server.ts';
// import { asset } from '$fresh/runtime.ts';

import { Head } from '@/components/Head.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { Navbar } from '@/components/Navbar.tsx';
import { Footer } from '@/components/Footer.tsx';
import Icons from '@/components/Icons.tsx';

import TypingCodeBlock from '@/islands/TypingCodeBlock.tsx';

function IndexPage(PageProps: PageProps) {
	return (
		<>
			<Head PageProps={PageProps} />
			<Navbar active='home' />
			<NoScript />
			<main id='main-content' className='bg-gray-100 dark:bg-gray-900 font-[fira]'>
				<section className='p-4 pt-20 text-gray-800 dark:text-gray-100'>
					<div className='container mx-auto flex px-5 pb-32 pt-8 lg:flex-row flex-col items-center'>
						<div className='lg:flex-grow lg:w-3/5 md:w-3/5 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
							<h1 className='md:text-7xl text-6xl mb-4'>
								Mark Gutenberger
							</h1>
						</div>
						<div className='lg:w-1/2 md:w-full w-5/6'>
							<div className='min-w-full min-h-full'>
								<TypingCodeBlock
									language='rust'
									initialTypingCode='const MARK: &str ='
									typingCode={[
										'"Software Developer"',
										'"Musician"',
										'"Designer"',
									]}
									code={[
										'// like the theme? Try it! ',
										'// https://github.com/gutenfries/10x-dark-theme',
										'pub struct Mark {',
										'	name: &str,',
										'	email: String,',
										'	loves_dinosaurs: bool,',
										'	expertise: Vec<&str>,',
										'}',
										'impl Mark {',
										'	pub fn about() -> Mark {',
										'		Mark {',
										'			name: "Mark Gutenberger",',
										'			email: String::from("gutenfries@gmail.com"),',
										'			loves_dinosaurs: true,',
										'			expertise: vec![',
										'				"Rust", "C/C++", "Deno",',
										'				"(P)react", "HTML & CSS",',
										'			],',
										'		}',
										'	}',
										'}',
									]}
								/>
							</div>

							{
								/* <picture>
							<img
								className='object-cover object-center rounded-lg'
								alt='Mark Gutenberger'
								src={asset('images/mark-gutenberger-05.jpg')}
							/>
						</picture> */
							}
						</div>
					</div>
				</section>
				<section className='p-4 text-gray-800 dark:text-gray-100 border-gray-300'>
					<div className='container px-5 py-32 mx-auto'>
						<div className='flex flex-col text-center w-full mb-20'>
							<h2 className='sm:text-4xl text-3xl'>
								My Projects
							</h2>
							<p className='text-xs text-blue-500 tracking-widest mt-1'>
								Some things I have built and am working on
							</p>
						</div>
						<div className='flex flex-wrap -m-4 text-gray-100 dark:border-gray-300'>
							<div className='p-4 md:w-1/3'>
								<div className='flex rounded-lg h-full bg-gray-800 p-8 flex-col'>
									<div className='flex items-center mb-3'>
										<div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-gray-800 dark:text-gray-100 flex-shrink-0'>
											<Icons.App className='w-5 h-5' />
										</div>
										<h3 className='text-lg'>
											Personal Website
										</h3>
									</div>
									<div className='flex-grow'>
										<p className='text-lg text-base'>
											I have worked extensively on my personal website,
											continually improving it.
										</p>
										<a
											className='mt-3 text-blue-500 inline-flex items-center hover:text-blue-600 active:text-gray-700'
											href='https://github.com/gutenfries/gutenfries.deno.dev'
										>
											Source Code
											<Icons.ExternalLink className='w-4 h-4 ml-1' />
										</a>
									</div>
								</div>
							</div>
							<div className='p-4 md:w-1/3'>
								<div className='flex rounded-lg h-full bg-gray-800 p-8 flex-col'>
									<div className='flex items-center mb-3'>
										<div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-gray-800 dark:text-gray-100 flex-shrink-0'>
											<Icons.BorderAll className='w-5 h-5' />
										</div>
										<h3 className='text-lg'>
											C++ Tetris
										</h3>
									</div>
									<div className='flex-grow'>
										<p className='text-lg text-base'>
											I created Tetris in C++ using std and ncurses, utilizing
											the Object-Oriented language features.
										</p>

										<a
											href='https://github.com/gutenfries/cpp-tetris'
											className='mt-3 text-blue-500 inline-flex items-center hover:text-blue-600 active:text-gray-700'
										>
											Source Code
											<Icons.ExternalLink className='w-4 h-4 ml-1' />
										</a>
									</div>
								</div>
							</div>
							<div className='p-4 md:w-1/3'>
								<div className='flex rounded-lg h-full bg-gray-800 p-8 flex-col'>
									<div className='flex items-center mb-3'>
										<div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-gray-800 dark:text-gray-100 flex-shrink-0'>
											<Icons.Terminal className='w-5 h-5' />
										</div>
										<h3 className='text-lg'>
											Rust Dino Game
										</h3>
									</div>
									<div className='flex-grow'>
										<p className='text-lg text-base'>
											I am currently building a dino game from scratch, in
											Rust. I plan to target this for web in the future as
											well.
										</p>
										<a
											href='https://github.com/gutenfries/dino_rs'
											className='mt-3 text-blue-500 inline-flex items-center hover:text-blue-600 active:text-gray-700'
										>
											Source Code
											<Icons.ExternalLink className='w-4 h-4 ml-1' />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='p-4 text-gray-800 dark:text-gray-100  border-gray-300'>
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
								<div className='flex-grow'>
									<h2 className='sm:text-8xl text-4xl'>
										About Me
									</h2>
								</div>
							</div>
							<div className='flex flex-col mb-10 lg:items-start items-center'>
								<div className='flex-grow'>
									<h3 className='sm:text-4xl text-3xl mb-3'>
										Software Development
									</h3>
									<p className='text-lg text-base'>
										I am a software developer, working mostly with web
										technologies, as well as systems langauges, C/C++ and Rust.
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
									<h3 className='sm:text-4xl text-3xl mb-3'>
										Music
									</h3>
									<p className='text-lg text-base'>
										I am a musician, namely a drummer. I have been playing for
										several years and am passionate about jazz and corps-style
										rudimental drumming. I also play guitar, bass, banjo, and
										piano.
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
									<h3 className='sm:text-4xl text-3xl mb-3'>
										Personal
									</h3>
									<p className='text-lg text-base'>
										Aside from programming and music, I enjoy mountain biking,
										skiing, and learning new things. I really enjoy good coffee
										and spending time with friends.
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
				<section className='p-4 text-gray-800 dark:text-gray-100  border-gray-300'>
					<div className='container px-5 py-32 mx-auto'>
						<div className='flex flex-wrap w-full mb-20 flex-col items-center text-center'>
							<h2 className='sm:text-4xl text-3xl mb-2'>
								Pitchfork Kickstarter Taxidermy
							</h2>
							<p className='text-lg lg:w-1/2 w-full text-base'>
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
									<h3 className='text-lg mb-2'>
										Shooting Stars
									</h3>
									<p className='text-lg text-base'>
										Fingerstache flexitarian street art 8-bit waist co, subway
										tile poke farm.
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
									<h3 className='text-lg mb-2'>
										The Catalyzer
									</h3>
									<p className='text-lg text-base'>
										Fingerstache flexitarian street art 8-bit waist co, subway
										tile poke farm.
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
											<path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'>
											</path>
											<circle cx='12' cy='7' r='4'></circle>
										</svg>
									</div>
									<h3 className='text-lg mb-2'>
										Neptune
									</h3>
									<p className='text-lg text-base'>
										Fingerstache flexitarian street art 8-bit waist co, subway
										tile poke farm.
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
									<h3 className='text-lg mb-2'>
										Melanchole
									</h3>
									<p className='text-lg text-base'>
										Fingerstache flexitarian street art 8-bit waist co, subway
										tile poke farm.
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
									<h3 className='text-lg mb-2'>
										Bunker
									</h3>
									<p className='text-lg text-base'>
										Fingerstache flexitarian street art 8-bit waist co, subway
										tile poke farm.
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
									<h3 className='text-lg mb-2'>
										Ramona Falls
									</h3>
									<p className='text-lg text-base'>
										Fingerstache flexitarian street art 8-bit waist co, subway
										tile poke farm.
									</p>
								</div>
							</div>
						</div>
						<button
							type='button'
							className='flex mx-auto mt-16 text-gray-800 dark:text-gray-100 bg-blue-500 border-0 py-2 px-8  hover:bg-blue-600 rounded-lg text-lg'
						>
							Button
						</button>
					</div>
				</section>
				<section className='p-4 text-gray-800 dark:text-gray-100 border-gray-300'>
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
							<p className='text-lg text-lg'>
								Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
								taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman
								taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid
								fanny pack vaporware. Man bun next level coloring book skateboard
								four loko knausgaard. Kitsch keffiyeh master cleanse direct trade
								blue juice before they sold out gentrify plaid gastropub normcore
								XOXO 90's pickled cblue jean shorts. Slow-carb next level
								shoblueitch ethical authentic, yr scenester sriracha forage franzen
								organic drinking vinegar.
							</p>
							<span className='inline-block h-1 w-10 rounded-lg bg-blue-500 mt-8 mb-6'>
							</span>
							<h2 className='tracking-wider text-sm'>
								HOLDEN CAULFIELD
							</h2>
							<p className='text-lg'>
								Senior Product Designer
							</p>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

export default IndexPage;
