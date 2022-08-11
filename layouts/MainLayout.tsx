/** @jsx h */
/** @jsxFrag Fragment */
import { Attributes, Component, ComponentChildren, Fragment, h, Ref } from 'preact';
import Navbar from '../islands/Navbar.tsx';
import { PageProps } from '$fresh/server.ts';
import { Head } from '../components/Head.tsx';
import { tw } from '@twind';
import Icon from '../utils/fa.tsx';

type MainLayoutProps = {
	route: string | URL | URLPattern;
	theme: Record<string, string>;
	title?: string;
	description: string;
	pageProps_: PageProps;
	children?:
		| preact.AnyComponent[]
		| preact.AnyComponent
		| preact.VNode[]
		| preact.VNode
		| Element[]
		| Element;
};

/**
 * Main layout wrapper
 */
function MainLayout({ route, title, description, theme, pageProps_, children }: MainLayoutProps) {
	const t = theme;

	return (
		<html className={tw`bg-${t.LightBlue}`}>
			<Head
				route={route}
				title={title}
				description={description}
				pageProps_={pageProps_}
			/>
			<main>
				<Navbar theme={theme} route={route} />
				{children}
			</main>
		</html>
	);
}

export { MainLayout };
