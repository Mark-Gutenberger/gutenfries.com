import { Handlers, PageProps } from '$fresh/server.ts';
import { asset } from '$fresh/runtime.ts';

import * as gfm from 'gfm';
import { readFile } from '@/utils/readFile.ts';

import { Navbar } from '@/components/Navbar.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { Head } from '@/components/Head.tsx';

interface Data {
	resume: string | null;
}

export const handler: Handlers<Data> = {
	async GET(_req, ctx) {
		// cache the resume for 1 day
		asset('/resume/resume.md');
		const resume = await readFile('./static/resume/resume.md');
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
			<div className='bg-gray-100 dark:bg-gray-900 font-[fira]'>
				<a
					href='#main-content'
					className='sr-only focus:not-sr-only text-red-500 outline-none focus:outline-none '
				>
					Skip to main content
				</a>

				<Navbar active='resume' />

				<NoScript />
				<main id='main-content'>
					<section className='p-4 pt-20'>
						{resume
							? (
								<>
									<style dangerouslySetInnerHTML={{ __html: gfm.CSS }} />
									<article
										className='rounded-lg p-10 mt-12 markdown-body'
										dangerouslySetInnerHTML={{
											__html: gfm.render(resume),
										}}
									/>
								</>
							)
							: (
								<>
									<h1 className='rounded-lg font-bold text-5xl pt-20'>
										Loading...
									</h1>
								</>
							)}
					</section>
				</main>
			</div>
		</>
	);
}

export default ResumePage;
