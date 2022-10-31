/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { Handlers, PageProps } from '$fresh/server.ts';
import * as gfm from 'gfm';
import { readFile } from '@/utils/readFile.ts';
import { Container } from '@/components/Container.tsx';
import { Navbar } from '../components/Navbar.tsx';
import { NoScript } from '../components/NoScript.tsx';
import { Head } from '../components/Head.tsx';
// import { ResumeLayout } from '@/layouts/ResumeLayout.tsx';
// import Resume from '@/islands/Resume.tsx';

interface Data {
	resume: string | null;
}

export const handler: Handlers<Data> = {
	async GET(_req, ctx) {
		const resume = await readFile('./static/resume/resume.md');
		return ctx.render({ ...ctx.state, resume });
	},
};

function ResumePage(props: PageProps<Data>) {
	const resume = props.data.resume;
	return (
		<div className='bg-gray-100 dark:bg-gray-900 font-[fira]'>
			<Head PageProps={props} />
			<a
				href='#main-content'
				className='sr-only focus:not-sr-only'
			>
				Skip to main content
			</a>

			<Navbar active='resume' />

			<NoScript />
			<section className='p-4 pt-20'>
				{resume
					? (
						<>
							{/* <Container> */}
							<style dangerouslySetInnerHTML={{ __html: gfm.CSS }} />
							<article
								className='rounded-lg p-10 mt-12 markdown-body'
								dangerouslySetInnerHTML={{
									__html: gfm.render(resume),
								}}
							/>
							{/* </Container> */}
						</>
					)
					: (
						<>
							{/* <Container> */}
							<h1 className='roded-lg font-bold text-5xl pt-20'>404</h1>
							<p className='mt-4'>Resume not found</p>
							{/* </Container> */}
						</>
					)}
			</section>
		</div>
	);
	// <ResumeLayout PageProps={PageProps}>
	// <Resume />
	// </ResumeLayout>
}

export default ResumePage;
