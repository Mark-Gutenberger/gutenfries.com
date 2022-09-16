/** @jsx h */
import { h } from 'preact';
import { PageProps } from '$fresh/server.ts';

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
	{ name: 'Projects', href: '#', current: false },
	{ name: 'Calendar', href: '#', current: false },
	{ name: 'Calendar', href: '#', current: false },
	{ name: 'Calendar', href: '#', current: false },
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

	// TODO(@gutenfries): type error... non breaking
	/* if (route === '/') {
		routes[0].current = true;
	} else { */
	const routeIndex = routes.findIndex(({ href }) => href === route);
	routes[routeIndex].current = true;
	// }

	return (
		<header className='absolute w-full p-4 shadow-lg bg-gray-800'>
			<nav className='container mx-auto min-h-[12] h-auto sm:flex justify-start text-gray-400 sm:self-center text-xl border-t sm:border-none'>
				{routes.map((item) => (
					<a
						key={item.name}
						href={item.href}
						className={classNames(
							item.current
								? 'bg-gray-900 text-white'
								: 'text-gray-300 hover:bg-gray-700 hover:text-white',
							'rounded-md text-md font-medium p-3 mx-3 sm:inline-block',
						)}
						aria-current={item.current ? 'page' : undefined}
					>
						{item.name}
					</a>
				))}
				<form className='flex flex-1 items-center'>
					<label for='voice-search' className='sr-only'>Search</label>
					<div className='relative w-full'>
						<div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
							<i
								data-feather='search'
								className='w-5 h-5 text-gray-500 dark:text-gray-400'
							>
							</i>
						</div>
						<input
							type='text'
							id='voice-search'
							className='min-w-[20] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Search for anything...'
							required
						/>
						<button
							type='button'
							className='flex absolute inset-y-0 right-0 items-center pr-3'
						>
							<i
								data-feather='mic'
								className='w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
							>
							</i>
						</button>
					</div>
					<button
						type='submit'
						className='inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
					>
						<i
							data-feather='search'
							className='mr-2 -ml-1 w-5 h-5'
						>
						</i>
						Search
					</button>
				</form>
			</nav>
		</header>
	);
}

export { Navbar };
