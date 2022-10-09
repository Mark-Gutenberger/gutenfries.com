/** @jsx h */
/** @jsxFrag Fragment */
import { ComponentChildren, Fragment, h } from 'preact';
import { ErrorPageProps } from '$fresh/server.ts';

import { Head } from '@/components/Head.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { Navbar } from '@/components/Navbar.tsx';
import { GradientBackground } from '@/components/GradientBackground.tsx';
import { GlassCard } from '@/components/GlassCard.tsx';

interface ErrorPageLayoutProps {
	errorPageProps_: ErrorPageProps;
	children?: ComponentChildren;
}

function ErrorPageLayout({ errorPageProps_, children }: ErrorPageLayoutProps) {
	return (
		<>
			<Head pageProps_={errorPageProps_} />
			<div className='font-rounded pointer-events-auto h-screen w-screen'>
				<Navbar pageProps_={errorPageProps_} />
				<GradientBackground />
				<GlassCard isMain={true}>
					<NoScript />
					{children}
				</GlassCard>
			</div>
		</>
	);
}

export { ErrorPageLayout };
