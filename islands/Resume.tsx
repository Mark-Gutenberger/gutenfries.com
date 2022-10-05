/** @jsx h */
import { h } from 'preact';
import { asset } from '$fresh/runtime.ts';
import { useEffect, useState } from 'preact/hooks';
import useKeyPress from '@/hooks/handleKeyPress.ts';
import printiFrame from '@/hooks/printiFrame.ts';

// TODO(#): FIx the issue where if you click on the iframe, the default print method is still used.
function Resume() {
	const [resume, setResume] = useState<string | undefined>(undefined);

	useEffect(() => {
		(async () => {
			const response = await fetch(asset('/resume/resume.min.html'));
			const resume = await response.text();
			setResume(resume);
		})();
	}, []);

	// code to execude on keypress
	const onKeyPress = (event: KeyboardEvent) => {
		// prevent default print behavior
		event.preventDefault();
		// print the iframe
		printiFrame('print-resume');
	};

	// listen for ctrl+p (or ctrl+P)
	useKeyPress(['p', 'P'], onKeyPress, 'ctrl');

	return (
		<div className='h-screen w-screen relative'>
			<iframe
				seamless
				autoFocus={false}
				id='print-resume'
				className='shadow-2xl w-full h-full relative pt-20'
				title='print-resume'
				srcDoc={resume}
			>
				Your browser does not support iframes.
			</iframe>
		</div>
	);
}
export default Resume;
