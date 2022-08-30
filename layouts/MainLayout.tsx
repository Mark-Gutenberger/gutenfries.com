/** @jsx h */
/** @jsxFrag Fragment */
import { Attributes, Component, ComponentChildren, Fragment, h, Ref } from 'preact';
import { Navbar } from '../components/Navbar.tsx';
import { PageProps } from '$fresh/server.ts';
import { Head } from '../components/Head.tsx';
import { tw } from '@twind';

type MainLayoutProps = {
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
function MainLayout({ title, description, theme, pageProps_, children }: MainLayoutProps) {
	const t = theme;

	return (
		<html className={tw`bg-${t.LightBlue} font-rounded`}>
			<Head
				title={title}
				description={description}
				pageProps_={pageProps_}
			/>
			<main>
				<Navbar pageProps_={pageProps_} />
				{children}
			</main>
		</html>
	);
}

export { MainLayout };
