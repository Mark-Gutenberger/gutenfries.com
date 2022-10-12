/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';

import { ErrorPageProps, PageProps, UnknownPageProps } from '$fresh/server.ts';

import SearchBar from '@/islands/SearchBar.tsx';
import { useEffect } from 'https://esm.sh/v95/preact@10.11.0/hooks/src/index.d.ts';

interface NavbarProps {
	PageProps: PageProps | UnknownPageProps | ErrorPageProps;
	sticky?: boolean;
}

interface Routes {
	name: string;
	href: string | undefined;
	current: boolean;
	showInNav: boolean;
}

const routes: Routes[] = [
	{ name: 'Home', href: '/home', current: false, showInNav: true },
	{ name: 'About', href: '/about', current: false, showInNav: true },
	{ name: 'Contact', href: '/contact', current: false, showInNav: true },
	{ name: 'Resume', href: '/resume', current: false, showInNav: true },
	{ name: '404', href: '/404', current: false, showInNav: false },
	{ name: '500', href: '/500', current: false, showInNav: false },
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

function Navbar({ PageProps, sticky }: NavbarProps) {
	let route: string;

	if (routes.find((r) => r.href === PageProps.url.pathname)) {
		route = PageProps.url.pathname;
	} else {
		route = '/404';
	}

	routes.forEach(() => {
		// make all values false
		for (let i = 0; i < routes.length; i++) {
			routes[i].current = false;
		}
	});

	const routeIndex = routes.findIndex(({ href }) => href === route);
	routes[routeIndex].current = true;

	return (
		<>
			{
				/* <a href='' className='sr-only focus:not-sr-only'>
				Skip to content
			</a> */
			}
			<header
				className={`flex ${
					sticky ? 'sticky' : 'absolute'
				} w-screen shadow-lg bg-gray-800 z-50`}
			>
				<nav className='h-auto flex justify-start text-white text-xl  py-4 pl-4 pr-2'>
					{/* for each route in routes where showInNav is true */}
					{routes.map(({ name, href, current, showInNav }) => {
						if (showInNav) {
							return (
								<a
									key={name}
									href={href}
									className={classNames(
										current
											? 'bg-gray-900 text-white'
											: 'text-gray-300 hover:bg-gray-700 active:bg-gray-900 hover:text-white',
										'rounded-lg text-md font-medium p-3 mx-1 block',
									)}
									aria-current={current ? 'page' : undefined}
								>
									{name}
								</a>
							);
						}
					})}
				</nav>
				<SearchBar />
			</header>
		</>
	);
}

export { Navbar };
