import { Handlers, PageProps } from '$fresh/server.ts';
import { Routes } from '@/routes.ts';
import { Navbar } from '@/components/Navbar.tsx';
import { Footer } from '@/components/Footer.tsx';
import { Head } from '@/components/Head.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { listSheets, Sheet } from '@/utils/sheets.ts';
import { asset } from '$fresh/runtime.ts';
import { Link } from '@/components/Link.tsx';

interface Data {
	sheets: Sheet[];
}

export const handler: Handlers<Data> = {
	async GET(_req, ctx) {
		const sheets = await listSheets();
		return ctx.render({ ...ctx.state, sheets });
	},
};

export default function SheetsPage(props: PageProps<Data>) {
	const { sheets } = props.data;

	return (
		<>
			<Head PageProps={props} />
			<Navbar
				active={Routes.sheets}
			/>
			<NoScript />
			<main
				id='main-content'
				className='bg-gray-100 dark:bg-gray-900 p-6 pt-20 text-gray-800 dark:text-gray-200 transition'
			>
				<section className='flex flex-wrap mx-auto md:px-10 py-40 container'>
					<h2 className='flex justify-center items-center mb-20 w-full font-semibold text-5xl text-center md:text-6xl lg:text-7xl'>
						Beats & Sheets
					</h2>

					<div className='flex flex-wrap -m-4'>
						{sheets.map((sheet) => (
							<span className='p-4 md:w-1/2 xl:w-1/3'>
								<div className='group'>
									<div className='border-2 border-gray-700 group-hover:border-purple-500 dark:border-gray-300 p-4 rounded-lg transition'>
										<h3 className='font-bold text-4xl text-center md:text-3xl'>
											{sheet.title}
										</h3>
										<Link internal href={`/sheets/${sheet.id}`}>
											<img
												alt={sheet.title}
												className='group-hover:scale-[1.025] my-4 rounded-md transition ease'
												src={asset(`images/sheet_images/${sheet.id}.png`)}
											/>
										</Link>
										<p className='text-xl'>
											{sheet.description}
										</p>
									</div>
								</div>
							</span>
						))}
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
