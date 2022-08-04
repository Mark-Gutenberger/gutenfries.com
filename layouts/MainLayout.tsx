/** @jsx h */
import { Component, h } from 'preact';
import Navbar from '../islands/Navbar.tsx';
import { PageProps } from '$fresh/server.ts';

type MainLayoutProps = {
	route: string | URL | URLPattern;
	theme: Record<string, string>;
	children?:
		| preact.AnyComponent[]
		| preact.AnyComponent
		| preact.VNode[]
		| preact.VNode
		| Element[]
		| Element;
};

// const currentPage = window.location;
// const currentPageURL = new URLPattern(currentPage);

import { UnknownPageProps } from '$fresh/server.ts';

const currentPage = ({ url }: UnknownPageProps): string => {
	return url.pathname;
};

/**
 * Main layout wrapper
 */
function MainLayout({ route, theme, children }: MainLayoutProps) {
	return (
		<div>
			<link rel='preconnect' href='https://fonts.googleapis.com'></link>
			<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true'></link>
			<link
				href='https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
				rel='stylesheet'
			>
			</link>
			<Navbar theme={theme} route={route} />
			{children}
		</div>
	);
}

export { MainLayout };
