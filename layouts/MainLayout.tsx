/** @jsx h */
/** @jsxFrag Fragment */
import { ComponentChildren, Fragment, h } from 'preact';

import { PageProps } from '$fresh/server.ts';

import { Head } from '@/components/Head.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { Navbar } from '@/components/Navbar.tsx';
import { GradientBackground } from '@/components/GradientBackground.tsx';
import { GlassCard } from '@/components/GlassCard.tsx';

interface MainLayoutProps {
	pageProps_: PageProps;
	children?: ComponentChildren;
}

function MainLayout({ pageProps_, children }: MainLayoutProps) {
	return (
		<>
			<Head pageProps_={pageProps_} />
			<div className='overscroll-none font-rounded pointer-events-auto h-screen w-screen'>
				<Navbar pageProps_={pageProps_} />
				<GradientBackground />
				<GlassCard isMain={true}>
					<NoScript />
					{children}
				</GlassCard>
			</div>
		</>
	);
}

export { MainLayout };
