/** @jsx h */
/** @jsxFrag Fragment */
import { ComponentChildren, Fragment, h } from 'preact';

import { ErrorPageProps, UnknownPageProps } from '$fresh/server.ts';

import { Head } from '@/components/Head.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { Navbar } from '@/components/Navbar.tsx';
import { GlassCard } from '@/components/GlassCard.tsx';

interface ErrorPageLayoutProps {
	PageProps: ErrorPageProps | UnknownPageProps;
	children?: ComponentChildren;
}

function ErrorPageLayout({ PageProps, children }: ErrorPageLayoutProps) {
	return (
		<>
			<Head PageProps={PageProps} />
			<div className='pointer-events-auto font-[fira]'>
				<a
					href='#main-content'
					className='sr-only focus:not-sr-only'
				>
					Skip to main content
				</a>
				<Navbar active='404' />

				<NoScript />
			</div>
		</>
	);
}

export { ErrorPageLayout };
