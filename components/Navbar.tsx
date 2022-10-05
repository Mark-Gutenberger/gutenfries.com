/** @jsx h */
import { h } from 'preact';
import { PageProps } from '$fresh/server.ts';
import SearchBar from '@/islands/SearchBar.tsx';

interface NavbarProps {
	pageProps_: PageProps;
}
interface Routes {
	name: string;
	href: string;
	current: boolean;
}

const routes: Routes[] = [
	{ name: 'Home', href: '/home', current: false },
	{ name: 'About', href: '/about', current: false },
	{ name: 'Contact', href: '/contact', current: false },
	{ name: 'Resume', href: '/resume', current: false },
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

function Navbar({ pageProps_ }: NavbarProps) {
	const route = pageProps_.url.pathname;

	routes.forEach(() => {
		// make all values false
		for (let i = 0; i < routes.length; i++) {
			routes[i].current = false;
		}
	});

	const routeIndex = routes.findIndex(({ href }) => href === route);
	routes[routeIndex].current = true;
	// }

	return (
		<header className='flex absolute w-full shadow-lg bg-gray-800 z-50'>
			<nav className='h-auto flex justify-start text-gray-300 text-xl border-none py-4 pl-4 pr-2'>
				{routes.map((item) => (
					<a
						key={item.name}
						href={item.href}
						className={classNames(
							item.current
								? 'bg-gray-900 text-white'
								: 'text-gray-300 hover:bg-gray-700 active:bg-gray-900 hover:text-white',
							'rounded-lg text-md font-medium p-3 mx-1 block',
						)}
						aria-current={item.current ? 'page' : undefined}
					>
						{item.name}
					</a>
				))}
			</nav>
			<SearchBar />
		</header>
	);
}

export { Navbar };
