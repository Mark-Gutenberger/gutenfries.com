/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { Head } from '@/components/Head.tsx';
import { UnknownPageProps } from '$fresh/server.ts';
import { Navbar } from '@/components/Navbar.tsx';
import { GradientBackground } from '@/components/GradientBackground.tsx';
import { GlassCard } from '@/components/GlassCard.tsx';
import { ComponentChildren } from 'preact';

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
							<h2 className='text-4xl font-bold text-center text-white'>
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
