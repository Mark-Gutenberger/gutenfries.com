import { classNames } from '../utils/classNames.ts';
import ThemeMode from '../islands/ThemeMode.tsx';

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
			<nav className='fixed flex flex-row justify-between w-full h-20 bg-gray-800 shadow-lg'>
				<ul className='flex p-4 text-xl text-gray-200'>
					{routes.map((item: Route) => {
						// if the route has a displayName, render it
						if (item.displayName) {
							return (
								<li className='flex items-center justify-center'>
									<a
										key={item.id}
										href={item.href}
										className={classNames(
											props.active === item.id
												? 'animation-gradient'
												: 'dark:text-gray-300 text-gray-800 dark:bg-gray-800 bg-gray-200 text-gray-900',
											'transition rounded-md font-sedwick text-2xl font-bold p-3 mx-3 block overflow-hidden relative group cursor-pointer',
										)}
										aria-current={props.active === item.id ? 'page' : undefined}
									>
										<span
											className={classNames(
												props.active === item.id
													? 'bg-gray-800'
													: 'animation-gradient',
												'absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease',
											)}
										/>
										<span
											className={classNames(
												props.active === item.id
													? 'text-white'
													: 'animation-gradient-text group-hover:text-white',
												'relative transition duration-300 ease',
											)}
										>
											{item.displayName}
										</span>
									</a>
								</li>
							);
						}
					})}
				</ul>

				<div className='pr-2 items-center justify-center hidden md:flex'>
					<ThemeMode />
				</div>
			</nav>
		</>
	);
}

export { Navbar };
