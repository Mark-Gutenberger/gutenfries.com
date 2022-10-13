/** @jsx h */
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { asset } from '$fresh/runtime.ts';

import Icons from '@/components/Icons.tsx';

import useKeyPress from '@/hooks/handleKeyPress.ts';
// import printiFrame from '@/hooks/printiFrame.ts';

// TODO(#): Fix the issue where if you click on the iframe, the default print method is still used.
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
		// printiFrame('print-resume');
		// open /resume/resume.min.html in a new tab
		window.open(asset('/resume/resume.min.html'), '_blank');
	};

	// listen for ctrl+p (or ctrl+P)
	useKeyPress(['p', 'P'], onKeyPress, 'ctrl');

	return (
		<main className='top-0 flex items-center place-content-center w-screen h-screen'>
			{resume
				? (
					<article
						seamless
						autoFocus={false}
						id='print-resume'
						// mt-[10.5rem]
						className='z-0 w-full h-full flex flex-col p-10 pb-24 m-0 overflow-y-scroll overflow-x-none scroll-smooth'
						dangerouslySetInnerHTML={{ __html: resume }}
					/>
				)
				: (
					// show loader
					<div className='z-0 flex flex-col items-center bg-gray-300 justify-center h-screen w-screen'>
						<div className='motion-safe:animate-bounce'>
							<div className='motion-safe:animate-pulse'>
								<Icons.Loader_3 className='motion-safe:animate-spin w-32 h-32' />
							</div>
						</div>
					</div>
				)}
		</main>
	);
}
export default Resume;
