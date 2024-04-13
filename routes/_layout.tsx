import { PageProps } from '$fresh/server.ts';
import { Head } from '@/components/Head.tsx';
import { Navbar } from '@/components/Navbar.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { Footer } from '@/components/Footer.tsx';

export default function DefaultPageLayout(PageProps: PageProps) {
	return (
		<>
			<Head PageProps={PageProps} />
			<Navbar PageProps={PageProps} />
			<NoScript />
			<main
				id='main-content'
				className='flex flex-col justify-center bg-gray-100 dark:bg-gray-900 p-6 pt-20 text-gray-800 dark:text-gray-200 transition'
			>
				<PageProps.Component />
			</main>
			<Footer />
		</>
	);
}
