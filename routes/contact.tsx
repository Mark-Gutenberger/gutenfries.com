/** @jsx h */
import { h } from 'preact';

import { PageProps } from '$fresh/server.ts';

import { SocialLinks } from '@/components/SocialLinks.tsx';

import CalendlyWidget from '@/islands/CalendlyWidget.tsx';

function ContactPage(PageProps: PageProps) {
	return (
		<div>
			<CalendlyWidget
				minWidth={200}
				height={567}
				url='https://calendly.com/gutenfries/coffee-chat'
			/>
			<h1 className='text-5xl font-bold text-center mt-5 mb-8 text-white'>
				Hi
			</h1>
			<p className='text-xl text-center mt-8 text-white'>
				I'd love to get in touch with you!
			</p>
			<p className='text-xl text-center mb-8 text-white'>
				Check out my social links below, or even schedule a chat with me.
			</p>
			<p className='text-3xl font-bold text-center my-8 text-white'>
				@gutenfries
			</p>
			<div className='flex flex-col items-center justify-center my-8 text-white'>
				<SocialLinks />
			</div>
		</div>
	);
}

export default ContactPage;
