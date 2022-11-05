import { PageProps } from '$fresh/server.ts';
// import { asset } from '$fresh/runtime.ts';

import { Head } from '@/components/Head.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { Navbar } from '@/components/Navbar.tsx';
import { Footer } from '@/components/Footer.tsx';
import Icons from '@/utils/Icons.tsx';

import TypingCodeBlock from '@/islands/TypingCodeBlock.tsx';

function IndexPage(PageProps: PageProps) {
	return (
		<>
			<Head PageProps={PageProps} />

			<Navbar active='home' />

			<NoScript />

			<main
				id='main-content'
				className='bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-[fira]'
			>
				<section className='p-4 pt-20'>
					<div className='container flex flex-col items-center px-5 pt-8 pb-32 mx-auto lg:flex-row'>
						<div className='flex flex-col items-center mb-16 text-center lg:flex-grow lg:w-3/5 md:w-3/5 md:items-start md:text-left md:mb-0'>
							<h1 className='mb-4 text-6xl md:text-7xl'>
								Mark Gutenberger
							</h1>
						</div>
						<div className='w-5/6 lg:w-1/2 md:w-full'>
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
				<section className='p-4'>
					<div className='container px-5 py-32 mx-auto'>
						<div className='flex flex-col w-full mb-20 text-center'>
							<h2 className='text-3xl sm:text-4xl'>
								Recent Activity
								<Icons.Activity className='inline-block ml-2 sm:h-9 w-7' />
							</h2>
						</div>
						<div className='flex flex-wrap -m-4 text-gray-100 dark:border-gray-300'>
							<div className='p-4 md:w-1/3'>
								<div className='flex flex-col h-full p-8 bg-gray-800 rounded-lg'>
									<div className='flex items-center mb-3'>
										<div className='inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 bg-blue-500 rounded-full'>
											<Icons.App className='w-5 h-5' />
										</div>
										<h3 className='text-lg'>
											Personal Website
										</h3>
									</div>
									<div className='flex-grow'>
										<p className='text-base text-lg'>
											I built my personal website with Deno, Preact, twind
											(tailwind ext), Fresh, and a lot of time & creativity.
										</p>
										<a
											className='inline-flex items-center mt-3 text-blue-500 hover:text-blue-600 active:text-gray-700'
											href='https://github.com/gutenfries/gutenfries.deno.dev'
										>
											Source Code
											<Icons.ExternalLink className='w-4 h-4 ml-1' />
										</a>
									</div>
								</div>
							</div>
							<div className='p-4 md:w-1/3'>
								<div className='flex flex-col h-full p-8 bg-gray-800 rounded-lg'>
									<div className='flex items-center mb-3'>
										<div className='inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 bg-blue-500 rounded-full'>
											<Icons.BorderAll className='w-5 h-5' />
										</div>
										<h3 className='text-lg'>
											C++ Tetris
										</h3>
									</div>
									<div className='flex-grow'>
										<p className='text-base text-lg'>
											I created Tetris in C++ using std and ncurses, utilizing
											the Object-Oriented language features of C++.
										</p>

										<a
											href='https://github.com/gutenfries/cpp-tetris'
											className='inline-flex items-center mt-3 text-blue-500 hover:text-blue-600 active:text-gray-700'
										>
											Source Code
											<Icons.ExternalLink className='w-4 h-4 ml-1' />
										</a>
									</div>
								</div>
							</div>
							<div className='p-4 md:w-1/3'>
								<div className='flex flex-col h-full p-8 bg-gray-800 rounded-lg'>
									<div className='flex items-center mb-3'>
										<div className='inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 bg-blue-500 rounded-full'>
											<Icons.Terminal className='w-5 h-5' />
										</div>
										<h3 className='text-lg'>
											Rust Dino Game
										</h3>
									</div>
									<div className='flex-grow'>
										<p className='text-base text-lg'>
											I built a mock of the chrome dino game in rust, using
											{' '}
											<a
												href='https://github.com/amethyst/bracket-lib'
												className='inline-flex items-center text-blue-500 hover:text-blue-600 active:text-gray-700'
												target='_blank'
												rel='noopener'
											>
												lib-bracket
											</a>{' '}
											as the graphics library.
										</p>
										<a
											href='https://github.com/gutenfries/dino_rs'
											className='inline-flex items-center mt-3 text-blue-500 hover:text-blue-600 active:text-gray-700'
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
				<section className='p-4 '>
					<div className='container flex flex-wrap px-5 py-32 mx-auto'>
						<div className='w-full mb-10 overflow-hidden rounded-lg lg:w-1/2 lg:mb-0'>
							{/* <div class='max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8'> */}
							<img
								class='w-full'
								src='https://tailwindcss.com/img/card-top.jpg'
								alt='Sunset in the mountains'
							/>
							<div class='px-6 py-4'>
								<h3 class='font-bold text-xl mb-2'>The Coldest Sunset</h3>
								<p class='text-gray-300 text-base'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Voluptatibus quia, nulla! Maiores et perferendis eaque,
									exercitationem praesentium nihil.
								</p>
								{/* </div> */}
							</div>
						</div>
						<div className='flex flex-col flex-wrap -mb-10 text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left'>
							<div className='flex flex-col items-center mb-10 lg:items-start'>
								<div className='flex-grow'>
									<h2 className='text-4xl sm:text-8xl'>
										About Me
									</h2>
								</div>
							</div>
							<div className='flex flex-col items-center mb-10 lg:items-start'>
								<div className='flex-grow'>
									<h3 className='mb-3 text-3xl sm:text-4xl'>
										Software Development
									</h3>
									<p className='text-base text-lg'>
										I am a software developer, working mostly with web
										technologies, as well as systems langauges, C/C++ and Rust.
									</p>
									{
										/* <a className='inline-flex items-center mt-3 text-blue-500 hover:text-blue-600 active:text-gray-700'>
									Learn More
									<Icons.ExternalLink className='w-4 h-4 ml-1' />
								</a> */
									}
								</div>
							</div>
							<div className='flex flex-col items-center mb-10 lg:items-start'>
								<div className='flex-grow'>
									<h3 className='mb-3 text-3xl sm:text-4xl'>
										Music
									</h3>
									<p className='text-base text-lg'>
										I am a musician, namely a drummer. I have been playing for
										several years and am passionate about jazz and corps-style
										rudimental drumming. I also play guitar, bass, banjo, and
										piano.
									</p>
									{
										/* <a className='inline-flex items-center mt-3 text-blue-500 hover:text-blue-600 active:text-gray-700'>
									Learn More
									<Icons.ExternalLink className='w-4 h-4 ml-1' />
								</a> */
									}
								</div>
							</div>
							<div className='flex flex-col items-center mb-10 lg:items-start'>
								<div className='flex-grow'>
									<h3 className='mb-3 text-3xl sm:text-4xl'>
										Personal
									</h3>
									<p className='text-base text-lg'>
										Aside from programming and music, I enjoy mountain biking,
										skiing, and learning new things. I really enjoy good coffee
										and spending time with friends.
									</p>
									{
										/* <a className='inline-flex items-center mt-3 text-blue-500 hover:text-blue-600 active:text-gray-700'>
									Learn More
									<Icons.ExternalLink className='w-4 h-4 ml-1' />
								</a> */
									}
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='p-4 '>
					<div className='container px-5 py-32 mx-auto'>
						<div className='flex flex-col flex-wrap items-center w-full mb-20 text-center'>
							<h2 className='mb-2 text-3xl sm:text-4xl'>
								Pitchfork Kickstarter Taxidermy
							</h2>
							<p className='w-full text-base text-lg lg:w-1/2'>
								Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
								gentrify, subway tile poke farm-to-table.
							</p>
						</div>
						<div className='flex flex-wrap -m-4'>
							<div className='p-4 xl:w-1/3 md:w-1/2'>
								<div className='p-6 border rounded-lg'>
									<div className='inline-flex items-center justify-center w-10 h-10 mb-4 text-blue-500 bg-blue-100 rounded-full'>
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
									<h3 className='mb-2 text-lg'>
										Shooting Stars
									</h3>
									<p className='text-base text-lg'>
										Fingerstache flexitarian street art 8-bit waist co, subway
										tile poke farm.
									</p>
								</div>
							</div>
							<div className='p-4 xl:w-1/3 md:w-1/2'>
								<div className='p-6 border rounded-lg'>
									<div className='inline-flex items-center justify-center w-10 h-10 mb-4 text-blue-500 bg-blue-100 rounded-full'>
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
									<h3 className='mb-2 text-lg'>
										The Catalyzer
									</h3>
									<p className='text-base text-lg'>
										Fingerstache flexitarian street art 8-bit waist co, subway
										tile poke farm.
									</p>
								</div>
							</div>
							<div className='p-4 xl:w-1/3 md:w-1/2'>
								<div className='p-6 border rounded-lg'>
									<div className='inline-flex items-center justify-center w-10 h-10 mb-4 text-blue-500 bg-blue-100 rounded-full'>
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
									<h3 className='mb-2 text-lg'>
										Neptune
									</h3>
									<p className='text-base text-lg'>
										Fingerstache flexitarian street art 8-bit waist co, subway
										tile poke farm.
									</p>
								</div>
							</div>
							<div className='p-4 xl:w-1/3 md:w-1/2'>
								<div className='p-6 border rounded-lg'>
									<div className='inline-flex items-center justify-center w-10 h-10 mb-4 text-blue-500 bg-blue-100 rounded-full'>
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
									<h3 className='mb-2 text-lg'>
										Melanchole
									</h3>
									<p className='text-base text-lg'>
										Fingerstache flexitarian street art 8-bit waist co, subway
										tile poke farm.
									</p>
								</div>
							</div>
							<div className='p-4 xl:w-1/3 md:w-1/2'>
								<div className='p-6 border rounded-lg'>
									<div className='inline-flex items-center justify-center w-10 h-10 mb-4 text-blue-500 bg-blue-100 rounded-full'>
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
									<h3 className='mb-2 text-lg'>
										Bunker
									</h3>
									<p className='text-base text-lg'>
										Fingerstache flexitarian street art 8-bit waist co, subway
										tile poke farm.
									</p>
								</div>
							</div>
							<div className='p-4 xl:w-1/3 md:w-1/2'>
								<div className='p-6 border rounded-lg'>
									<div className='inline-flex items-center justify-center w-10 h-10 mb-4 text-blue-500 bg-blue-100 rounded-full'>
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
									<h3 className='mb-2 text-lg'>
										Ramona Falls
									</h3>
									<p className='text-base text-lg'>
										Fingerstache flexitarian street art 8-bit waist co, subway
										tile poke farm.
									</p>
								</div>
							</div>
						</div>
						<button
							type='button'
							className='flex px-8 py-2 mx-auto mt-16 text-lg bg-blue-500 border-0 rounded-lg hover:bg-blue-600'
						>
							Button
						</button>
					</div>
				</section>
				<section className='p-4'>
					<div className='container px-5 py-32 mx-auto'>
						<div className='w-full mx-auto text-center xl:w-1/2 lg:w-3/4'>
							<Icons.BlockQuote className='inline-block w-8 h-8 mb-8' />
							<p className='text-lg'>
								This is a large blockquote of someone saying something great about
								me, or potentially me stating my mission in development.
							</p>
							<span className='inline-block w-10 h-1 mt-8 mb-6 bg-blue-500 rounded-lg'>
							</span>
							<h2 className='text-sm tracking-wider'>
								Someone's Name
							</h2>
							<p className='text-lg'>
								Someone's Title
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
