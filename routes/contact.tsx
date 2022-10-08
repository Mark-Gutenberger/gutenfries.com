/** @jsx h */
import { h } from 'preact';
import { MainLayout } from '@/layouts/MainLayout.tsx';
import { PageProps } from '$fresh/server.ts';
import { SocialLinks } from '@/components/SocialLinks.tsx';
import CalendlyWidget from '@/islands/CalendlyWidget.tsx';

function ContactPage(pageProps_: PageProps) {
	return (
		<MainLayout
			pageProps_={pageProps_}
		>
			<CalendlyWidget
				minWidth={200}
				height={567}
				url='https://calendly.com/gutenfries/coffee-chat'
			/>
			<br />
			<h2 className='animate-fade-in-0.5 text-5xl font-bold text-center my-8'>
				Hi
			</h2>
			<br />
			<p className='animate-fade-in-0.5 text-xl text-center mt-8'>
				I'd love to get in touch with you!
			</p>
			<p className='animate-fade-in-0.5 text-xl text-center mb-8'>
				Check out my social links below, or even schedule a chat with me.
			</p>
			<h3 className='animate-fade-in-1 text-3xl font-bold text-center my-8'>
				@gutenfries
			</h3>
			<div className='animate-fade-in-0.5 flex flex-col items-center justify-center my-8'>
				<SocialLinks />
			</div>
		</MainLayout>
	);
}

export default ContactPage;
