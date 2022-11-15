import { Handlers, PageProps } from '$fresh/server.ts';
import { asset } from '$fresh/runtime.ts';

import { Head } from '@/components/Head.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { Navbar } from '@/components/Navbar.tsx';
import { Footer } from '@/components/Footer.tsx';
import { Link } from '@/components/JSX/Link.tsx';
import { ContentPicker } from '@/components/ContentPicker.tsx';
import { RecentActivityCard } from '@/components/RecentActivityCard.tsx';
import { TechCard } from '@/components/TechCard.tsx';
import Icons from '@/utils/Icons.tsx';
import TypingCodeBlock from '@/islands/TypingCodeBlock.tsx';
import { SnareAnimation } from '@/components/SnareAnimation.tsx';
import ImageSection from '@/islands/ImageSection.tsx';

type Content = 'tech' | 'music' | 'undefined' | undefined;
interface Data {
	content: Content;
	showContentPicker: boolean;
}

export const handler: Handlers<Data> = {
	GET(req, ctx) {
		const url = new URL(req.url);
		const urlContent = url.searchParams.get('content') as Content ?? undefined as Content;

		// variable reassignment because using 'as' is not fully type safe
		let content = urlContent ?? undefined;
		// default value
		let showContentPicker = true;

		// if content is defined, hide the content picker
		if (content && ['tech', 'music', 'undefined'].includes(content)) {
			showContentPicker = false;
		}

		// if content is does not contain a valid value, set it
		if (content && !['tech', 'music'].includes(content)) {
			// pick music, as the first thing they will see is the swanky CSS animation
			content = 'music';
			// if content is undefined
		} else if (!content) {
			// ...
			content = 'music';
		}

		return ctx.render({
			...ctx.state,
			content,
			showContentPicker,
		});
	},
};

function IndexPage(PageProps: PageProps<Data>) {
	const { content } = PageProps.data;

	return (
		<>
			<Head PageProps={PageProps} />

			<Navbar active='home' />

			<NoScript />

			<ContentPicker
				hide={!PageProps.data.showContentPicker}
			/>

			<main
				id='main-content'
				className='text-gray-800 bg-gray-100 dark:bg-gray-900 dark:text-gray-200'
			>
				<section className='container flex flex-col items-center px-8 pb-32 mx-auto pt-28 lg:flex-row'>
					<h1 className='w-3/5 mx-auto mb-12 text-5xl font-semibold text-center md:text-6xl lg:text-7xl'>
						Mark Gutenberger
					</h1>
					<div className='w-5/6 lg:w-1/2 md:w-full'>
						{/* display if content === tech */}
						{content === 'tech' && (
							<TypingCodeBlock
								language='rust'
								initialTypingCode='const MARK: &str ='
								typingCode={[
									'"Software Engineer"',
									'"Web Developer"',
									'"Graphic Designer"',
								]}
								code={[
									'// like the theme? Try it!',
									'// https://github.com/gutenfries/10x-dark-theme',
									'pub struct Mark {',
									'	email: String,',
									'	loves_dinosaurs: bool,',
									'	skills: Vec<&str>,',
									'}',
									'impl Mark {',
									'	pub fn about() -> Mark {',
									'		Mark {',
									'			email: String::from("gutenfries@gmail.com"),',
									'			loves_dinosaurs: true,',
									'			skills: vec![',
									'				"Rust", "C/C++",',
									'				"Deno", "Flutter",',
									'				"(P)react", "HTML & CSS",',
									'			],',
									'		}',
									'	}',
									'}',
								]}
							/>
						)}
						{/* display if content === music */}
						{content === 'music' && <SnareAnimation />}
					</div>
				</section>

				<section className='container flex flex-wrap px-10 py-32 mx-auto'>
					<ImageSection
						images={[
							{
								src: asset('/images/music/stock/snare-line.jpg'),
								alt: 'drum corps snare line',
								title: 'Drum Corps & Snareline',
								description:
									'I am passionate about corps snareline & rudimental drumming and have been marching for several years.',
							},
							{
								src: asset('/images/dev/stock/rust-code.png'),
								alt: 'drum corps snare line',
								title: 'TITLE',
								description: 'DESC 2',
							},
						]}
					/>
					<div className='flex flex-col flex-wrap mb-10 text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left'>
						<div className='flex flex-col items-center flex-grow mb-5 lg:items-start'>
							<h2 className='text-6xl font-semibold lg:text-7xl'>
								About Me
							</h2>
						</div>
						<div className='flex flex-col items-center flex-grow mb-5 lg:items-start'>
							<h3 className='mb-3 text-3xl sm:text-4xl'>
								Software Development
							</h3>
							<p className='text-base text-lg text-gray-700 dark:text-gray-300'>
								I am a software developer and I love to to solve unique and
								difficult problems. I work with web technologies and systems
								programming. I work fluently in Rust, Typescript, and C/C++, and
								have a passion for Rust and Deno, and especially the two together.
							</p>
						</div>
						<div className='flex flex-col items-center flex-grow mb-5 lg:items-start'>
							<h3 className='mb-3 text-3xl sm:text-4xl'>
								Music
							</h3>
							<p className='text-base text-lg text-gray-700 dark:text-gray-300'>
								I am musician and performer. I am a rudimental drummer, and I also
								play string instruments like guitar and bass, as well as piano. I am
								passionate about Jazz, Marching Arts, and Music Composition.
							</p>
						</div>
						<div className='flex flex-col items-center flex-grow mb-5 lg:items-start'>
							<h3 className='mb-3 text-3xl sm:text-4xl'>
								Design & Marketing
							</h3>
							<p className='text-base text-lg text-gray-700 dark:text-gray-300'>
								I have a passion for quality design and marketing and love to
								understand what makes a great product and how to design, market,
								monetize, and distribute it.
							</p>
						</div>
					</div>
				</section>
				<section className='container px-5 py-32 mx-auto'>
					<h2 className='flex items-center justify-center w-full mb-20 text-6xl font-semibold text-center lg:text-7xl'>
						Recent Activity
						<Icons.Activity className='hidden sm:inline-block ml-4 h-14 w-14' />
					</h2>

					<div className='hidden h-10 mx-auto mb-10 border-t-2 border-blue-500 rounded-t-lg md:w-4/5 md:flex border-x-2' />

					<div className='flex flex-wrap -m-4 text-gray-100 dark:border-gray-300'>
						<div className='p-4 md:w-1/3'>
							<RecentActivityCard
								title='Personal Website'
								description='I built my personal website with Fresh, Deno, Preact, twind (tailwind lib), and time.'
								source='https://github.com/gutenfries/gutenfries.deno.dev'
								icon={<Icons.App />}
							/>
						</div>
						<div className='p-4 md:w-1/3'>
							<RecentActivityCard
								title='C++ Tetris'
								description='I created Tetris in C++ using std and ncurses, utilizing the Object-Oriented language features of C++.'
								source='https://github.com/gutenfries/cpp-tetris'
								icon={<Icons.BorderAll />}
							/>
						</div>
						<div className='p-4 md:w-1/3'>
							<RecentActivityCard
								title='Rust Dino Game'
								description='I built a mock of the chrome dino game in rust, using lib-bracket as the graphics library.'
								source='https://github.com/gutenfries/dino_rs'
								icon={<Icons.Terminal />}
							/>
						</div>
					</div>
				</section>
				<section className='container px-5 py-32 mx-auto'>
					<div className='flex flex-col flex-wrap items-center w-full mb-20 text-center'>
						<h2 className='flex items-center justify-center w-full mb-20 text-6xl font-semibold text-center lg:text-7xl'>
							Technologies
							<Icons.PC className='hidden sm:inline-block ml-4 h-14 w-14' />
						</h2>
					</div>
					<div className='flex flex-wrap -m-4'>
						<TechCard
							tech='Rust'
							techLink='https://www.rust-lang.org/'
							icon={<Icons.Package />}
						>
							I am quite passionate about Rust and I am highly proficient at using it.
							I have several
							<Link
								href='https://github.com/gutenfries?tab=repositories&language=rust'
								ext
							>
								open source projects
							</Link>
							written in rust, an even
							<Link href='https://github.com/gutenfries/gutenfries.deno.dev' ext>
								this website
							</Link>
							is a little bit rusty.
						</TechCard>

						<TechCard
							tech='C/C++'
							techLink='https://www.cplusplus.com/'
							icon={<Icons.C />}
						>
							I am quite comfortable using both C and C++ and have used both languages
							independently, as well as with
							<Link
								href='https://www.rust-lang.org/'
								noEndSpace
								ext
							>
								Rust
							</Link>

							, utilizing the concepts of
							<Link
								href='https://wikipedia.org/wiki/Application_binary_interface'
								ext
							>
								ABI
							</Link>
							and
							<Link
								href='https://wikipedia.org/wiki/Foreign_function_interface'
								ext
							>
								FFI
							</Link>. I am also familiar with common C/C++ tooling, such as
							<Link
								href='https://www.gnu.org/software/make/'
								ext
							>
								Make
							</Link>
							and
							<Link
								href='https://cmake.org/'
								ext
							>
								CMake
							</Link>.
						</TechCard>

						<TechCard
							tech='Flutter'
							techLink='https://flutter.dev/'
							icon={<Icons.Flutter />}
						>
							I have used Flutter to build a few mobile apps, and have also used rust
							through the Flutter FFI to build a flutter application with rust in the
							backend. I am familiar with the Flutter tooling, ecosystem, and best
							practices.
						</TechCard>

						<TechCard
							tech='Deno'
							techLink='https://deno.land/'
							icon={<Icons.Deno />}
						>
							I am passionate about Deno and am highly proficient at using it. I have
							<Link
								href='https://github.com/gutenfries'
								ext
							>
								contributed to the Deno code base
							</Link>
							as well as created a number of deno projects, mostly availabe on GitHub.
						</TechCard>

						<TechCard
							tech='(P)React'
							techLink='https://preactjs.org/'
							icon={<Icons.React />}
						>
							I am quite familiar with
							<Link
								href='https://reactjs.org/'
								ext
							>
								React
							</Link>
							and
							<Link
								href='https://preactjs.org/'
								ext
							>
								Preact
							</Link>
							ecosystems and best practices.
							<Link
								href='https://github.com/gutenfries/gutenfries.deno.dev'
								ext
							>
								This website
							</Link>
							is built with Preact, utilizing the
							<Link
								href='https://fresh.deno.dev/'
								ext
							>
								Fresh
							</Link>
							Deno framework.
						</TechCard>

						<TechCard
							tech='Docker'
							techLink='https://www.docker.com/'
							icon={<Icons.Docker />}
						>
							I am proficient at using Docker and have used it in several projects,
							including
							<Link
								href='https://github.com/gutenfries/gutenfries.deno.dev/blob/main/Dockerfile'
								ext
								noEndSpace
							>
								this website
							</Link>.
						</TechCard>
					</div>
				</section>
				<section className='container px-5 py-32 mx-auto'>
					<p className='flex items-center justify-center w-full mx-auto xl:w-1/2 lg:w-3/4'>
						<Icons.Quote className='inline-block w-8 h-8 mb-8' />
						<blockquote className='text-lg text-center'>
							My mission in software engineering is to solve unique problems with
							technology. I am passionate about
							<Link
								href='https://rust-lang.org/'
								ext
							>
								Rust
							</Link>
							and love using it to write fast, safe, and reliable software. I believe
							that technology should be accessible to everyone, and I am committed to
							creating software that is usable by anyone, without sacrificing
							performance, quality, or security.
						</blockquote>
						<hr className='w-2/5 h-0 mx-auto my-5 bg-blue-500 border-blue-500 rounded-lg border-1' />
						<h2 className='text-3xl text-center'>
							Mark Gutenberger
						</h2>
						<p className='text-lg text-center'>
							Software Engineer
						</p>
					</p>
				</section>
			</main>
			<Footer />
		</>
	);
}

export default IndexPage;
