/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { PageProps } from '$fresh/server.ts';
import { Head } from '@/components/Head.tsx';
import { Navbar } from '@/components/Navbar.tsx';
import GradientBackground from '@/islands/GradientBackground.tsx';
import { GlassCard } from '@/components/GlassCard.tsx';
import { ComponentChildren } from 'preact';

interface HomeLayoutProps {
	pageProps_: PageProps;
	children?: ComponentChildren;
}

function HomeLayout({ pageProps_, children }: HomeLayoutProps) {
	return (
		<>
			<div
				className={`overscroll-none ${`font-rounded`} pointer-events-auto h-screen w-screen`}
			>
				<Head pageProps_={pageProps_} />
				<main>
					<Navbar pageProps_={pageProps_} />
					<GradientBackground />
					<GlassCard>{children}</GlassCard>
				</main>
			</div>
		</>
	);
}

export { HomeLayout };
