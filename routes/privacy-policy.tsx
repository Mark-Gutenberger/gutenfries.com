import { Handlers, PageProps } from '$fresh/server.ts';
import { Routes } from '@/routes.ts';
import { Navbar } from '@/components/Navbar.tsx';
import { Footer } from '@/components/Footer.tsx';
import { Head } from '@/components/Head.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { asset } from '$fresh/runtime.ts';
import { readFile } from '@/utils/readFile.ts';
import { render as renderGFM } from 'gfm';

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
			<Navbar
				active={Routes.privPolicy}
			/>
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
								className='shadow-xl mt-12 p-10 rounded-lg'
								dangerouslySetInnerHTML={{
									__html: renderGFM(privPolicy),
								}}
							/>
						</>
					)
					: (
						<>
							<h1 className='pt-20 rounded-lg font-bold text-5xl'>
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