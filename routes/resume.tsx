/** @jsx h */
import { h } from 'preact';
import { PageProps } from '$fresh/server.ts';

import { ResumeLayout } from '@/layouts/ResumeLayout.tsx';

import Resume from '@/islands/Resume.tsx';
import PrintWidget from '@/islands/PrintWidget.tsx';

function ResumePage(pageProps_: PageProps) {
	return (
		<ResumeLayout
			pageProps_={pageProps_}
		>
			<PrintWidget src='' />
			<Resume />
		</ResumeLayout>
	);
}

export default ResumePage;
