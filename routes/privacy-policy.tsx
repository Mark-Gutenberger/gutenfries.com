import { Handlers, PageProps } from '$fresh/server.ts';
import { asset } from '$fresh/runtime.ts';

import * as gfm from 'gfm';
import { readFile } from '@/utils/readFile.ts';

import { Navbar } from '@/components/Navbar.tsx';
import { Footer } from '@/components/Footer.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { Head } from '@/components/Head.tsx';

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
			<Navbar active='privPolicy' />
			<NoScript />

			<main id='main-content' className='font-[fira]'>
				<section className='p-4 pt-20'>
					{privPolicy
						? (
							<>
								<style dangerouslySetInnerHTML={{ __html: gfm.CSS }} />
								<article
									data-color-mode='auto'
									data-light-theme='light'
									data-dark-theme='dark'
									className='rounded-lg p-10 mt-12 markdown-body'
									dangerouslySetInnerHTML={{
										__html: gfm.render(privPolicy),
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
			<Footer />
		</>
	);
}

export default ResumePage;
