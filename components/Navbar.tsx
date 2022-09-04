/** @jsx h */
/** @jsxFrag Fragment */
import { h } from 'preact';
import { tw } from '@twind';
import { PageProps } from '$fresh/server.ts';
import NavButtons from '@/islands/NavButtons.tsx';

interface NavbarProps {
	pageProps_: PageProps;
}

function Navbar({ pageProps_ }: NavbarProps) {
	// try to set the current route to true

	return (
		<header className={tw`absolute w-full bg-gray-800`}>
			<div className={tw`max-w-7xl px-6`}>
				<div
					className={tw`relative flex h-16 place-items-around items-center justify-start`}
				>
					<div
						className={tw`flex flex-1 items-center justify-start sm:items-stretch`}
					>
						<div className={tw`flex flex-shrink-0 items-center`}>
							<img
								className={tw`h-100 w-100 select-none`}
								draggable={false}
								src='/logo.svg'
								alt='the fresh logo: a sliced lemon dripping with juice'
							/>
						</div>
						<NavButtons pageProps_={pageProps_} />
					</div>

					{/* button for if you want it later */}
					{
						/* <div
						className={tw`absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0`}
					>
						<button
							className={tw`inline-flex items-center bg-green border-3 border-green py-1 px-3 focus:outline-none hover:bg-pink rounded text-base mt-4 md:mt-0 font-rounded`}
						>
							<span>Button</span>
						</button>
					</div> */
					}
				</div>
			</div>
		</header>
	);
}

export { Navbar };
