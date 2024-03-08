import { Handlers, PageProps } from '$fresh/server.ts';
import { Navbar, Routes } from '../components/Navbar.tsx';

import { Footer } from '../components/Footer.tsx';
import { Head } from '../components/Head.tsx';
import { NoScript } from '../components/NoScript.tsx';
import { asset } from '$fresh/runtime.ts';
import { readFile } from '../utils/readFile.ts';
import { render as renderGFM } from 'gfm';

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
			<Navbar active={Routes.license} />
			<NoScript />

			<main id='main-content' className='p-4 pt-20'>
				{license
					? (
						<>
							<link rel='stylesheet' href={asset('/styles/markdown.css')} />
							<article
								data-color-mode='auto'
								data-light-theme='light'
								data-dark-theme='dark'
								class='markdown-body'
								className='p-10 mt-12 rounded-lg shadow-xl'
								dangerouslySetInnerHTML={{
									__html: renderGFM(license),
								}}
							/>
						</>
					)
					: (
						<>
							<h1 className='pt-20 text-5xl font-bold rounded-lg'>
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
