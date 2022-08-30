/** @jsx h */
/** @jsxFrag Fragment */
import { h } from 'preact';
import { tw } from '@twind';
import { PageProps } from '$fresh/server.ts';

const routes = [
	{ name: 'Home', href: '/home', current: false },
	{ name: 'About', href: '/about', current: false },
	/* { name: 'Projects', href: '#', current: false },
	{ name: 'Calendar', href: '#', current: false }, */
];

interface NavbarProps {
	pageProps_: PageProps;
}

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

function Navbar({ pageProps_ }: NavbarProps) {
	// try to set the current route to true
	const route = pageProps_.url.pathname;
	// TODO(@gutenfries): fix bug where state is kept during navigation, causing multiple active navbar links
	routes.forEach(({ href }) => {
		if (route !== href) {
			routes[routes.findIndex(({ href }) => href === route)].current = false;
		}
	});

	routes.forEach(({ href }) => {
		if (route === href) {
			routes[routes.findIndex(({ href }) => href === route)].current = true;
			// make everything else false
		}
	});

	return (
		<header className={tw`bg-gray-800`}>
			<div className={tw`max-w-7xl px-6`}>
				<div
					className={tw`relative flex h-16 place-items-around items-center justify-start`}
				>
					<div
						className={tw`flex flex-1 items-center justify-start sm:items-stretch`}
					>
						<div className={tw`flex flex-shrink-0 items-center`}>
							<img
								width='100%'
								height='100%'
								src='/logo.svg'
								alt='the fresh logo: a sliced lemon dripping with juice'
							/>
						</div>
						<div className={tw`sm:ml-6 sm:block`}>
							<nav className={tw`flex space-x-4`}>
								{routes.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className={classNames(
											item.current
												? tw`bg-gray-900 text-white`
												: tw`text-gray-300 hover:bg-gray-700 hover:text-white`,
											tw`px-3 py-2 rounded-md text-md font-medium`,
										)}
										aria-current={item.current ? 'page' : undefined}
									>
										{item.name}
									</a>
								))}
							</nav>
						</div>
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
