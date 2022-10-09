/** @jsx h */
/** @jsxFrag Fragment */
import { ComponentChildren, Fragment, h } from 'preact';

import { PageProps } from '$fresh/server.ts';

import { Head } from '@/components/Head.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { Navbar } from '@/components/Navbar.tsx';
import { GradientBackground } from '@/components/GradientBackground.tsx';
import { GlassCard } from '@/components/GlassCard.tsx';

interface HomeLayoutProps {
	pageProps_: PageProps;
	children?: ComponentChildren;
}

function HomeLayout({ pageProps_, children }: HomeLayoutProps) {
	return (
		<>
			<Head pageProps_={pageProps_} />
			<div className='overscroll-none font-rounded pointer-events-auto w-screen h-screen'>
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

export { HomeLayout };
