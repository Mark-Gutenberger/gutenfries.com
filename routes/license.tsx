import { Handlers, PageProps } from '$fresh/server.ts';
import { asset } from '$fresh/runtime.ts';
import { readFile } from '@/utils/readFile.ts';
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

function LicensePage(props: PageProps<Data>) {
	const license = props.data.license;
	return (
		<section>
			{license
				? (
					<>
						<link rel='stylesheet' href={asset('/styles/markdown.css')} />
						<article
							data-color-mode='auto'
							data-light-theme='light'
							data-dark-theme='dark'
							className='shadow-xl mt-8 p-10 rounded-lg markdown-body'
							dangerouslySetInnerHTML={{
								__html: renderGFM(license),
							}}
						/>
					</>
				)
				: (
					<h1 className='mt-28 rounded-lg font-bold text-5xl'>
						Loading...
					</h1>
				)}
		</section>
	);
}

export default LicensePage;
