import { Handlers, PageProps } from '$fresh/server.ts';
import { asset } from '$fresh/runtime.ts';

import * as gfm from 'gfm';
import { readFile } from '@/utils/readFile.ts';

import { Navbar } from '@/components/Navbar.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { Footer } from '@/components/Footer.tsx';
import { Head } from '@/components/Head.tsx';
import Icons from '../utils/Icons.tsx';

interface Data {
	resume: string | null;
}

export const handler: Handlers<Data> = {
	async GET(_req, ctx) {
		// cache the resume for 1 day
		asset('/resume.pdf');
		asset('/resume.md');

		const resume = await readFile('./static/resume.md');
		if (!resume) {
			return ctx.renderNotFound();
		}
		return ctx.render({ ...ctx.state, resume });
	},
};

function ResumePage(props: PageProps<Data>) {
	const resume = props.data.resume;
	return (
		<>
			<Head PageProps={props} />
			<Navbar active='resume' />
			<NoScript />

			<main
				id='main-content'
				className='bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-[fira] p-4 pt-20'
			>
				{resume
					? (
						<>
							<style dangerouslySetInnerHTML={{ __html: gfm.CSS }} />
							<article
								data-color-mode='auto'
								data-light-theme='light'
								data-dark-theme='dark'
								className='rounded-lg p-10 mt-12 markdown-body'
								dangerouslySetInnerHTML={{
									__html: gfm.render(resume),
								}}
							/>

							<div className='flex justify-center'>
								<a
									href='/resume.pdf'
									className='px-6 py-2 mx-auto my-16 text-lg bg-blue-500 rounded-lg hover:bg-blue-600 active:bg-blue-700'
								>
									<span className='flex items-center justify-center'>
										<span className='mr-1'>
											Download
										</span>
										<Icons.FileDownload className='inline-block h-6 w-6' />
									</span>
								</a>
							</div>
						</>
					)
					: (
						<>
							<h1 className='rounded-lg font-bold text-5xl pt-20'>
								Loading...
							</h1>
						</>
					)}
			</main>
			<Footer />
		</>
	);
}

export default ResumePage;
