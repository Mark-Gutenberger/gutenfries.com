import {
	IconActivity,
	IconC,
	IconCPP,
	IconDeno,
	IconDocker,
	IconFlutter,
	IconLamp,
	IconMedal,
	IconPackage,
	IconPC,
	IconQuote,
	IconReact,
	IconRust,
	IconShoe,
	IconStack,
} from '@/components/Icons.tsx';
import { Navbar, Routes } from '@/components/Navbar.tsx';

import ContentCard from '@/components/ContentCard.tsx';
import { Footer } from '@/components/Footer.tsx';
import { Head } from '@/components/Head.tsx';
import { Link } from '@/components/Link.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { PageProps } from '$fresh/server.ts';
import { RecentActivityCard } from '@/components/RecentActivityCard.tsx';
import { SnareAnimation } from '@/components/SnareAnimation.tsx';
import { TechCard } from '@/components/TechCard.tsx';
import TypingCodeBlock from '@/islands/TypingCodeBlock.tsx';

function IndexPage(PageProps: PageProps) {
	const typingCode = [
		'"Software Engineer"',
		'"Web Developer"',
		'"Rust Enthusiast"',
		'"Systems Programmer"',
	];
	const code = `// like the theme? Try it!
// https://github.com/gutenfries/10x-dark-theme
pub struct Marc {
	email: String,
	loves_dinosaurs: bool,
	skills: Vec<&str>,
}
impl Marc {
	pub fn about() -> Marc {
		Marc {
			email: String::from("gutenfries@gmail.com"),
			loves_dinosaurs: true,
			skills: vec![
				"Rust", "C/C++",
				"TypeScript", "Flutter",
				"(P)react", "HTML & CSS",
			],
		}
	}
}
const MARC: &str =`;

	return (
		<>
			<Head PageProps={PageProps} />

			<Navbar active={Routes.home} />

			<NoScript />

			<main
				id='main-content'
				className='text-gray-800 bg-gray-100 dark:bg-gray-900 dark:text-gray-200'
			>
				<section className='container flex flex-col items-center px-8 pb-32 mx-auto pt-28 lg:flex-row'>
					<h1 className='w-3/5 mx-auto mb-12 font-semibold text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
						Marc Gutenberger
					</h1>
					<div className='w-5/6 lg:w-1/2 md:w-full'>
						<TypingCodeBlock lang='rust' code={code} typingCode={typingCode} />
					</div>
				</section>

				<section className='container flex flex-wrap px-10 py-32 mx-auto'>
					<ContentCard
						title='Drum Corps & Snareline'
						description={
							<>
								<span>
									I have a great passion for the marching arts. I marched
									throughout high school and recieved a contract to march at{' '}
									<Link href='https://www.rivercityrhythm.org/'>
										River City Rhythm Drum & Bugle Corps
									</Link>{' '}
									for the 2023 DCI season.
								</span>
								<br />
								<span>
									To learn how I made this animation from scratch, check out{' '}
									<Link internal href='/blog/create-a-css-drum-animation'>
										my blog
									</Link>.
								</span>
							</>
						}
					>
						<SnareAnimation />
					</ContentCard>

					<div className='flex flex-col flex-wrap mb-10 text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left'>
						<div className='flex flex-col items-center flex-grow mb-5 lg:items-start'>
							<h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold'>
								Highlights
								<IconLamp className='hidden sm:inline-block ml-4 h-14 w-14' />
							</h2>
						</div>
						<div className='flex flex-col items-center flex-grow mb-5 lg:items-start'>
							<h3 className='mb-3 text-3xl sm:text-4xl'>Software Engineering</h3>
							<p className='text-base text-lg text-gray-700 dark:text-gray-300'>
								I'm a software engineer with a passion for buiding software with the
								{' '}
								<Link href='https://www.rust-lang.org/'>
									Rust programming language
								</Link>. I love solving unique and challenging problems, and I am
								always looking for new opportunities to learn and grow upon my
								skills. I also am proficient in TypeScript, C/C++, and Dart,
								including web and mobile development.
							</p>
						</div>
						<div className='flex flex-col items-center flex-grow mb-5 lg:items-start'>
							<h3 className='mb-3 text-3xl sm:text-4xl'>Music</h3>
							<p className='text-base text-lg text-gray-700 dark:text-gray-300'>
								I share a great passion for music, especially percussive arts, and I
								have been drumming for over 5 years. I love jazz, funk, and metal
								genres and have been members of many ensembles and bands throughout
								my music career. I also play guitar and bass proficiently.
							</p>
						</div>
					</div>
				</section>
				<section className='container px-5 py-32 mx-auto'>
					<h2 className='flex items-center justify-center w-full mb-20 text-6xl font-semibold text-center lg:text-7xl'>
						Recent Activity
						<IconActivity className='hidden sm:inline-block ml-4 h-14 w-14' />
					</h2>

					<hr className='hidden h-10 mx-auto mb-10 border-t-2 border-purple-500 rounded-t-lg md:w-4/5 md:flex border-x-2' />

					<div className='flex flex-wrap -m-4 text-gray-100 dark:border-gray-300'>
						<div className='p-4 md:w-1/3'>
							<RecentActivityCard
								title='SkillsUSA Medal'
								icon={<IconMedal />}
							>
								I recieved the{' '}
								<Link href='https://www.skillsusa.org/'>SkillsUSA</Link>{' '}
								State Software Engineering Award for best performance across a
								written test, 3 written programs, and a technical interview. The
								attendence to the competition was 150+ college and high school
								students from acrss the state.
							</RecentActivityCard>
						</div>
						<div className='p-4 md:w-1/3'>
							<RecentActivityCard
								title='2023 DCI Contract'
								icon={<IconShoe />}
							>
								I auditioned and recieved a contract to march the{' '}
								<Link href='https://rivercityrhythm.org'>River City Rhythm</Link>
								{' '}
								snareline for the 2023 DCI Season, however had to respectfully
								decline due to finances and previous outstanding commitments.
							</RecentActivityCard>
						</div>
						<div className='p-4 md:w-1/3'>
							<RecentActivityCard
								title='Engineer lead at Dart-Sys'
								icon={<IconFlutter />}
							>
								I recently took on the role of lead engineer at{' '}
								<Link href='https://github.com/dart-sys'>Dart-Sys</Link>, a startup
								that provides raw metal access to the{' '}
								<Link href='https://dart.dev/overview#platform'>Dart VM</Link>{' '}
								from the{' '}
								<Link href='https://www.rust-lang.org/'>
									Rust
								</Link>{' '}
								programming language. The project has has almost{' '}
								<Link href='https://github.com/dart-sys/dart-sys/graphs/traffic'>
									100 dependent repositories
								</Link>, and several dependent{' '}
								<Link href='https://crates.io'>crates.io</Link>{' '}
								packages, ammassing over 100,000 monthly downloads.
							</RecentActivityCard>
						</div>
					</div>
				</section>

				<section className='container px-5 py-32 mx-auto'>
					<h2 className='flex items-center justify-center w-full mb-20 text-6xl font-semibold text-center lg:text-7xl'>
						Tech Stack
						<IconStack className='hidden sm:inline-block ml-4 h-14 w-14' />
					</h2>

					<hr className='hidden h-10 mx-auto mb-10 border-t-2 border-purple-500 rounded-t-lg md:w-4/5 md:flex border-x-2' />

					<div className='flex flex-wrap -m-4'>
						<TechCard
							tech='Rust'
							techLink='https://www.rust-lang.org/'
							icon={<IconRust />}
						>
							My 'Main' language is Rust. I've been writing Rust code for several
							years, and I am very competent and familiar with with the{' '}
							<Link href='https://crates.io'>ecosystem</Link>{' '}
							and advanced language features. I have written numerous applications in
							the Rust language; some form the ground up, and others upon existing
							codebases. Many of these codebases are Open-Sourced and available on
							{' '}
							<Link href='https://github.com/gutenfries'>GitHub</Link>
						</TechCard>

						<TechCard
							tech='C++'
							techLink='https://www.cplusplus.com/'
							icon={<IconCPP />}
						>
							I am quite comfortable using both C and C++ and have used both languages
							independently, as well as with
							<Link href='https://www.rust-lang.org/'>
								Rust
							</Link>

							, utilizing the concepts of
							<Link href='https://wikipedia.org/wiki/Application_binary_interface'>
								ABI
							</Link>
							and
							<Link href='https://wikipedia.org/wiki/Foreign_function_interface'>
								FFI
							</Link>. I am also familiar with common C/C++ tooling, such as
							<Link href='https://www.gnu.org/software/make/'>
								Make
							</Link>
							and
							<Link href='https://cmake.org/'>
								CMake
							</Link>.
						</TechCard>

						<TechCard
							tech='Flutter'
							techLink='https://flutter.dev/'
							icon={<IconFlutter />}
						>
							I have used Flutter to build a few mobile apps, and have also used rust
							through the Flutter FFI to build a flutter application with rust in the
							backend. I am familiar with the Flutter tooling, ecosystem, and best
							practices.
						</TechCard>

						<TechCard
							tech='Deno'
							techLink='https://deno.land/'
							icon={<IconDeno />}
						>
							I am passionate about Deno and am highly proficient at using it. I have
							<Link href='https://github.com/gutenfries'>
								contributed to the Deno code base
							</Link>
							as well as created a number of deno projects, mostly availabe on GitHub.
						</TechCard>

						<TechCard
							tech='(P)React'
							techLink='https://preactjs.org/'
							icon={<IconReact />}
						>
							I am quite familiar with
							<Link href='https://reactjs.org/'>
								React
							</Link>
							and
							<Link href='https://preactjs.org/'>
								Preact
							</Link>
							ecosystems and best practices.
							<Link href='https://github.com/gutenfries/gutenfries.deno.dev'>
								This website
							</Link>
							is built with Preact, utilizing the
							<Link href='https://fresh.deno.dev/'>
								Fresh
							</Link>
							Deno framework.
						</TechCard>

						<TechCard
							tech='Docker'
							techLink='https://www.docker.com/'
							icon={<IconDocker />}
						>
							I am proficient at using Docker and have used it in several projects,
							including
							<Link href='https://github.com/gutenfries/gutenfries.deno.dev/blob/main/Dockerfile'>
								this website
							</Link>.
						</TechCard>
					</div>
				</section>
				<section className='container px-5 py-32 mx-auto'>
					<p className='flex items-center justify-center w-full mx-auto xl:w-1/2 lg:w-3/4'>
						<IconQuote className='inline-block w-8 h-8 mb-8' />
						<blockquote className='text-lg text-center'>
							My mission in software engineering is to solve unique problems with
							technology. I am passionate about
							<Link href='https://rust-lang.org/'>
								Rust
							</Link>
							and love using it to write fast, safe, and reliable software. I believe
							that technology should be accessible to everyone, and I am committed to
							creating software that is usable by anyone, without sacrificing
							performance, quality, or security.
						</blockquote>
						<hr className='w-2/5 h-0 mx-auto my-5 bg-purple-500 border-purple-500 rounded-lg border-1' />
						<h2 className='text-3xl text-center'>
							Marc Gutenberger
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
