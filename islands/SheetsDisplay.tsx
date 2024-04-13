import { Sheet } from '@/utils/sheets.ts';
import { useEffect } from 'preact/hooks';
import { Link } from '@/components/Link.tsx';
import { asset, IS_BROWSER } from '$fresh/runtime.ts';

// God dammit typescript is such a useless fucking joke of a language
enum SortByOpt {
	TitleAZ = 'Title A to Z',
	TitleZA = 'Title Z to A',
	DateNewOld = 'Date New to Old',
	DateOldNew = 'Date Old to New',
}

const sortByOpts = [
	SortByOpt.TitleAZ,
	SortByOpt.TitleZA,
	SortByOpt.DateNewOld,
	SortByOpt.DateOldNew,
];

/**
 * Sorts an array of sheets with a specified sort function
 */
function sortSheets(array: Sheet[], sortBy: SortByOpt): Sheet[] {
	function mmddyyyyStrToDate(str: string): Date {
		const [mm, dd, yyyy] = str.split('-').map(Number);
		return new Date(mm, dd - 1, yyyy);
	}
	switch (sortBy) {
		case SortByOpt.TitleAZ:
			return array.sort((a, b) => a.title.localeCompare(b.title));
		case SortByOpt.TitleZA:
			return array.sort((a, b) => a.title.localeCompare(b.title)).reverse();
		case SortByOpt.DateNewOld:
			return array.sort((a, b) =>
				mmddyyyyStrToDate(a.date).getDay() - mmddyyyyStrToDate(b.date).getDay()
			);
		case SortByOpt.DateOldNew:
			return array.sort((a, b) =>
				mmddyyyyStrToDate(a.date).getDay() - mmddyyyyStrToDate(b.date).getDay()
			).reverse();
	}

	return [];
}

interface SheetsDisplayProps {
	sheets: Sheet[];
	tags: string[];
	sortBy: SortByOpt;
	filterBy: string[];
}

function SheetsDisplay(props: SheetsDisplayProps) {
	let sheets: Sheet[] = [];

	const filteredSheets = props.sheets.filter((sheet) => {
		if (props.filterBy.length === 0) return true;
		return props.filterBy.some((tag) => sheet.tags?.includes(tag));
	});
	const sortedSheets = sortSheets(filteredSheets, props.sortBy);
	sheets = sortedSheets;

	function handleSortChange() {
		if (!document.getElementById('filterForm')) {
			console.error(
				`Error: Form did not render properly:\n    ${
					document.getElementById('filterForm')
				}`,
			);
			return;
		}

		// Automatically sumbit the form when the input changes
		(document.getElementById('filterForm') as HTMLFormElement).submit();
	}

	function handleFilterChange() {
		if (!document.getElementById('filterForm')) {
			console.error(
				`Error: Form did not render properly:\n    ${
					document.getElementById('filterForm')
				}`,
			);
			return;
		}

		// Automatically sumbit the form when the input changes
		(document.getElementById('filterForm') as HTMLFormElement).submit();
	}

	if (!IS_BROWSER) return <></>;

	return (
		<>
			<form
				id='filterForm'
				// onSubmit={handleSubmit}
				// method='post'
				className='flex flex-row md:flex-col gap-4 border-2 border-gray-700 dark:border-gray-300 m-4 p-4 rounded-lg w-auto md:w-1/4 lg:w-1/5 h-42 md:h-auto'
			>
				<div className='flex flex-col w-1/2 md:w-auto'>
					<h2 className='mb-4 font-bold text-2xl animation-gradient-text'>
						Sort
					</h2>
					<ul className='flex flex-col h-32 md:h-auto overflow-x-none overflow-y-auto'>
						{sortByOpts.map((sortBy) => (
							<li class='flex items-center hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded'>
								<label class='rounded w-full font-medium'>
									<input
										type='radio'
										checked={sortBy === props.sortBy}
										name='sortBy'
										onChange={handleSortChange}
										value={sortBy}
										class='rounded w-4 h-4 text-purple-600 accent-purple-600 me-2'
									/>
									{sortBy}
								</label>
							</li>
						))}
					</ul>
				</div>
				<div className='flex flex-col w-1/2 md:w-auto'>
					<h2 className='mb-4 font-bold text-2xl animation-gradient-text'>
						Filter
					</h2>
					<ul class='flex flex-col h-32 md:h-auto overflow-x-none overflow-y-auto'>
						{props.tags.map((tag) => (
							<li class='flex items-center hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded'>
								<label class='rounded w-full font-medium'>
									<input
										type='checkbox'
										name='tags'
										checked={props.filterBy.includes(tag)}
										value={tag}
										onChange={handleFilterChange}
										class='rounded w-4 h-4 text-purple-600 accent-purple-600 me-2'
									/>
									{tag}
								</label>
							</li>
						))}
					</ul>
				</div>
			</form>
			<section className='flex flex-wrap mt-8 md:mt-0 w-auto md:w-3/4 lg:w-4/5'>
				{/* <- calculated m-4 */}
				{sheets.map((sheet) => (
					<span className='p-4 md:w-1/2 xl:w-1/3'>
						<div className='group'>
							<div className='border-2 border-gray-800 group-hover:border-purple-500 dark:border-gray-300 p-4 rounded-lg text-gray-800 dark:text-gray-200 transition'>
								<h3 className='font-bold text-4xl text-center md:text-3xl'>
									{sheet.title}
								</h3>
								<Link internal href={`/sheets/${sheet.id}`}>
									<img
										alt={sheet.title}
										className='group-hover:scale-[1.025] border-2 border-gray-700 dark:border-gray-800 my-4 rounded-md transition ease'
										src={asset(
											`images/sheet_images/${sheet.id}.png`,
										)}
									/>
								</Link>
								<p className='text-xl'>
									{sheet.description}
								</p>
							</div>
						</div>
					</span>
				))}
			</section>
		</>
	);
}

export default SheetsDisplay;
export { SortByOpt, sortByOpts };
