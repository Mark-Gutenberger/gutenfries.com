import { Handlers, PageProps } from '$fresh/server.ts';
import { render as renderGFM } from 'gfm';
import { Footer } from '@/components/Footer.tsx';
import { Head } from '@/components/Head.tsx';
import { Routes } from '@/routes.ts';
import { Navbar } from '@/components/Navbar.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { readFile } from '@/utils/readFile.ts';

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
	const file_id = '13iEIAH27j-lTKpbUni6mz1VkA6VLEca6So4HFk8W0LI';
	return (
		<>
			<Head PageProps={props} />
			<Navbar
				active={Routes.resume}
			/>
			<NoScript />

			<main
				id='main-content'
				className='bg-gray-100 dark:bg-gray-900 p-4 pt-20 text-gray-800 dark:text-gray-200'
			>
				<iframe
					className={'w-full h-full aspect-[8.5/11] lg:aspect-[8.5/9] xl:aspect-[8.5/7] 2xl:aspect-[8.5/5]'}
					src={`https://docs.google.com/viewer?srcid=${file_id}&pid=explorer&efh=false&a=v&chrome=false&embedded=true`}
				/>

				{
					/* <span>
					https://drive.google.com/uc?export=download&id=FILEID
				</span> */
				}

				{
					/* <div className='flex justify-center'>
					<h3 className='mt-4 text-4xl text-center'>
						Download Resume
					</h3>
				</div>
				<div className='flex flex-wrap justify-center mx-auto w-full md:w-2/3'>
					<a
						type='button'
						href={asset('/resume/resume-tech.pdf')}
						className='bg-purple-500 hover:bg-purple-600 active:bg-purple-700 mx-auto my-8 sm:my-16 px-6 py-2 rounded-lg text-gray-100 text-lg dark:text-gray-800'
					>
						<span className='flex justify-center items-center'>
							<span className='mr-1'>
								Tech
							</span>
							<IconFileDownload className='inline-block w-6 h-6' />
						</span>
					</a>
					<a
						type='button'
						href={asset('/resume/resume-music.pdf')}
						className='bg-purple-500 hover:bg-purple-600 active:bg-purple-700 mx-auto my-8 sm:my-16 px-6 py-2 rounded-lg text-gray-100 text-lg dark:text-gray-800'
					>
						<span className='flex justify-center items-center'>
							<span className='mr-1'>
								Music
							</span>
							<IconFileDownload className='inline-block w-6 h-6' />
						</span>
					</a>
				</div> */
				}
			</main>
			<Footer />
		</>
	);
}
