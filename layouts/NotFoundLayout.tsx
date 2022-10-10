/** @jsx h */
/** @jsxFrag Fragment */
import { ComponentChildren, Fragment, h } from 'preact';

import { UnknownPageProps } from '$fresh/server.ts';

import { Head } from '@/components/Head.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { Navbar } from '@/components/Navbar.tsx';
import { GradientBackground } from '@/components/GradientBackground.tsx';
import { GlassCard } from '@/components/GlassCard.tsx';

interface NotFoundLayoutProps {
	notFoundPageProps_: UnknownPageProps;
	children?: ComponentChildren;
}

function NotFoundLayout({ notFoundPageProps_, children }: NotFoundLayoutProps) {
	return (
		<>
			<Head pageProps_={notFoundPageProps_} />
			<div className='font-rounded pointer-events-auto w-screen'>
				<Navbar pageProps_={notFoundPageProps_} />
				<GradientBackground />
				<GlassCard isMain={true}>
					<NoScript />
					{children}
				</GlassCard>
			</div>
		</>
	);
}

export { NotFoundLayout };
