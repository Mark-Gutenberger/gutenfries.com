/** @jsx h */
import { h } from 'preact';

import SearchBar from '@/islands/SearchBar.tsx';

interface Route {
	name: string;
	href: string | undefined;
	showInNav: boolean;
}

const routes: Route[] = [
	{
		name: 'Home',
		href: '/home',
		showInNav: true,
	},
	{
		name: 'Blog',
		href: '/blog',
		showInNav: true,
	},
	{
		name: 'Resume',
		href: '/resume',
		showInNav: true,
	},
	{
		name: '404',
		href: '/404',
		showInNav: false,
	},
	{
		name: '500',
		href: '/500',
		showInNav: false,
	},
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

function Navbar(props: { active?: string }) {
	return (
		<nav className='fixed z-50 w-full shadow-lg bg-gray-800 flex flex-row h-20'>
			<ul className='flex justify-start text-gray-50 text-xl py-4 pl-4 pr-2'>
				{routes.map((item: Route) => {
					if (item.showInNav) {
						return (
							<li>
								<a
									key={item.name}
									href={item.href}
									className={classNames(
										props.active?.toLowerCase() ===
												item.name.toLowerCase()
											? 'bg-gray-900 text-gray-50'
											: 'text-gray-300 hover:bg-gray-700 active:bg-gray-900 hover:text-gray-50',
										'rounded-lg text-md font-medium p-3 mx-1 block',
									)}
									aria-current={props.active?.toLowerCase() ===
										item.name.toLowerCase()}
								>
									{item.name}
								</a>
							</li>
						);
					}
				})}
			</ul>
			<SearchBar />
		</nav>
	);
}

export { Navbar };
