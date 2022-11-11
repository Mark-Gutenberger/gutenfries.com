import SearchBar from '@/islands/SearchBar.tsx';
import { classNames } from '@/utils/helpers.ts';

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

function Navbar(props: { active?: string }) {
	return (
		<>
			<a
				href='#main-content'
				className='text-red-500 outline-none sr-only focus:not-sr-only focus:outline-none '
			>
				Skip to main content
			</a>
			<nav className='fixed z-50 flex flex-row justify-around w-full h-20 bg-gray-800 shadow-lg md:justify-start'>
				<ul className='flex p-4 text-xl text-gray-200'>
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
												? 'bg-gray-400 dark:bg-gray-900 dark:text-gray-200 text-gray-900'
												: 'dark:text-gray-300 text-gray-800 dark:bg-gray-800 bg-gray-200 text-gray-900',
											'rounded-lg text-xl font-medium p-3 mx-3 block hover:bg-gray-700 active:bg-gray-900 hover:text-gray-200',
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
		</>
	);
}

export { Navbar };
