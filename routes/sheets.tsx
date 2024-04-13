import { Handlers, PageProps } from '$fresh/server.ts';
import { Routes } from '@/routes.ts';
import { Navbar } from '@/components/Navbar.tsx';
import { Footer } from '@/components/Footer.tsx';
import { Head } from '@/components/Head.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { listSheets, Sheet } from '@/utils/sheets.ts';
import SheetsDisplay, { SortByOpt } from '@/islands/SheetsDisplay.tsx';

interface Data {
	sheets: Sheet[];
	tags: string[];
	sortBy: SortByOpt;
	filterBy: string[];
}

export const handler: Handlers<Data> = {
	async GET(_req, ctx) {
		const sheets = await listSheets();
		const tags: string[] = [];
		// create array of all UNIQUE tags
		sheets.forEach((sheet) => {
			sheet.tags?.forEach((tag) => {
				if (!tags.includes(tag)) {
					tags.push(tag);
				}
			});
		});

		// get the sort and filter information from the url
		const sortBy = (ctx.url.searchParams.get('sortBy') as SortByOpt) ?? SortByOpt.TitleAZ;
		const filterBy = ctx.url.searchParams.getAll('tags');

		return ctx.render({
			...ctx.state,
			sheets,
			tags,
			sortBy,
			filterBy,
		});
	},
};

export default function SheetsPage(props: PageProps<Data>) {
	return (
		<>
			<Head PageProps={props} />
			<Navbar
				active={Routes.sheets}
			/>
			<NoScript />
			<main
				id='main-content'
				className='bg-gray-100 dark:bg-gray-900 pt-20 text-gray-800 dark:text-gray-200 transition'
			>
				<section className='flex flex-wrap mx-auto py-40 container'>
					<h1 className='flex justify-center items-center mb-20 w-full font-semibold text-5xl text-center md:text-6xl lg:text-7xl'>
						Beats & Sheets
					</h1>

					<div className='flex md:flex-row flex-col md:justify-between place-content-center m-0 p-0'>
						<SheetsDisplay
							sheets={props.data.sheets}
							tags={props.data.tags}
							sortBy={props.data.sortBy}
							filterBy={props.data.filterBy}
						/>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
