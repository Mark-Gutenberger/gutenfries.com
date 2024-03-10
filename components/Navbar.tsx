import { DesktopNav } from '@/components/DesktopNav.tsx';
import ThemeMode from '@/islands/ThemeMode.tsx';
import HamburgerNav from '@/islands/HamburgerNav.tsx';
import { Route, Routes, routes } from '@/routes.ts';
import { FreshContext } from '$fresh/server.ts';

interface NavbarProps {
	active: Routes;
}

function Navbar(props: NavbarProps) {
	return (
		<>
			<a
				href='#main-content'
				className='text-red-500 outline-none sr-only focus:not-sr-only focus:outline-none'
			>
				Skip to main content
			</a>
			<nav className='fixed flex flex-row justify-between bg-gray-800 shadow-lg w-full h-20'>
				{/* DESKTOP */}
				<div className={'hidden sm:flex pl-1'}>
					<DesktopNav
						routes={routes}
						active={props.active}
					/>
				</div>

				{/* MOBILE */}
				<div className='flex justify-center items-center sm:hidden pl-1'>
					<HamburgerNav
						routes={routes}
						active={props.active}
					/>
				</div>

				<div className='flex justify-center items-center pr-1'>
					<ThemeMode />
				</div>
			</nav>
		</>
	);
}

export { Navbar };
