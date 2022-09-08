/** @jsx h */
/** @jsxFrag Fragment */
import { PageProps } from '$fresh/server.ts';
import { Head } from '@/components/Head.tsx';
import Navbar from '@/islands/Navbar.tsx';
import { tw } from '@twind';
import { Fragment, h } from 'preact';
import * as rust from '@/wasm/wasm.js';

interface MainLayoutProps {
	title?: string;
	pageProps_: PageProps;
	children?:
		| preact.AnyComponent[]
		| preact.AnyComponent
		| preact.VNode[]
		| preact.VNode
		| Element[]
		| Element;
}

function MainLayout({ title, pageProps_, children }: MainLayoutProps) {
	const BgColor_1 = rust.random_color();
	const BgColor_2 = rust.random_color();
	const BgColor_3 = rust.random_color();

	return (
		<>
			{/* scripts to run main content load */}
			{/*  */}
			<main className={tw`overscroll-none font-rounded pointer-events-auto`}>
				<Head
					title={title}
					pageProps_={pageProps_}
				/>
				<Navbar pageProps_={pageProps_} />
				{/* wrapper for the page area, less the navbar */}
				<div className={tw`container h-full w-full`}>
					{/* Backgroud */}
					<div
						className={tw`bg-gradient-to-r from-${BgColor_1} via-${BgColor_2} to-${BgColor_3} p-2.5 grid place-items-center h-screen w-screen`}
					>
						<div
							className={tw`bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-md
						bg-opacity-50 max-w-screen-lg p-2.5 max-h-[860px]
						h-4/5 flex flex-col overflow-hidden relative w-full rounded-xl`}
						>
							{children}
						</div>
					</div>
				</div>
			</main>
			{/* scripts to run after page paint */}
			<script>feather.replace()</script>
			{/*  */}
		</>
	);
}

export { MainLayout };
