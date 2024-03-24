import { Handlers, PageProps } from '$fresh/server.ts';
import { Routes } from '@/routes.ts';
import { Navbar } from '@/components/Navbar.tsx';
import { Footer } from '@/components/Footer.tsx';
import { Head } from '@/components/Head.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import IconQuote from '@tabler/icons/quote.tsx';
import { Link } from '@/components/Link.tsx';

export default function Home(props: PageProps) {
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
				<header className='flex flex-col justify-center items-center my-64 text-center'>
					<h1 className='font-bold text-5xl'>Musical Wonders of the World</h1>
					<p className='text-2xl'>(page under construction)</p>
				</header>
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
