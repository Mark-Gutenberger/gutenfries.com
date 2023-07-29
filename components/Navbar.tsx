import { classNames } from '@/utils/classNames.ts';

interface Route {
	displayName?: string;
	id: Routes;
	href: string;
}

export enum Routes {
	home,
	blog,
	resume,
	license,
	notFound,
	serverError,
	privPolicy,
}

const routes: Route[] = [
	{
		id: Routes.home,
		href: '/home',
		displayName: 'Home',
	},
	{
		id: Routes.blog,
		href: '/blog',
		displayName: 'Blog',
	},
	{
		id: Routes.resume,
		href: '/resume',
		displayName: 'Resume',
	},
	{
		id: Routes.license,
		href: '/license',
	},
	{
		id: Routes.privPolicy,
		href: '/privacy-policy',
	},
	{
		id: Routes.notFound,
		href: '/404',
	},
	{
		id: Routes.serverError,
		href: '/500',
	},
];

function Navbar(props: { active: Routes }) {
	return (
		<>
			<a
				href='#main-content'
				className='text-red-500 outline-none sr-only focus:not-sr-only focus:outline-none '
			>
				Skip to main content
			</a>
			<nav className='fixed z-50 flex flex-row justify-around w-full h-20 bg-gray-800 shadow-lg md:justify-start'>
				{/* <Theme /> */}
				<ul className='flex p-4 text-xl text-gray-200'>
					{routes.map((item: Route) => {
						// if the route has a displayName, render it
						if (item.displayName) {
							return (
								<li>
									<a
										key={item.id}
										href={item.href}
										className={classNames(
											props.active === item.id
												? 'bg-gray-400 dark:bg-gray-900 dark:text-gray-200 text-gray-900'
												: 'dark:text-gray-300 text-gray-800 dark:bg-gray-800 bg-gray-200 text-gray-900',
											'rounded-lg text-xl font-medium p-3 mx-3 block hover:bg-gray-700 active:bg-gray-900 hover:text-gray-200',
										)}
										aria-current={props.active === item.id ? 'page' : undefined}
									>
										{item.displayName}
									</a>
								</li>
							);
						}
					})}
				</ul>

				{/* <Theme /> */}
			</nav>
		</>
	);
}

export { Navbar };
