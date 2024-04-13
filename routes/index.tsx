import { PageProps } from '$fresh/server.ts';
import { Link } from '@/components/Link.tsx';
import { RecentActivityCard } from '@/components/RecentActivityCard.tsx';
import { TechCard } from '@/components/TechCard.tsx';
import IconBrandCPP from '@tabler/icons/brand-cpp.tsx';
import IconBrandDeno from '@tabler/icons/brand-deno.tsx';
import IconBrandDocker from '@tabler/icons/brand-docker.tsx';
import IconMusic from '@tabler/icons/music.tsx';
import IconBrandReact from '@tabler/icons/brand-react.tsx';
import IconMedal from '@tabler/icons/medal.tsx';
import IconSettings from '@tabler/icons/settings.tsx';
import IconShoe from '@tabler/icons/shoe.tsx';
import { Card } from '../components/Card.tsx';
import Carousel from '@/islands/Carousel.tsx';
import IconBrandFlutter from '@tabler/icons/brand-flutter.tsx';

function IndexPage(_PageProps: PageProps) {
	return (
		<>
			<section className='flex flex-col items-center mx-auto px-8 pb-40 container'>
				<h1 className='py-48 sm:py-64 md:py-72 font-sedwick text-6xl text-center sm:text-8xl md:text-8xl lg:text-8xl xs:text-7xl xl:text-9xl animation-gradient-text'>
					Marc Gutenberger
				</h1>
			</section>

			<section className='flex flex-wrap mx-auto md:px-10 py-40 container'>
				<Carousel className='mb-32 lg:w-1/2' />

				<div className='flex flex-col flex-wrap mb-10 lg:py-6 lg:pl-12 lg:w-1/2 text-center lg:text-left'>
					<div className='flex flex-col flex-grow items-center lg:items-start mb-5'>
						<h2 className='flex justify-center items-center w-full font-semibold text-5xl text-center md:text-6xl xl:text-7xl'>
							Who is Marc?
						</h2>
					</div>
					<Card title='Software Developer'>
						I'm a software & website developer with a passion for building with the{' '}
						<Link href='https://www.rust-lang.org/'>
							Rust programming language
						</Link>. I love solving unique and challenging problems, and I am always
						looking for new opportunities to learn and grow in my skills. I also am
						proficient in TypeScript, C/C++, and Dart, including web and mobile
						development.
					</Card>
					<Card title='Music Educator'>
						I have a great passion for music, and share that passion through education.
						I co-founded{' '}
						<Link internal href='/mwotw'>
							Musical Wonders of the World
						</Link>{' '}
						to reach out to youth in the community with the mission of creating a sense
						of global community through learning about the music of different cultures
						and time periods.
					</Card>
					<Card title='Dinosaur Enthusiast' icon={<IconBrandDeno />}>
						No further explanation necessary.
					</Card>
				</div>
			</section>
			<section className='mx-auto px-5 py-40 container'>
				<h2 className='flex justify-center items-center mb-20 w-full font-semibold text-5xl text-center md:text-6xl lg:text-7xl'>
					Recent Activity
				</h2>

				<hr className='md:flex border-purple-500 border-x-2 hidden mx-auto mb-10 border-t-2 rounded-t-lg md:w-4/5 h-10' />

				<div className='flex flex-wrap dark:border-gray-300 -m-4 text-gray-100'>
					<div className='p-4 md:w-1/3'>
						<RecentActivityCard
							title='Co-Founder of MWOTW'
							icon={<IconMusic />}
						>
							Partnering with{'  '}
							<Link href='https://www.amigoskate.com/amigo-music'>
								Amigo Skate Charity
							</Link>, I founded{' '}
							<Link href='/mwotw' internal>
								Musical Wonders of the World
							</Link>{'  '}
							to reach youth through the music of different cultures and time periods.
							Our goal is to create a sense of cultural unity through the music from
							each of our parts of the world.
						</RecentActivityCard>
					</div>
					<div className='p-4 md:w-1/3'>
						<RecentActivityCard
							title='DCI Contracted'
							icon={<IconShoe />}
						>
							I received a contract to march{' '}
							<Link href='https://rivercityrhythm.org'>
								River City Rhythm
							</Link>{' '}
							Drum & Bugle Corps for the 2023 DCI Season. I also received a contract
							to march Legends PAA for the 2022 DCI season.
						</RecentActivityCard>
					</div>
					<div className='p-4 md:w-1/3'>
						<RecentActivityCard
							title='SkillsUSA Medalist'
							icon={<IconMedal />}
						>
							I received the <Link href='https://www.skillsusa.org/'>SkillsUSA</Link>
							{' '}
							state Computer Programming award for best performance across a written
							test, 3 written programs, and a technical interview. The competition
							attendance was 150+ high school and college students.
						</RecentActivityCard>
					</div>
				</div>
			</section>
			<section className='mx-auto px-5 py-40 container'>
				<h2 className='flex justify-center items-center mb-20 w-full font-semibold text-5xl text-center md:text-6xl lg:text-7xl'>
					Tech Stack
				</h2>

				<hr className='md:flex border-purple-500 border-x-2 hidden mx-auto mb-10 border-t-2 rounded-t-lg md:w-4/5 h-10' />

				<div className='flex flex-wrap -m-4'>
					<TechCard
						tech='Rust'
						techLink='https://www.rust-lang.org/'
						icon={<IconSettings />}
					>
						I've been writing Rust code for several years, and I am very familiar with
						with the <Link href='https://crates.io'>ecosystem</Link>,{' '}
						and advanced language features. I have written numerous applications in the
						Rust language from the ground up, and others upon existing codebases.
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
						practices, and advanced features, such as{' '}
						<Link href='https://wikipedia.org/wiki/Smart_pointer'>
							smart pointers
						</Link>{' '}
						and{' '}
						<Link href='https://wikipedia.org/wiki/Resource_acquisition_is_initialization'>
							RAII
						</Link>.
					</TechCard>

					<TechCard
						tech='Flutter'
						techLink='https://flutter.dev/'
						icon={<IconBrandFlutter />}
					>
						I have used Flutter to build a multiplatform application that keeps score
						for the card game{' '}
						<Link href='https://wikipedia.org/wiki/Mille_Bornes'>
							Mille Bournes
						</Link>. The application features state management,{' '}
						<Link href='https://developer.microsoft.com/fluentui'>
							Fluent UI
						</Link>, and persistent storage. The application runs on all desktop,
						mobile, and web platforms. Code available on{' '}
						<Link href='https://github.com/gutenfries/mille'>
							GitHub
						</Link>.
					</TechCard>

					<TechCard
						tech='Deno'
						techLink='https://deno.land/'
						icon={<IconBrandDeno />}
					>
						I have a passion for the Deno{' '}
						<Link href='https://ecma-international.org/technical-committees/tc39/'>
							ECMAScript
						</Link>{' '}
						runtime. I have contributed to the Deno core project, and have written
						multiple applications using the Deno runtime.{' '}
						<Link href='https://github.com/gutenfries/gutenfries.deno.dev'>
							This website
						</Link>{' '}
						is built with Deno, utilizing the{' '}
						<Link href='https://fresh.deno.dev/'>
							Fresh
						</Link>{' '}
						Deno web framework.
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
						ecosystems and best practices in both the Deno and Node.js runtimes. This
						website is built using Preact.
					</TechCard>
					<TechCard
						tech='Docker'
						techLink='https://www.docker.com/'
						icon={<IconBrandDocker />}
					>
						I am very familiar with Docker and have used it alongside almost all code I
						write, including{' '}
						<Link href='https://github.com/gutenfries/gutenfries.deno.dev'>
							this website
						</Link>. I am familiar with how to build and deploy Docker containers, and
						have used Docker in production environments.
					</TechCard>
				</div>
			</section>
		</>
	);
}

export default IndexPage;
