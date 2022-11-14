import { Link } from '@/components/JSX/Link.tsx';
import Icons from '@/utils/Icons.tsx';

const ContentPicker = ({ hide }: { hide: boolean }) => {
	if (hide) {
		return (
			<>
				{/* TODO add pop up to the lower RHS */}
			</>
		);
	}
	return (
		<>
			<div className='z-30 fixed h-auto w-full bg-gray-100 dark:bg-gray-900 bottom-0 border-t-2 border-blue-500'>
				{/* close button */}
				<div className='flex justify-end mt-4 mr-4 flex-grow'>
					<div className='flex flex-row w-full -mr-12 flex justify-center items-center'>
						<h2 className='my-2 text-3xl text-gray-900 dark:text-gray-100'>
							What kind of content are you looking for?
						</h2>
					</div>
					<a
						href='/?content=undefined'
						className='text-gray-900 dark:text-gray-100'
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
		</>
	);
};

export { ContentPicker };
