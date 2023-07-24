import { asset } from '$fresh/runtime.ts';
import { Handlers, PageProps } from '$fresh/server.ts';
import { render as renderGFM } from 'gfm';

import { Footer } from '@/components/Footer.tsx';
import { Head } from '@/components/Head.tsx';
import { Navbar, Routes } from '@/components/Navbar.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import Resume from '@/islands/Resume.tsx';
import { readFile } from '@/utils/readFile.ts';
import IconFileDownload from '@tabler/icons/file-download.tsx';

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
	return (
		<>
			<Head PageProps={props} />
			<Navbar active={Routes.resume} />
			<NoScript />

			<main
				id='main-content'
				className='p-4 pt-20 text-gray-800 bg-gray-100 dark:text-gray-200 dark:bg-gray-900 '
			>
				<Resume resumes={props.data.resumes} />

				<div className='flex justify-center'>
					<h3 className='mt-4 text-4xl text-center'>
						Download Resume
					</h3>
				</div>
				<div className='flex flex-wrap justify-center w-full mx-auto md:w-2/3'>
					<a
						type='button'
						href={asset('/resume/resume-tech.pdf')}
						className='px-6 py-2 mx-auto my-8 text-lg text-gray-100 bg-purple-500 rounded-lg dark:text-gray-800 sm:my-16 hover:bg-purple-600 active:bg-purple-700'
					>
						<span className='flex items-center justify-center'>
							<span className='mr-1'>
								Tech
							</span>
							<IconFileDownload className='inline-block w-6 h-6' />
						</span>
					</a>
					<a
						type='button'
						href={asset('/resume/resume-music.pdf')}
						className='px-6 py-2 mx-auto my-8 text-lg text-gray-100 bg-purple-500 rounded-lg dark:text-gray-800 sm:my-16 hover:bg-purple-600 active:bg-purple-700'
					>
						<span className='flex items-center justify-center'>
							<span className='mr-1'>
								Music
							</span>
							<IconFileDownload className='inline-block w-6 h-6' />
						</span>
					</a>
				</div>
			</main>
			<Footer />
		</>
	);
}
