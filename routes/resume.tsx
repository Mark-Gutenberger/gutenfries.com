/** @jsx h */
import { h } from 'preact';
import { PageProps } from '$fresh/server.ts';
import { ResumeLayout } from '@/layouts/ResumeLayout.tsx';

function ResumePage(pageProps_: PageProps) {
	return (
		<ResumeLayout
			pageProps_={pageProps_}
		>
		</ResumeLayout>
	);
}

export default ResumePage;
