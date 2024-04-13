import { func } from '$std/encoding/_yaml/type/function.ts';

interface Route {
	displayName: string;
	id: RoutesEnum;
	showInNav: boolean;
	pathName: string;
}

enum RoutesEnum {
	home = 'home',
	blog = 'blog',
	resume = 'resume',
	license = 'license',
	notFound = 'notFound',
	serverError = 'serverError',
	privPolicy = 'privPolicy',
	mwotw = 'mwotw',
	sheets = 'sheets',
}

const routes: Route[] = [
	{
		id: RoutesEnum.home,
		pathName: '/home',
		displayName: 'Home',
		showInNav: true,
	},
	{
		id: RoutesEnum.blog,
		pathName: '/blog',
		displayName: 'Blog',
		showInNav: true,
	},
	{
		id: RoutesEnum.mwotw,
		pathName: '/mwotw',
		displayName: 'MWOTW',
		showInNav: true,
	},
	{
		id: RoutesEnum.sheets,
		pathName: '/sheets',
		displayName: 'Sheets',
		showInNav: true,
	},
	{
		id: RoutesEnum.resume,
		pathName: '/resume',
		displayName: 'Resume',
		showInNav: true,
	},
	{
		id: RoutesEnum.license,
		pathName: '/license',
		displayName: 'License',
		showInNav: false,
	},
	{
		id: RoutesEnum.privPolicy,
		pathName: '/privacy-policy',
		displayName: 'Privacy Policy',
		showInNav: false,
	},
	{
		id: RoutesEnum.notFound,
		pathName: '/404',
		displayName: 'Not Found',
		showInNav: false,
	},
	{
		id: RoutesEnum.serverError,
		pathName: '/500',
		displayName: 'Server Error',
		showInNav: false,
	},
];

function getRouteByPathName(pathname: string): Route {
	if (pathname === '/') {
		pathname = '/home';
	}

	// if pathname is /route/[id], remove the id
	const pathParts = pathname.split('/');
	if (pathParts.length > 2) {
		pathname = pathParts.slice(0, 2).join('/');
	}

	const route = routes.find((route) => route.pathName === pathname);
	if (!route) {
		return routes.find((route) => route.id === RoutesEnum.notFound)!;
	}
	return route;
}

function getRouteEnumByPathName(pathname: string): RoutesEnum {
	return getRouteByPathName(pathname).id;
}

function getRouteDisplayByPathName(pathname: string): string {
	if (getRouteByPathName(pathname).displayName === 'Home') {
		return '';
	}
	return getRouteByPathName(pathname).displayName;
}

export {
	getRouteByPathName,
	getRouteDisplayByPathName,
	getRouteEnumByPathName,
	type Route,
	routes,
	RoutesEnum,
};
