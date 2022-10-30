/** @jsx h */
/** @jsxFrag Fragment */
import { ComponentChildren, Fragment, h } from 'preact';

import { PageProps } from '$fresh/server.ts';

import { Head } from '@/components/Head.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { Navbar } from '@/components/Navbar.tsx';

interface ResumeLayoutProps {
	PageProps: PageProps;
	children?: ComponentChildren;
}

function ResumeLayout({ PageProps, children }: ResumeLayoutProps) {
	return (
		<>
			<Head PageProps={PageProps} />
			<div className='font-rounded pointer-events-auto'>
				<a
					href='#print-resume'
					className='sr-only focus:not-sr-only'
				>
					Skip to main content
				</a>
				<Navbar active='resume' />
				<NoScript />
				{children}
			</div>
		</>
	);
}

export { ResumeLayout };
