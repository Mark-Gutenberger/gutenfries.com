import { useEffect, useState } from 'preact/hooks';
import Icons from '@/components/Icons.tsx';

const SearchBar = () => {
	const [searchBarIsExpanded, setSearchBarIsExpanded] = useState<boolean>(false);
	const [query, setQuery] = useState<string>('');
	const [pressToggle, setPressToggle] = useState<boolean>(false);

	useEffect(() => {
		if (query.length > 0) {
			googleSearch(query);
		}
	}, [pressToggle]);

	// TODO(@gutenfries): Replace with fuzzy search implementated in rust
	function googleSearch(query_: string) {
		window.open(`https://google.com/search?q=${query_}`, '_blank');
	}

	const handleKeyPress = (e: KeyboardEvent) => {
		if (e.key === 'Enter' || 'Return' || ' ') {
			setPressToggle(!pressToggle);
		}
	};

	return (
		<>
			<div className='overflow-hidden hidden sm:visible sm:flex w-full justify-end items-center'>
				{searchBarIsExpanded
					? (
						<>
							<label for='search' className='sr-only'>
								Search
							</label>
							<form className='flex-grow h-10 flex' method='get'>
								<input
									type='text'
									onChange={(e) => {
										setQuery((e.target as HTMLInputElement).value);
									}}
									onKeyPress={(e) => {
										handleKeyPress(e);
									}}
									id='search'
									name='search'
									className='w-full bg-gray-100 text-gray-700 active:text-gray-800 hover:text-gray-800 placeholder-gray-700 active:placeholder-gray-800 hover:placeholder-gray-800 rounded-lg ml-2.5 block p-2.5'
									placeholder='Search for anything...'
									required
								/>
							</form>
						</>
					)
					: null}
				<button
					type='button'
					aria-label={searchBarIsExpanded ? 'Minimize search bar' : 'Expand search bar'}
					className='focus:ring-blue-500 focus:border-blue-500 rounded-lg p-2 m-6 hover:bg-gray-700 active:bg-gray-900'
					onClick={() => {
						setSearchBarIsExpanded(!searchBarIsExpanded);
					}}
				>
					{!searchBarIsExpanded
						? (
							<Icons.Search className='text-gray-300 hover:text-gray-50 cursor-pointer' />
						)
						: (
							<Icons.Close className='fill-current text-gray-300 hover:text-gray-50 cursor-pointer' />
						)}
				</button>
			</div>
		</>
	);
};

export default SearchBar;
