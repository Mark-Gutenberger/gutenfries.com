/** @jsx h */
/** @jsxFrag Fragment */
import { ComponentChildren, Fragment, h } from 'preact';

import { UnknownPageProps } from '$fresh/server.ts';

import { Head } from '@/components/Head.tsx';
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
			<div className='overscroll-none font-rounded pointer-events-auto h-screen w-screen'>
				<Navbar pageProps_={notFoundPageProps_} />
				<GradientBackground />
				<GlassCard isMain={true}>
					<noscript>
						<div className='flex flex-col items-center justify-center h-screen'>
							<h2 className='text-4xl font-bold text-center text-gray-200'>
								Please enable JavaScript to use this website.
							</h2>
						</div>
					</noscript>
					{children}
				</GlassCard>
			</div>
		</>
	);
}

export { NotFoundLayout };
