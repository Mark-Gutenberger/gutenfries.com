export interface Route {
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
	mwotw,
}

export const routes: Route[] = [
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
		id: Routes.mwotw,
		href: '/mwotw',
		displayName: 'MWOTW',
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
