import { Link } from '@/components/JSX/Link.tsx';
import Icons from '@/utils/Icons.tsx';

const ContentPicker = (
	{
		hide,
	}: {
		hide: boolean;
	},
) => {
	if (hide) {
		return (
			<div className='fixed bottom-0 right-[5%] z-50'>
				<div className='text-lg w-24 h-6 hover:w-auto hover:h-auto border-1 bg-gray-100 dark:bg-gray-900 border-blue-500 rounded-t-lg'>
					<Icons.ChevronUp className='w-6 h-6 text-gray-900 dark:text-gray-200' />
					<h3 className='my-2 text-xl mx-4 dark:text-gray-200 text-gray-900 text-center'>
						Display different content
					</h3>
					<div className='pb-2 flex justify-center'>
						<a
							className='text-gray-900 hover:text-gray-800 active:text-gray-700 dark:text-gray-200 dark:hover:text-gray-400 dark:active:text-gray-500 underline px-4'
							href='/?content=tech'
						>
							Tech
						</a>
						<a
							className='text-gray-900 hover:text-gray-800 active:text-gray-700 dark:text-gray-200 dark:hover:text-gray-400 dark:active:text-gray-500 underline px-4'
							href='/?content=music'
						>
							Music
						</a>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div className='z-30 fixed h-auto w-full bg-gray-100 dark:bg-gray-900 bottom-0 border-t-2 border-blue-500'>
			{/* close button */}
			<div className='flex justify-end mt-4 mr-4 flex-grow'>
				<div className='flex flex-row w-full -mr-12 flex justify-center items-center'>
					<h2 className='my-2 text-3xl text-gray-900 dark:text-gray-200'>
						What kind of content are you looking for?
					</h2>
				</div>
				<a
					href='/?content=undefined'
					className='text-gray-900 dark:text-gray-200'
				>
					<Icons.Close />
					<span className='sr-only'>Close</span>
				</a>
			</div>
			<div className='flex flex-col flex justify-center items-center'>
				<div className='flex flex-col flex justify-center items-center'>
					<Link
						className='text-lg mb-2'
						href='/?content=tech'
						u
					>
						Tech & Software Development
					</Link>

					<Link
						className='text-lg mb-2'
						href='/?content=music'
						u
					>
						Music & Marching Arts
					</Link>
				</div>
			</div>
		</div>
	);
};

export { ContentPicker };
