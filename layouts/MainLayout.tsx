/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { PageProps } from '$fresh/server.ts';
import { Head } from '@/components/Head.tsx';
import { Navbar } from '@/components/Navbar.tsx';
import { GradientBackground } from '@/components/GradientBackground.tsx';
import { GlassCard } from '@/components/GlassCard.tsx';
import { ComponentChildren } from 'preact';

interface MainLayoutProps {
	pageProps_: PageProps;
	children?: ComponentChildren;
}

function MainLayout({ pageProps_, children }: MainLayoutProps) {
	return (
		<>
			<Head pageProps_={pageProps_} />
			<div className='overscroll-none font-rounded pointer-events-auto h-screen w-screen'>
				<Navbar pageProps_={pageProps_} />
				<GradientBackground />
				<GlassCard isMain={true}>
					<noscript>
						<div className='flex flex-col items-center justify-center h-full'>
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

export { MainLayout };
