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

interface ResumeProps {
	resumes: string[];
}

export default function Resume({ resumes }: ResumeProps) {
	const [activeResume, setActiveResume] = useState<ActiveResume>(ActiveResume.tech);

	return (
		<div className='w-full h-full p-2 pt-4 mt-4 bg-gray-200 rounded-lg shadow-xl dark:bg-gray-800'>
			{/* navbar */}
			<ul className='flex flex-row justify-start ml-5'>
				<li>
					<a
						type='button'
						aria-label='Show tech resume'
						className={`px-6 pt-1.5 pb-1 w-auto text-lg font-medium dark:text-gray-100 hover:bg-gray-700 hover:text-gray-200 active:bg-gray-900 active:text-gray-100 dark:hover:bg-gray-700 dark:active:bg-gray-900 text-gray-900 rounded-t-lg shadow-xl cursor-pointer ${
							activeResume === ActiveResume.tech
								? 'dark:bg-gray-900 bg-gray-400'
								: 'dark:bg-gray-800 bg-gray-200'
						}`}
						onClick={() => {
							setActiveResume(ActiveResume.tech);
						}}
					>
						Tech
					</a>
				</li>
				<li>
					<a
						type='button'
						aria-label='Show music resume'
						className={`px-6 pt-1.5 pb-1 w-auto text-lg font-medium dark:text-gray-100 hover:bg-gray-700 hover:text-gray-200 active:bg-gray-900 active:text-gray-100 dark:hover:bg-gray-700 dark:active:bg-gray-900 text-gray-900 rounded-t-lg shadow-xl cursor-pointer ${
							activeResume === ActiveResume.music
								? 'dark:bg-gray-900 bg-gray-400'
								: 'dark:bg-gray-800 bg-gray-200'
						}`}
						onClick={() => {
							setActiveResume(ActiveResume.music);
						}}
					>
						Music
					</a>
				</li>
			</ul>

			<section>
				<link rel='stylesheet' href={asset('/styles/markdown.css')} />
				<article
					data-color-mode='auto'
					data-light-theme='light'
					data-dark-theme='dark'
					className='p-10 rounded-lg shadow-xl markdown-body'
					dangerouslySetInnerHTML={{
						__html: resumes[activeResume] ?? 'Loading...',
					}}
				/>
			</section>
		</div>
	);
}
