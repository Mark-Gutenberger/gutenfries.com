/** @jsx h */
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { asset } from '$fresh/runtime.ts';

import useKeyPress from '@/hooks/handleKeyPress.ts';
import printiFrame from '@/hooks/printiFrame.ts';

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
		printiFrame('print-resume');
	};

	// listen for ctrl+p (or ctrl+P)
	useKeyPress(['p', 'P'], onKeyPress, 'ctrl');

	return (
		// show loader until resume is loaded
		<div className='bg-gray-300 flex items-center flex-col justify-center h-full w-full'>
			{resume
				? (
					// show resume

					<iframe
						seamless
						autoFocus={false}
						id='print-resume'
						className='h-full w-full pt-[84px] z-10'
						srcDoc={resume}
						title='Resume'
					/>
				)
				: (
					// show loader
					<div className='flex flex-col items-center justify-center h-full w-full'>
						<div className='motion-safe:animate-bounce'>
							<div className='motion-safe:animate-pulse'>
								<svg
									// source: [tabler-icons](https://github.com/tabler/tabler-icons)
									className='motion-safe:animate-spin w-32 h-32'
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									stroke-width='2'
									stroke='currentColor'
									fill='none'
									stroke-linecap='round'
									stroke-linejoin='round'
								>
									<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
									<line x1='12' y1='6' x2='12' y2='3'></line>
									<line x1='16.25' y1='7.75' x2='18.4' y2='5.6'></line>
									<line x1='18' y1='12' x2='21' y2='12'></line>
									<line x1='16.25' y1='16.25' x2='18.4' y2='18.4'></line>
									<line x1='12' y1='18' x2='12' y2='21'></line>
									<line x1='7.75' y1='16.25' x2='5.6' y2='18.4'></line>
									<line x1='6' y1='12' x2='3' y2='12'></line>
									<line x1='7.75' y1='7.75' x2='5.6' y2='5.6'></line>
								</svg>
							</div>
						</div>
					</div>
				)}
		</div>
	);
}
export default Resume;
