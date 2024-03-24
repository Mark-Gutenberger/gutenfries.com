interface Route {
	displayName: string;
	id: Routes;
	showInNav: boolean;
	pathName: string;
}

enum Routes {
	home,
	blog,
	resume,
	license,
	notFound,
	serverError,
	privPolicy,
	mwotw,
}

const routes: Route[] = [
	{
		id: Routes.home,
		pathName: '/home',
		displayName: 'Home',
		showInNav: true,
	},
	{
		id: Routes.blog,
		pathName: '/blog',
		displayName: 'Blog',
		showInNav: true,
	},
	{
		id: Routes.mwotw,
		pathName: '/mwotw',
		displayName: 'MWOTW',
		showInNav: true,
	},
	{
		id: Routes.resume,
		pathName: '/resume',
		displayName: 'Resume',
		showInNav: true,
	},
	{
		id: Routes.license,
		pathName: '/license',
		displayName: 'License',
		showInNav: false,
	},
	{
		id: Routes.privPolicy,
		pathName: '/privacy-policy',
		displayName: 'Privacy Policy',
		showInNav: false,
	},
	{
		id: Routes.notFound,
		pathName: '/404',
		displayName: 'Not Found',
		showInNav: false,
	},
	{
		id: Routes.serverError,
		pathName: '/500',
		displayName: 'Server Error',
		showInNav: false,
	},
];

function getRouteByPathName(pathname: string): Route {
	if (pathname === '/') {
		pathname = '/home';
	}
	const route = routes.find((route) => route.pathName === pathname);
	if (!route) {
		return routes.find((route) => route.id === Routes.notFound)!;
	}
	return route;
}

export { getRouteByPathName, type Route, Routes, routes };
