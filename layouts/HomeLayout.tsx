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
			<a
				className='text-center text-white absolute t-0 inset-x-0 m-[1.25] p-[1.25] h-auto w-100% rounded-md border-none shadow-md -z-20 focus:z-30 focus:bg-gray-500'
				href='#main-content'
				onClick={() => {
					const mainContent = document.getElementById('main-content');
					if (mainContent) {
						mainContent.scrollIntoView({ behavior: 'smooth' });
					}
				}}
			>
				Skip to main content
			</a>
			<div className='overscroll-none font-rounded pointer-events-auto h-screen w-screen'>
				<Navbar pageProps_={pageProps_} />
				<GradientBackground />
				<GlassCard isMain={true}>{children}</GlassCard>
			</div>
		</>
	);
}

export { HomeLayout };
