/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { PageProps } from '$fresh/server.ts';
import { Head } from '@/components/Head.tsx';
import { Navbar } from '@/components/Navbar.tsx';
import { GradientBackground } from '@/components/GradientBackground.tsx';
import { GlassCard } from '@/components/GlassCard.tsx';
import { ComponentChildren } from 'preact';

interface HomeLayoutProps {
	pageProps_: PageProps;
	children?: ComponentChildren;
}

function HomeLayout({ pageProps_, children }: HomeLayoutProps) {
	return (
		<>
			{/* EWWW, a div? already?? sorry folks, it had to be done... */}
			<div
				className={`overscroll-none ${`font-rounded`} pointer-events-auto h-screen w-screen`}
			>
				<Head pageProps_={pageProps_} />
				<main>
					<Navbar pageProps_={pageProps_} />
					<GradientBackground>
						<GlassCard>
							{children}
						</GlassCard>
					</GradientBackground>
				</main>
			</div>
		</>
	);
}

export { HomeLayout };
