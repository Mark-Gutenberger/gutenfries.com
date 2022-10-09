/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { PageProps } from '$fresh/server.ts';
import { Head } from '@/components/Head.tsx';
import { Navbar } from '@/components/Navbar.tsx';
import { GradientBackground } from '@/components/GradientBackground.tsx';
import { GlassCard } from '@/components/GlassCard.tsx';
import { ComponentChildren } from 'preact';

interface HomeLayoutProps {
	pageProps_: PageProps;
	children?: ComponentChildren;
}

function HomeLayout({ pageProps_, children }: HomeLayoutProps) {
	return (
		<>
			<Head pageProps_={pageProps_} />
			<div className='overscroll-none font-rounded pointer-events-auto w-100% h-100%'>
				<Navbar pageProps_={pageProps_} />
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

export { HomeLayout };
