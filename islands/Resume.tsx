/** @jsx h */
import { h } from 'preact';
import { asset } from '$fresh/runtime.ts';
import { useEffect, useState } from 'preact/hooks';

function Resume() {
	const [resume, setResume] = useState<string | undefined>(undefined);
	useEffect(() => {
		(async () => {
			const response = await fetch(asset('/resume/resume.min.html'));
			const resume = await response.text();
			setResume(resume);
		})();
	}, []);

	return (
		<div
			className='bg-gray-900 w-full h-full overflow-y-auto relative pt-20 /*5rem*/'
			dangerouslySetInnerHTML={{
				__html: resume ?? '',
			}}
		/>
	);
}
export default Resume;
