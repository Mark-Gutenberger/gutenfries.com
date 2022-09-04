/** @jsx h */
/** @jsxFrag Fragment */
import { Context, createContext, Fragment, h } from 'preact';
import { Navbar } from '@/components/Navbar.tsx';
import { PageProps } from '$fresh/server.ts';
import { Head } from '@/components/Head.tsx';
import { tw } from '@twind';
import { useContext, useEffect, useState } from 'preact/hooks';

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

// it doesn't matter what the state is initialized with, all that matters is the type.
const Theme: Context<string | undefined> = createContext<string | undefined>('');

function DisplayTheme() {
	const theme = useContext(Theme);
	return <p>Active theme: {theme}</p>;
}

function MainLayout({ title, pageProps_, children }: MainLayoutProps) {
	const BackgroundImageUrl = '/images/backgrounds/milad-fakurian-E8Ufcyxz514-unsplash.jpg';
	return (
		<main className={tw`font-rounded pointer-events-auto`}>
			<Theme.Provider value='dark'>
				<Head
					title={title}
					pageProps_={pageProps_}
				/>
				<Navbar pageProps_={pageProps_} />
				<div className={tw`container w-full`}>
					{/* Backgroud Image */}
					<div className={tw`backround-image grid place-items-center h-screen w-screen`}>
						<style>
							{`
								.backround-image {
									background-image: url(${BackgroundImageUrl});
									background-size: cover;
									background-repeat: no-repeat;
								}
							`}
						</style>
						{
							/* <img
							draggable={false}
							src='/images/backgrounds/milad-fakurian-E8Ufcyxz514-unsplash.jpg'
							className={tw`w-full top-0 -z-10 h-full object-cover static select-none pointer-events-none`}
							alt='background image'
						/> */
						}

						<div
							className={tw`bg-red-300 w-3/4 h-3/4 absolute container rounded-lg p-4`}
						>
							{/* TODO: throw this away */}
							<DisplayTheme />
							{children}
						</div>
					</div>
				</div>
			</Theme.Provider>
		</main>
	);
}

export { MainLayout };
