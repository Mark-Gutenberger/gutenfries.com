import { Footer } from '@/components/Footer.tsx';
import { Head } from '@/components/Head.tsx';
import { Routes } from '@/routes.ts';
import { Navbar } from '@/components/Navbar.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { PageProps } from '$fresh/server.ts';
import { asset } from '$fresh/runtime.ts';

export default function ResumePage(props: PageProps) {
	const file_id = '1nL5QPLiHmbA9ELJ0_ia4eBLH_zy7mTee';

	return (
		<>
			<Head PageProps={props} />
			<Navbar
				active={Routes.resume}
			/>
			<NoScript />

			<main
				id='main-content'
				className='bg-gray-100 dark:bg-gray-900 p-6 pt-20 text-gray-800 dark:text-gray-200 transition'
			>
				<iframe
					className='z-20 rounded-b-lg w-full h-full aspect-[8.5/11] lg:aspect-[8.5/9] xl:aspect-[8.5/7] 2xl:aspect-[8.5/5]'
					src={asset(
						`https://drive.google.com/file/d/${file_id}/preview`,
					)}
				/>
			</main>
			<Footer />
		</>
	);
}
