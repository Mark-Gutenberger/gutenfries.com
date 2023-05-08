import { IconClose, IconSearch } from '@/components/Icons.tsx';

import { useState } from 'preact/hooks';

const SearchBar = () => {
	const [searchBarIsExpanded, setSearchBarIsExpanded] = useState(false);

	const handleSubmit = (e: Event) => {
		e.preventDefault();
		alert('The search feature is not implemented yet! :(\nTry using Google instead.');
		const formData = new FormData(e.target as HTMLFormElement);
		const query = formData.get('search') as string;
		if (query.length > 0) {
			window.open(`https://google.com/search?q=${query}`, '_blank');
		}
	};

	return (
		<div className='items-center justify-end hidden w-full overflow-hidden sm:visible sm:flex'>
			{searchBarIsExpanded && (
				<>
					<label htmlFor='search' className='sr-only'>
						Search
					</label>
					<form
						className='flex flex-grow h-10'
						method='get'
						onSubmit={handleSubmit}
					>
						<input
							type='text'
							id='search'
							name='search'
							className='w-full px-2.5 py-2.5 ml-2.5 bg-gray-100 text-gray-800 placeholder-gray-800 rounded-lg active:text-gray-900 active:placeholder-gray-900 hover:text-gray-900 hover:placeholder-gray-900'
							placeholder='Search for anything...'
							required
						/>
					</form>
				</>
			)}
			<button
				type='button'
				aria-label={searchBarIsExpanded ? 'Minimize search bar' : 'Expand search bar'}
				className='flex items-center justify-center w-10 h-10 px-2 m-6 rounded-lg focus:ring-purple-500 focus:border-purple-500 hover:bg-gray-700 active:bg-gray-900'
				onClick={() => setSearchBarIsExpanded(!searchBarIsExpanded)}
			>
				{!searchBarIsExpanded
					? <IconSearch className='text-gray-300 cursor-pointer hover:text-gray-200' />
					: (
						<IconClose className='text-gray-300 cursor-pointer fill-current hover:text-gray-200' />
					)}
			</button>
		</div>
	);
};

export default SearchBar;
