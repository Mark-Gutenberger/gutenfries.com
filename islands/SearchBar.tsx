/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import Icons from '@/components/Icons.tsx';

// interface SearchResult {
// 	title: string;
// 	url: string;
// }

const SearchBar = () => {
	const [searchBarIsExpanded, setSearchBarIsExpanded] = useState<boolean>(false);
	// const [resultIsActive, setResultIsActive] = useState<boolean>(false);
	const [query, setQuery] = useState<string>('');
	const [pressToggle, setPressToggle] = useState<boolean>(false);
	// const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
	// const [result, setResult] = useState<SearchResult[]>([{
	// title: 'No results found',
	// url: 'https://example.com',
	// }] as SearchResult[]);

	/* useEffect(() => {
		(async () => {
			const searchResultsRaw = await fetch('/data/search.json');
			const searchResults = await searchResultsRaw.json();
			setSearchResults(searchResults.body);
		})();
	}, []); */

	useEffect(() => {
		if (query.length > 0) {
			googleSearch(query);
		}
	}, [pressToggle]);

	// useEffect(() => {
	// console.log(result);
	// }, [result]);

	// TODO(@gutenfries): Replace with fuzzy search implementated in rust
	function googleSearch(query_: string) {
		window.open(`https://google.com/search?q=${query_}`, '_blank');
	}

	const handleKeyPress = (e: KeyboardEvent) => {
		if (e.key === 'Enter' || 'Return') {
			setPressToggle(!pressToggle);
		}
	};

	return (
		<>
			<div className='overflow-hidden sm:flex hidden w-full min-w-64 max-w-full justify-end items-center'>
				{!searchBarIsExpanded
					? (
						<button
							type='button'
							aria-label='Expand Search Bar'
							className='focus:ring-blue-500 focus:border-blue-500 rounded-lg p-2 mr-6 hover:bg-gray-700 active:bg-gray-900'
							onClick={() => {
								setSearchBarIsExpanded(true);
							}}
						>
							<Icons.Search className='text-gray-300 hover:text-gray-50 cursor-pointer' />
						</button>
					)
					: (
						<>
							<label for='search' className='hidden sr-only'>
								Search
							</label>
							<div className='flex-grow h-10 flex relative'>
								<input
									type='text'
									value={query}
									onChange={(e) => {
										setQuery((e.target as HTMLInputElement).value);
									}}
									onKeyPress={(e) => {
										handleKeyPress(e);
									}}
									id='search'
									name='search'
									className='min-w-full bg-white text-gray-700 active:text-gray-800 hover:text-gray-800 placeholder-gray-700 active:placeholder-gray-800 hover:placeholder-gray-800 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'
									placeholder='Search for anything...'
									required
								/>
								{
									/* {resultIsActive
									? (
										<ul className='p-1 rounded-lg fixed mt-10 z-20 w-5/12 bg-gray-800'>
											{result.map((result) => (
												<li>
													<a
														href={result.url}
														className='w-auto m-1 block h-auto bg-gray-50 relative shadow-2xl text-gray-900 text-sm rounded-lg pl-10 p-2.5'
													>
														{result.title}
													</a>
												</li>
											))}
										</ul>
									)
									: null} */
								}
							</div>
							<button
								type='button'
								aria-label='Minimize Search Bar'
								className='focus:ring-blue-500 focus:border-blue-500 rounded-lg p-2 mr-6 ml-2 hover:bg-gray-700 active:bg-gray-900 relative'
								onClick={() => {
									// setResultIsActive(false);
									setSearchBarIsExpanded(false);
								}}
							>
								<Icons.Close className='fill-current text-gray-300 hover:text-gray-50 cursor-pointer' />
							</button>
						</>
					)}
			</div>
		</>
	);
};

export default SearchBar;
