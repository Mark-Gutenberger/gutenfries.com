/** @jsx h */
import { h } from 'preact';

import { PageProps } from '$fresh/server.ts';

import { ResumeLayout } from '@/layouts/ResumeLayout.tsx';

import Resume from '@/islands/Resume.tsx';

function ResumePage(pageProps_: PageProps) {
	return (
		<ResumeLayout pageProps_={pageProps_}>
			<Resume />
		</ResumeLayout>
	);
}

export default ResumePage;
