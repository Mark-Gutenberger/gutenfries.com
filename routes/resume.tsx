import { Handlers, PageProps } from '$fresh/server.ts';
import { readFile } from '@/utils/readFile.ts';
import { asset } from '$fresh/runtime.ts';

import * as gfm from 'gfm';

import { Navbar } from '@/components/Navbar.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { Footer } from '@/components/Footer.tsx';
import { Head } from '@/components/Head.tsx';
import Icons from '@/utils/Icons.tsx';

type ActiveResumeState = 'techResume' | 'generalResume' | 'musicResume';
type ActiveResumeURLState = 'tech' | 'general' | 'music';

interface Data {
	resume: string | null;
	activeResume: ActiveResumeState;
}

export const handler: Handlers<Data> = {
	async GET(req, ctx) {
		const url = new URL(req.url);
		let activeResume = url.searchParams.get('activeResume') as ActiveResumeURLState ||
			'tech' as ActiveResumeURLState;

		// don't allow invalid activeResume values
		if (!['tech', 'general', 'music'].includes(activeResume)) {
			activeResume = 'tech' as ActiveResumeURLState;
		}

		const resume = await readFile(`./static/resume/resume-${activeResume}.md`);

		if (!resume) {
			console.error('Error: resume not found');
			return ctx.renderNotFound();
		}

		return ctx.render({
			...ctx.state,
			resume,
			activeResume: `${activeResume}Resume` as Data['activeResume'],
		});
	},
};

function ResumePage(props: PageProps<Data>) {
	return (
		<>
			<Head PageProps={props} />
			<Navbar active='resume' />
			<NoScript />

			<main
				id='main-content'
				className='p-4 pt-20 text-gray-800 bg-gray-100 dark:text-gray-200 dark:bg-gray-900 '
			>
				{props.data.resume
					? (
						<>
							<div className='w-full h-full p-2 pt-4 mt-4'>
								{/* navbar */}

								<ul className='flex flex-row justify-start ml-5'>
									<li>
										<a
											type='button'
											className={`px-6 border-tl dark:border-blue-500 pt-1.5 pb-1 w-auto text-lg font-medium text-gray-200 rounded-t-lg shadow-xl cursor-pointer ${
												props.data.activeResume === 'techResume'
													? 'bg-blue-500'
													: 'bg-gray-800'
											}`}
											href='/resume?activeResume=tech'
										>
											Tech
										</a>
									</li>
									<li>
										<a
											type='button'
											className={`px-6 border-tl dark:border-blue-500 pt-1.5 pb-1 w-auto text-lg font-medium text-gray-200 rounded-t-lg shadow-xl cursor-pointer ${
												props.data.activeResume === 'musicResume'
													? 'bg-blue-500'
													: 'bg-gray-800'
											}`}
											href='/resume?activeResume=music'
										>
											Music
										</a>
									</li>
									<li>
										<a
											type='button'
											className={`px-6 border-tl border-r dark:border-blue-500 pt-1.5 pb-1 w-auto text-lg font-medium text-gray-200 rounded-t-lg shadow-xl cursor-pointer ${
												props.data.activeResume === 'generalResume'
													? 'bg-blue-500'
													: 'bg-gray-800'
											}`}
											href='/resume?activeResume=general'
										>
											General
										</a>
									</li>
								</ul>

								{/* resume */}
								<section>
									<style
										dangerouslySetInnerHTML={{
											__html: gfm.CSS,
										}}
									/>
									<article
										data-color-mode='auto'
										data-light-theme='light'
										data-dark-theme='dark'
										class='markdown-body'
										className='p-10 rounded-lg shadow-xl'
										dangerouslySetInnerHTML={{
											__html: gfm.render(props.data.resume),
										}}
									/>
								</section>
							</div>
						</>
					)
					: (
						<>
							<h1 className='pt-20 text-5xl font-bold rounded-lg'>Loading...</h1>
						</>
					)}

				<div className='flex justify-center'>
					<h3 className='mt-4 text-4xl text-center'>
						Download Resume
					</h3>
				</div>
				<div className='flex flex-wrap justify-center w-full mx-auto md:w-2/3'>
					<a
						type='button'
						href={asset('/resume/resume-tech.pdf')}
						className='px-6 py-2 mx-auto my-8 text-lg text-gray-100 bg-blue-500 rounded-lg dark:text-gray-800 sm:my-16 hover:bg-blue-600 active:bg-blue-700'
					>
						<span className='flex items-center justify-center'>
							<span className='mr-1'>
								Tech
							</span>
							<Icons.FileDownload className='inline-block w-6 h-6' />
						</span>
					</a>
					<a
						type='button'
						href={asset('/resume/resume-music.pdf')}
						className='px-6 py-2 mx-auto my-8 text-lg text-gray-100 bg-blue-500 rounded-lg dark:text-gray-800 sm:my-16 hover:bg-blue-600 active:bg-blue-700'
					>
						<span className='flex items-center justify-center'>
							<span className='mr-1'>
								Music
							</span>
							<Icons.FileDownload className='inline-block w-6 h-6' />
						</span>
					</a>
					<a
						type='button'
						href={asset('/resume/resume-general.pdf')}
						className='px-6 py-2 mx-auto my-8 text-lg text-gray-100 bg-blue-500 rounded-lg dark:text-gray-800 sm:my-16 hover:bg-blue-600 active:bg-blue-700'
					>
						<span className='flex items-center justify-center'>
							<span className='mr-1'>
								General
							</span>
							<Icons.FileDownload className='inline-block w-6 h-6' />
						</span>
					</a>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default ResumePage;
