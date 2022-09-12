/** @jsx h */
/** @jsxFrag Fragment */
import { PageProps } from '$fresh/server.ts';
import { Head } from '@/components/Head.tsx';
import Navbar from '@/islands/Navbar.tsx';
import { tw } from '@twind';
import { h } from 'preact';
import * as rust from '@/wasm/wasm.js';
import { App } from '@/components/App.tsx';

interface MainLayoutProps {
	pageProps_: PageProps;
	children?:
		| preact.AnyComponent[]
		| preact.AnyComponent
		| preact.VNode[]
		| preact.VNode
		| Element[]
		| Element;
}

function MainLayout({ pageProps_, children }: MainLayoutProps) {
	const BgColor = rust.random_tw_colors(3, 100.0);

	return (
		<App>
			<Head pageProps_={pageProps_} />
			<main className={tw`overscroll-none font-rounded pointer-events-auto`}>
				<Navbar pageProps_={pageProps_} />
				{/* wrapper for the page area, less the navbar */}
				<div className={tw`container h-full w-full`}>
					{/* Backgroud */}
					<div
						className={tw` background-animate bg-gradient-to-r
						from-${BgColor[0]} via-${BgColor[1]} to-${BgColor[2]}
						 p-2.5 grid place-items-center h-screen w-screen`}
					>
						<div
							className={tw`bg-gray-700 text-gray-100 bg-clip-padding backdrop-filter backdrop-blur-md
						bg-opacity-50 max-w-screen-lg p-2.5 max-h-[860px]
						h-4/5 flex flex-col overflow-hidden relative w-full rounded-xl`}
						>
							{children}
						</div>
					</div>
					<style jsx>
						{`
							.background-animate {
								background-size: 400%;

								-webkit-animation: AnimationName 3s ease infinite;
								-moz-animation: AnimationName 3s ease infinite;
								animation: AnimationName 3s ease infinite;
							}

							@keyframes AnimationName {
								0%,
								100% {
									background-position: 0% 50%;
								}
								50% {
									background-position: 100% 50%;
								}
							}
						`}
					</style>
				</div>
			</main>
		</App>
	);
}

export { MainLayout };
