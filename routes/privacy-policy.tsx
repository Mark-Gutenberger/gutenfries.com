import * as gfm from 'gfm';

import { Handlers, PageProps } from '$fresh/server.ts';
import { Navbar, Routes } from '@/components/Navbar.tsx';

import { Footer } from '@/components/Footer.tsx';
import { Head } from '@/components/Head.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { asset } from '$fresh/runtime.ts';
import { readFile } from '@/utils/readFile.ts';

interface Data {
	privPolicy: string | null;
}

export const handler: Handlers<Data> = {
	async GET(_req, ctx) {
		// cache for 1 day
		asset('/privacy-policy.md');
		const privPolicy = await readFile('./static/privacy-policy.md');
		if (!privPolicy) {
			return ctx.renderNotFound();
		}
		return ctx.render({ ...ctx.state, privPolicy });
	},
};

function ResumePage(props: PageProps<Data>) {
	const privPolicy = props.data.privPolicy;
	return (
		<>
			<Head PageProps={props} />
			<Navbar active={Routes.privPolicy} />
			<NoScript />

			<main id='main-content' className='p-4 pt-20'>
				{privPolicy
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
									__html: gfm.render(privPolicy),
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
