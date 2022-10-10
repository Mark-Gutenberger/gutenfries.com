/** @jsx h */
/** @jsxFrag Fragment */
import { ComponentChildren, Fragment, h } from 'preact';

import { PageProps } from '$fresh/server.ts';

import { Head } from '@/components/Head.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { Navbar } from '@/components/Navbar.tsx';

interface ResumeLayoutProps {
	pageProps_: PageProps;
	children?: ComponentChildren;
}

function ResumeLayout({ pageProps_, children }: ResumeLayoutProps) {
	return (
		<>
			<Head pageProps_={pageProps_} />
			<div className='font-rounded pointer-events-auto w-screen'>
				<Navbar pageProps_={pageProps_} />
				<NoScript />
				{children}
			</div>
		</>
	);
}

export { ResumeLayout };
