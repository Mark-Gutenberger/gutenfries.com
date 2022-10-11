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
	PageProps: PageProps;
	children?: ComponentChildren;
}

function MainLayout({ PageProps, children }: MainLayoutProps) {
	return (
		<>
			<Head PageProps={PageProps} />
			<div className='font-rounded pointer-events-auto w-screen'>
				<a
					href='#main-content'
					className='sr-only focus:not-sr-only'
				>
					Skip to main content
				</a>
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

export { MainLayout };
