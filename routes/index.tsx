import { asset } from '$fresh/runtime.ts';
import { PageProps } from '$fresh/server.ts';
import { Footer } from '@/components/Footer.tsx';
import { Head } from '@/components/Head.tsx';
import { Link } from '@/components/Link.tsx';
import { Navbar } from '@/components/Navbar.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { RecentActivityCard } from '@/components/RecentActivityCard.tsx';
import { TechCard } from '@/components/TechCard.tsx';
import { Routes } from '@/routes.ts';
import IconActivity from '@tabler/icons/activity.tsx';
import IconBrandCPP from '@tabler/icons/brand-cpp.tsx';
import IconBrandDeno from '@tabler/icons/brand-deno.tsx';
import IconBrandDocker from '@tabler/icons/brand-docker.tsx';
import IconBrandFlutter from '@tabler/icons/brand-flutter.tsx';
import IconBrandReact from '@tabler/icons/brand-react.tsx';
import IconLamp from '@tabler/icons/lamp.tsx';
import IconMedal from '@tabler/icons/medal.tsx';
import IconQuote from '@tabler/icons/quote.tsx';
import IconSettings from '@tabler/icons/settings.tsx';
import IconShoe from '@tabler/icons/shoe.tsx';
import IconStack from '@tabler/icons/stack.tsx';
import { MarcCard } from '@/components/MarcCard.tsx';
import Carousel from '@/islands/Carousel.tsx';

function IndexPage(PageProps: PageProps) {
	return (
		<>
			<Head PageProps={PageProps} />

			<Navbar
				active={Routes.home}
			/>

			<NoScript />

			<main
				id='main-content'
				className='flex flex-col justify-center bg-gray-100 dark:bg-gray-900 p-6 pt-20 text-gray-800 dark:text-gray-200 transition'
			>
				<section className='flex flex-col items-center mx-auto px-8 pb-32 container'>
					<h1 className='py-48 sm:py-64 md:py-72 font-sedwick text-6xl text-center sm:text-8xl md:text-8xl lg:text-8xl xs:text-7xl xl:text-9xl animation-gradient-text'>
						Marc Gutenberger
					</h1>
				</section>

				<section className='flex flex-wrap mx-auto md:px-10 py-32 container'>
					<Carousel className='mb-32 lg:w-1/2' />

					<div className='flex flex-col flex-wrap mb-10 lg:py-6 lg:pl-12 lg:w-1/2 text-center lg:text-left'>
						<div className='flex flex-col flex-grow items-center lg:items-start mb-5'>
							<h2 className='flex justify-center items-center w-full font-semibold text-5xl text-center md:text-6xl xl:text-7xl'>
								Who is Marc?
								<span className='ml-4'>
									<IconLamp
										size={48}
									/>
								</span>
							</h2>
						</div>
						<MarcCard title='Software Developer'>
							I'm a software & website developer with a passion for building with the
							{' '}
							<Link href='https://www.rust-lang.org/'>
								Rust programming language
							</Link>. I love solving unique and challenging problems, and I am always
							looking for new opportunities to learn and grow in my skills. I also am
							proficient in TypeScript, C/C++, and Dart, including web and mobile
							development.
						</MarcCard>
						<MarcCard title='Music Educator'>
							I have a great passion for music, and share that passion through
							education. I co-founded{' '}
							<Link internal href='/mwotw'>
								Musical Wonders of the World
							</Link>{' '}
							to reach out to youth in the community with the mission of creating a
							sense of global community through learning about the music of different
							cultures and time periods.
						</MarcCard>
						<MarcCard title='Dinosaur Enthusiast'>
							No further explanation necessary.
						</MarcCard>
					</div>
				</section>
				<section className='mx-auto px-5 py-32 container'>
					<h2 className='flex justify-center items-center mb-20 w-full font-semibold text-5xl text-center md:text-6xl lg:text-7xl'>
						Recent Activity
						<span className='ml-4'>
							<IconActivity size={48} />
						</span>
					</h2>

					<hr className='md:flex border-purple-500 border-x-2 hidden mx-auto mb-10 border-t-2 rounded-t-lg md:w-4/5 h-10' />

					<div className='flex flex-wrap dark:border-gray-300 -m-4 text-gray-100'>
						<div className='p-4 md:w-1/3'>
							<span>
								<RecentActivityCard
									title='SkillsUSA Medal'
									icon={<IconMedal />}
								>
									I recieved the{' '}
									<Link href='https://www.skillsusa.org/'>SkillsUSA</Link>{' '}
									State Software Engineering Award for best performance across a
									written test, 3 written programs, and a technical interview. The
									attendence to the competition was 150+ college and high school
									students from across the state.
								</RecentActivityCard>
							</span>
						</div>
						<div className='p-4 md:w-1/3'>
							<span>
								<RecentActivityCard
									title='2023 DCI Contract'
									icon={<IconShoe />}
								>
									I auditioned and recieved a contract to march the{' '}
									<Link href='https://rivercityrhythm.org'>
										River City Rhythm
									</Link>{' '}
									snareline for the 2023 DCI Season, however had to respectfully
									decline due to finances and previous outstanding commitments.
								</RecentActivityCard>
							</span>
						</div>
						<div className='p-4 md:w-1/3'>
							<span>
								<RecentActivityCard
									title='Engineer lead at Dart-Sys'
									icon={<IconBrandFlutter />}
								>
									I recently took on the role of lead engineer at{' '}
									<Link href='https://github.com/dart-sys'>Dart-Sys</Link>, a
									startup that provides raw metal access to the{' '}
									<Link href='https://dart.dev/overview#platform'>Dart VM</Link>
									{' '}
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
							</span>
						</div>
					</div>
				</section>
				<section className='mx-auto px-5 py-32 container'>
					<h2 className='flex justify-center items-center mb-20 w-full font-semibold text-5xl text-center md:text-6xl lg:text-7xl'>
						Tech Stack
						<i className='ml-4'>
							<IconStack size={48} />
						</i>
					</h2>

					<hr className='md:flex border-purple-500 border-x-2 hidden mx-auto mb-10 border-t-2 rounded-t-lg md:w-4/5 h-10' />

					<div className='flex flex-wrap -m-4'>
						<TechCard
							tech='Rust'
							techLink='https://www.rust-lang.org/'
							icon={<IconSettings />}
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
							icon={<IconBrandCPP />}
						>
							I am very familiar with the{' '}
							<Link href='https://wikipedia.org/wiki/C%2B%2B20'>
								C++20 language features
							</Link>
							, as well as the C++ standard library. I am well versed in C++ best
							practices, as well as advanced features, such as{' '}
							<Link href='https://wikipedia.org/wiki/Smart_pointer'>
								smart pointers
							</Link>{' '}
							and{' '}
							<Link href='https://wikipedia.org/wiki/Resource_acquisition_is_initialization'>
								RAII
							</Link>. I am familiar with C++ ecosystems, such as{' '}
							<Link href='https://www.gnu.org/software/make/'>
								Make
							</Link>{' '}
							and{' '}
							<Link href='https://cmake.org/'>
								CMake
							</Link>.
						</TechCard>

						<TechCard
							tech='Flutter'
							techLink='https://flutter.dev/'
							icon={<IconBrandFlutter />}
						>
							I have used Flutter to build a multiplatform application that keeps
							score for a game called{' '}
							<Link href='https://wikipedia.org/wiki/Mille_Bornes'>
								Mille Bournes
							</Link>. The application features state management,{' '}
							<Link href='https://developer.microsoft.com/fluentui'>
								Fluent UI
							</Link>, and persistent storage. The application runs on all desktop,
							mobile, and web platforms. the codebase is available on{' '}
							<Link href='https://github.com/gutenfries/mille'>
								GitHub
							</Link>.
						</TechCard>

						<TechCard
							tech='Deno'
							techLink='https://deno.land/'
							icon={<IconBrandDeno />}
						>
							I have a passion for the Deno ECMAScript runtime. I have contributed to
							the Deno core project, and have written multiple applications using the
							Deno runtime.{' '}
							<Link href='https://github.com/gutenfries/gutenfries.deno.dev'>
								This website
							</Link>{' '}
							is built with Deno, utilizing the{' '}
							<Link href='https://fresh.deno.dev/'>
								Fresh
							</Link>{' '}
							Deno web framework. Another featured project is a{' '}
							<Link href='https://wikipedia.org/wiki/Fibonacci_sequence'>
								Fibonacci Sequence
							</Link>{' '}
							REST API, which is available on{' '}
							<Link href='https://github.com/gutenfries/fibby'>
								GitHub
							</Link>.
						</TechCard>

						<TechCard
							tech='(P)React'
							techLink='https://preactjs.org/'
							icon={<IconBrandReact />}
						>
							I am quite familiar with{' '}
							<Link href='https://reactjs.org/'>
								React
							</Link>{' '}
							and{' '}
							<Link href='https://preactjs.org/'>
								Preact
							</Link>{' '}
							ecosystems and best practices in both the Deno and Node.js runtimes.
							This website is built using Preact.
						</TechCard>
						<TechCard
							tech='Docker'
							techLink='https://www.docker.com/'
							icon={<IconBrandDocker />}
						>
							I am very familiar with Docker, and have used it to containerize many
							applications, including{' '}
							<Link href='https://github.com/gutenfries/gutenfries.deno.dev'>
								this website
							</Link>. I am familiar with how to build and deploy Docker containers,
							and have used Docker in production environments.
						</TechCard>
					</div>
				</section>
				<section className='mx-auto px-5 py-32 container'>
					<p className='flex justify-center items-center mx-auto w-full lg:w-3/4 xl:w-1/2'>
						<span className='ml-4'>
							<IconQuote className='inline-block mb-8 w-8 h-8' />
						</span>
						<blockquote className='text-center text-lg'>
							My mission in software engineering is to solve unique problems with
							technology. I am passionate about{' '}
							<Link href='https://rust-lang.org/'>
								Rust
							</Link>{' '}
							and love using it to write fast, safe, and reliable software. I believe
							that technology should be accessible to everyone, and I am committed to
							creating software that is usable by anyone, without sacrificing
							performance, quality, or security.
						</blockquote>
						<hr className='border-1 border-purple-500 bg-purple-500 mx-auto my-5 rounded-lg w-2/5 h-0' />
						<h2 className='text-3xl text-center'>
							Marc Gutenberger
						</h2>
						<p className='text-center text-lg'>
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
