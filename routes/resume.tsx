import { Handlers, PageProps } from '$fresh/server.ts';
import { render as renderGFM } from 'gfm';
import { Footer } from '@/components/Footer.tsx';
import { Head } from '@/components/Head.tsx';
import { Routes } from '@/routes.ts';
import { Navbar } from '@/components/Navbar.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { readFile } from '@/utils/readFile.ts';
import IconLoader from '@tabler/icons/loader.tsx';

interface Data {
	resumes: string[];
}

export const handler: Handlers<Data> = {
	async GET(_req, ctx) {
		const resumes = [
			renderGFM(await readFile(`./static/resume/resume-tech.md`) ?? ''),
			renderGFM(await readFile(`./static/resume/resume-music.md`) ?? ''),
		];

		try {
			return ctx.render({
				...ctx.state,
				resumes,
			});
		} catch (e) {
			console.error(e);
			return ctx.renderNotFound();
		}
	},
};

export default function ResumePage(props: PageProps<Data>) {
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
					src={`https://drive.google.com/viewer?srcid=${file_id}&pid=explorer&efh=false&a=v&chrome=false&embedded=true`}
				/>
			</main>
			<Footer />
		</>
	);
}
