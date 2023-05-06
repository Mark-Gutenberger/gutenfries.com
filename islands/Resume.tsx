import * as gfm from 'gfm';

import { asset } from '$fresh/runtime.ts';
import { useState } from 'preact/hooks';

/**
 * which resume to display
 *
 * In typescript, enums are numbers by default, so we can use them as indexes as well
 *
 * @property {number} tech - tech resume
 * @property {number} music - music resume
 * @example
 * // returns 0
 * ActiveResume.tech
 * @example
 * // returns 1
 * ActiveResume.music
 */
enum ActiveResume {
	tech,
	music,
}

export default function Resume(
	{ resumes }: { resumes: (string | null)[] },
) {
	const [activeResume, setActiveResume] = useState<ActiveResume>(ActiveResume.tech);

	return (
		<div className='w-full h-full p-2 pt-4 mt-4 bg-gray-200 rounded-lg shadow-xl dark:bg-gray-800'>
			{/* navbar */}
			<ul className='flex flex-row justify-start ml-5'>
				<li>
					<button
						type='button'
						aria-label='Show Tech resume'
						className={`px-6 pt-1.5 pb-1 w-auto text-lg font-medium dark:text-gray-100 hover:bg-gray-700 hover:text-gray-200 active:bg-gray-900 active:text-gray-100 dark:hover:bg-gray-700 dark:active:bg-gray-900 text-gray-900 rounded-t-lg shadow-xl cursor-pointer ${
							activeResume === ActiveResume.tech
								? 'dark:bg-gray-900 bg-gray-400'
								: 'dark:bg-gray-800 bg-gray-200'
						}`}
						onClick={() => {
							console.log(activeResume);
							setActiveResume(ActiveResume.tech);
						}}
					>
						Tech
					</button>
				</li>
				<li>
					<button
						type='button'
						aria-label='Show Music resume'
						className={`px-6 pt-1.5 pb-1 w-auto text-lg font-medium dark:text-gray-100 hover:bg-gray-700 hover:text-gray-200 active:bg-gray-900 active:text-gray-100 dark:hover:bg-gray-700 dark:active:bg-gray-900 text-gray-900 rounded-t-lg shadow-xl cursor-pointer ${
							activeResume === ActiveResume.music
								? 'dark:bg-gray-900 bg-gray-400'
								: 'dark:bg-gray-800 bg-gray-200'
						}`}
						onClick={() => {
							console.log(activeResume);
							setActiveResume(ActiveResume.music);
						}}
					>
						Music
					</button>
				</li>
			</ul>
			{resumes
				? (
					<section>
						<link rel='stylesheet' href={asset('/styles/markdown.css')} />
						<article
							data-color-mode='auto'
							data-light-theme='light'
							data-dark-theme='dark'
							class='markdown-body'
							className='p-10 rounded-lg shadow-xl'
							dangerouslySetInnerHTML={{
								__html: gfm.render(
									resumes[activeResume] ?? 'Eternally Loading...',
								),
							}}
						/>
					</section>
				)
				: (
					<h1 className='pt-20 text-center text-5xl font-bold rounded-lg'>
						Loading...
					</h1>
				)}
		</div>
	);
}
