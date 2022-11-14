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
			<div className='z-30 fixed h-auto w-full bg-gray-300 bottom-0 border-t-2 border-blue-500'>
				{/* close button */}
				<div className='flex justify-end mt-4 mr-4'>
					<a
						href='/?content=undefined'
						className='text-black'
					>
						<Icons.Close />
						<span className='sr-only'>Close</span>
					</a>
				</div>
				<div className='flex flex-col flex justify-center items-center'>
					<h2 className='my-2 text-3xl'>
						What kind of content are you looking for?
					</h2>
					<div className='flex flex-row flex justify-center items-center'>
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
			</div>
		</>
	);
};

export { ContentPicker };
