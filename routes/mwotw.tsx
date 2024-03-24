import { Handlers, PageProps } from '$fresh/server.ts';
import { Routes } from '@/routes.ts';
import { Navbar } from '@/components/Navbar.tsx';
import { Footer } from '@/components/Footer.tsx';
import { Head } from '@/components/Head.tsx';
import { NoScript } from '@/components/NoScript.tsx';

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
			</main>
			<Footer />
		</>
	);
}
