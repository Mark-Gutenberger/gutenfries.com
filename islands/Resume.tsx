/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { asset } from '$fresh/runtime.ts';
import { useEffect, useState } from 'preact/hooks';
import { html, tokens } from 'rusty_markdown';

function Resume() {
	const [resume, setResume] = useState('');
	useEffect(() => {
		(async () => {
			const response = await fetch(asset('/resume/resume.md'));
			const resume = await response.text();
			setResume(resume);
		})();
	}, []);

	const tokenized = tokens(resume, {
		strikethrough: true,
		tables: true,
		tasklists: true,
		footnotes: true,
		smartPunctuation: true,
	});

	const rendered = html(tokenized);

	return (
		<>
			<link
				rel='stylesheet'
				href={asset('/resume/github-markdown.css')}
			/>
			<div className='bg-gray-200'>
				<div className='top-0 flex items-center place-content-center p-5 pt-[6.25rem] h-screen w-screen'>
					<div className='p-2.5 w-full h-full flex flex-col relative w-full rounded-xl'>
						{rendered && (
							<div className='w-full h-full flex flex-col overflow-y-auto relative w-full rounded-md shadow-2xl'>
								<article
									className={`${'markdown-body'} p-2.5 rounded-md`}
									dangerouslySetInnerHTML={{ __html: rendered }}
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
export default Resume;
