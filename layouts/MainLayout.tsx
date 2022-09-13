import { PageProps } from '$fresh/server.ts';
import { Head } from '@/components/Head.tsx';
import { Navbar } from '@/components/Navbar.tsx';
import { GradientBackground } from '@/components/GradientBackground.tsx';
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
	return (
		<App>
			<Head pageProps_={pageProps_} />
			<main className='overscroll-none font-rounded pointer-events-auto h-screen w-screen'>
				<Navbar pageProps_={pageProps_} />
				<GradientBackground>
					<div className='bg-gray-700 text-gray-100 bg-clip-padding backdrop-filter backdrop-blur-md
										 bg-opacity-50 max-w-screen-lg p-2.5 max-h-[860px]
										 h-4/5 flex flex-col overflow-hidden relative w-full rounded-xl'>
						{children}
					</div>
				</GradientBackground>
			</main>
		</App>
	);
}

export { MainLayout };
