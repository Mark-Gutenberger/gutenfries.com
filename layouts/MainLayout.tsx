import { PageProps } from '$fresh/server.ts';
import { Head } from '@/components/Head.tsx';
import { Navbar } from '@/components/Navbar.tsx';
import { GradientBackground } from '@/components/GradientBackground.tsx';
import { App } from '@/components/App.tsx';
import { GlassCard } from '@/components/GlassCard.tsx';

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
			<main
				className={`overscroll-none ${`font-rounded`} pointer-events-auto h-screen w-screen`}
			>
				<Navbar pageProps_={pageProps_} />
				<GradientBackground>
					<GlassCard>
						{children}
					</GlassCard>
				</GradientBackground>
			</main>
		</App>
	);
}

export { MainLayout };
