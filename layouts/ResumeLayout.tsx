/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { PageProps } from '$fresh/server.ts';
import { Head } from '@/components/Head.tsx';
import { Navbar } from '@/components/Navbar.tsx';
import { ComponentChildren } from 'preact';

interface ResumeLayoutProps {
	pageProps_: PageProps;
	children?: ComponentChildren;
}

function ResumeLayout({ pageProps_, children }: ResumeLayoutProps) {
	return (
		<>
			<div
				className={`overscroll-none ${`font-rounded`} pointer-events-auto h-screen w-screen`}
			>
				<Head pageProps_={pageProps_} />
				<main>
					<Navbar pageProps_={pageProps_} />
					{children}
				</main>
			</div>
		</>
	);
}

export { ResumeLayout };
