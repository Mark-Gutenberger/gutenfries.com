/** @jsx h */
import { h } from 'preact';
import { HomeLayout } from '@/layouts/HomeLayout.tsx';
import { PageProps } from '$fresh/server.ts';
import { SocialLinks } from '@/components/SocialLinks.tsx';
import CalendlyWidget from '@/islands/CalendlyWidget.tsx';

function ContactPage(pageProps_: PageProps) {
	return (
		<HomeLayout
			pageProps_={pageProps_}
		>
			<CalendlyWidget
				minWidth={200}
				height={567}
				url='https://calendly.com/gutenfries/coffee-chat'
			/>
			<br />
			<h1 className='animate-fade-in-0.5 text-5xl font-bold text-center mt-2.5'>
				Hi
			</h1>
			<br />
			<p className='animate-fade-in-1 text-lg text-center'>
				I'd love to get in touch with you! Check out my social links below, or even schedule
				a chat with me.
			</p>
			<div className='animate-fade-in-0.5 flex flex-col items-center justify-center my-16'>
				<SocialLinks />
			</div>

			<p className='animate-fade-in-1 text-lg text-center'>
				If there is a platform that I didn't mention that you'd like to get in touch with me
				on, search for me <span className='animate-fade-in-1 font-bold'>@gutenfries</span>
				{' '}
				on any platform.
			</p>
		</HomeLayout>
	);
}

export default ContactPage;
