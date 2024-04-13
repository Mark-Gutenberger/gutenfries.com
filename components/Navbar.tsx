import { DesktopNav } from '@/components/DesktopNav.tsx';
import ThemeMode from '@/islands/ThemeMode.tsx';
import MobileNav from '@/islands/MobileNav.tsx';
import { getRouteEnumByPathName, routes } from '@/routes.ts';
import { PageProps } from '$fresh/server.ts';
import { RoutesEnum } from '@/routes.ts';

interface NavBarProps {
	PageProps: PageProps;
	active?: RoutesEnum;
}

function Navbar({ PageProps }: NavBarProps) {
	const active = getRouteEnumByPathName(PageProps.url.pathname);

	return (
		<header>
			<a
				href='#main-content'
				className='text-red-500 outline-none sr-only focus:not-sr-only focus:outline-none'
			>
				Skip to main content
			</a>
			<nav className='z-50 fixed flex flex-row justify-between bg-gray-800 shadow-lg w-full h-20'>
				{/* DESKTOP */}
				<div className={'hidden sm:flex pl-1'}>
					<DesktopNav
						routes={routes}
						active={active}
					/>
				</div>

				{/* MOBILE */}
				<div className='flex justify-center items-center sm:hidden pl-1'>
					<MobileNav
						routes={routes}
						active={active}
					/>
				</div>

				<div className='flex justify-center items-center pr-1'>
					<ThemeMode />
				</div>
			</nav>
		</header>
	);
}

export { Navbar };
