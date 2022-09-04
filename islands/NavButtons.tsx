/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import { PageProps } from '$fresh/server.ts';

interface Routes {
	name: string;
	href: string;
	current: boolean;
}

const routes: Routes[] = [
	{ name: 'Home', href: '/home', current: false },
	{ name: 'About', href: '/about', current: false },
	{ name: 'Projects', href: '#', current: false },
	{ name: 'Calendar', href: '#', current: false },
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

interface NavButtonProps {
	pageProps_: PageProps;
}

function NavButtons({ pageProps_ }: NavButtonProps) {
	const route = pageProps_.url.pathname;

	routes.forEach(() => {
		// make all values false
		for (let i = 0; i < routes.length; i++) {
			routes[i].current = false;
		}
	});

	// TODO(@gutenfries): type error... non breaking
	routes[routes.findIndex(({ href }) => href === route)].current = true;

	return (
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
	);
}

export default NavButtons;
