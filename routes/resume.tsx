/** @jsx h */
import { h } from 'preact';

import { PageProps } from '$fresh/server.ts';

import { ResumeLayout } from '@/layouts/ResumeLayout.tsx';

import Resume from '@/islands/Resume.tsx';

function ResumePage(PageProps: PageProps) {
	return (
		<ResumeLayout PageProps={PageProps}>
			<Resume />
		</ResumeLayout>
	);
}

export default ResumePage;
