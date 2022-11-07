import { Handlers, PageProps } from '$fresh/server.ts';
import { asset } from '$fresh/runtime.ts';

import * as gfm from 'gfm';
import { readFile } from '@/utils/readFile.ts';

import { Navbar } from '@/components/Navbar.tsx';
import { Footer } from '@/components/Footer.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { Head } from '@/components/Head.tsx';

interface Data {
	license: string | null;
}

export const handler: Handlers<Data> = {
	async GET(_req, ctx) {
		// cache for 1 day
		asset('/mit-license.md');

		const license = await readFile('./static/mit-license.md');
		if (!license) {
			return ctx.renderNotFound();
		}
		return ctx.render({ ...ctx.state, license });
	},
};

function ResumePage(props: PageProps<Data>) {
	const license = props.data.license;
	return (
		<>
			<Head PageProps={props} />
			<Navbar active='license' />
			<NoScript />

			<main id='main-content' className='font-[fira] p-4 pt-20'>
				{license
					? (
						<>
							<style dangerouslySetInnerHTML={{ __html: gfm.CSS }} />
							<article
								data-color-mode='auto'
								data-light-theme='light'
								data-dark-theme='dark'
								className='rounded-lg p-10 shadow-xl mt-12 markdown-body'
								dangerouslySetInnerHTML={{
									__html: gfm.render(license),
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
			</main>
			<Footer />
		</>
	);
}

export default ResumePage;
