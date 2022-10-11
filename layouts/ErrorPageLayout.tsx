/** @jsx h */
/** @jsxFrag Fragment */
import { ComponentChildren, Fragment, h } from 'preact';

import { ErrorPageProps, UnknownPageProps } from '$fresh/server.ts';

import { Head } from '@/components/Head.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { Navbar } from '@/components/Navbar.tsx';
import { GradientBackground } from '@/components/GradientBackground.tsx';
import { GlassCard } from '@/components/GlassCard.tsx';

interface ErrorPageLayoutProps {
	PageProps: ErrorPageProps | UnknownPageProps;
	children?: ComponentChildren;
}

function ErrorPageLayout({ PageProps, children }: ErrorPageLayoutProps) {
	return (
		<>
			<Head PageProps={PageProps} />
			<a
				href='#main-content'
				className='sr-only focus:not-sr-only'
			>
				Skip to main content
			</a>
			<div className='font-rounded pointer-events-auto w-screen'>
				<Navbar PageProps={PageProps} />
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
