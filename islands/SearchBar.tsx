/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { asset } from '$fresh/runtime.ts';

interface SearchResult {
	title: string;
	url: string;
}

const SearchBar = () => {
	const [searchBarIsExpanded, setSearchBarIsExpanded] = useState<boolean>(false);
	const [resultIsActive, setResultIsActive] = useState<boolean>(false);
	const [query, setQuery] = useState<string>('');
	const [pressToggle, setPressToggle] = useState<boolean>(false);
	const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
	const [result, setResult] = useState<SearchResult[]>([{
		title: 'No results found',
		url: 'https://example.com',
	}] as SearchResult[]);

	useEffect(() => {
		(async () => {
			const searchResultsRaw = await fetch('/data/search.json');
			const searchResults = await searchResultsRaw.json();
			setSearchResults(searchResults.body);
		})();
	}, []);

	useEffect(() => {
		search(query);
	}, [pressToggle]);

	useEffect(() => {
		console.log(result);
	}, [result]);

	// TODO(@gutenfries): Replace with actual search
	// this is just a POC algorithm
	const search = (query_: string): void => {
		if (query_.length > 0) {
			setResultIsActive(true);
			setResult(
				searchResults.filter((result) =>
					result.title.toLowerCase().includes(query_.toLowerCase())
				),
			);
		} else {
			setResultIsActive(false);
		}
	};

	const handleKeyPress = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			setPressToggle(!pressToggle);
		}
	};

	return (
		<>
			<div className='overflow-hidden flex w-full justify-end items-center'>
				{searchBarIsExpanded
					? (
						<>
							<label for='search' className='hidden sr-only'>
								Search
							</label>
							<div className='flex-grow h-10 flex relative'>
								<div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
									<svg
										name='Search SVG'
										strokeWidth='2'
										className='fill-current text-gray-500 cursor-pointer dark:text-gray-300'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										width='24'
										height='24'
									>
										<path
											fill-rule='evenodd'
											d='M10.25 2a8.25 8.25 0 105.28 14.59l5.69 5.69a.75.75 0 101.06-1.06l-5.69-5.69A8.25 8.25 0 0010.25 2zM3.5 10.25a6.75 6.75 0 1113.5 0 6.75 6.75 0 01-13.5 0z'
										>
										</path>
									</svg>
								</div>
								<input
									type='text'
									value={query ? query : ''}
									onChange={(e) => {
										setQuery((e.target as HTMLInputElement).value);
									}}
									onKeyPress={(e) => {
										handleKeyPress(e);
									}}
									id='search'
									name='search'
									className='min-w-full bg-gray-50 border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='Search for anything...'
									required
								/>
								{resultIsActive
									? (
										<ul className='p-1 rounded-md fixed mt-10 z-10 w-5/12 bg-gray-700 dark:bg-gray-50'>
											{result.map((result) => (
												<li>
													<a
														href={result.url}
														className='w-auto m-1 block h-auto bg-gray-50 relative dark:bg-gray-700 dark:text-white shadow-2xl text-gray-900 text-sm rounded-lg pl-10 p-2.5'
													>
														{result.title}
													</a>
												</li>
											))}
										</ul>
									)
									: null}
							</div>
							<button
								aria-label='Minimize Search Bar'
								className='rounded p-2 mx-3 hover:bg-gray-700 relative'
								onClick={() => {
									setResultIsActive(false);
									setSearchBarIsExpanded(false);
								}}
							>
								<svg
									name='X'
									strokeWidth='2'
									className='fill-current text-gray-300 hover:text-white cursor-pointer'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									width='24'
									height='24'
								>
									<path
										fill-rule='evenodd'
										d='M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z'
									>
									</path>
								</svg>
							</button>
						</>
					)
					: (
						<button
							aria-label='Expand Search Bar'
							className='rounded p-2 mx-3 hover:bg-gray-700'
							onClick={() => {
								setSearchBarIsExpanded(true);
							}}
						>
							<svg
								name='Search SVG'
								strokeWidth='2'
								className='fill-current text-gray-300 hover:text-white cursor-pointer'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								width='24'
								height='24'
							>
								<path
									fill-rule='evenodd'
									d='M10.25 2a8.25 8.25 0 105.28 14.59l5.69 5.69a.75.75 0 101.06-1.06l-5.69-5.69A8.25 8.25 0 0010.25 2zM3.5 10.25a6.75 6.75 0 1113.5 0 6.75 6.75 0 01-13.5 0z'
								>
								</path>
							</svg>
						</button>
					)}
			</div>
		</>
	);
};

export default SearchBar;
