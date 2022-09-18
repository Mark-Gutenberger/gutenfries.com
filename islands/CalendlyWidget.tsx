/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

interface CalendlyWidgetProps {
	minWidth: string | number;
	height: string | number;
	url: string;
}

function CalendlyWidget({ minWidth, height, url }: CalendlyWidgetProps) {
	const [isExpanded, setIsExpanded] = useState(false);

	// if minWidth or height is a number, convert it to a string with 'px' at the end
	minWidth = typeof minWidth === 'number' ? `${minWidth}px` : minWidth;
	height = typeof height === 'number' ? `${height}px` : height;

	useEffect(() => {
		const head = document.querySelector('head');
		const script = document.createElement('script');
		script.setAttribute('src', '/calendly/widget.min.js');
		script.setAttribute('type', 'text/javascript');
		script.setAttribute('async', 'true');
		head?.appendChild(script);
	}, [isExpanded === true]);

	return (
		<div>
			{isExpanded
				? (
					<>
						<div className='p-2.5'>
							<div
								className={`${`calendly-inline-widget`} shadow-md rounded-lg`}
								data-url={url}
								style={{ minWidth: minWidth, height: height }}
							/>
						</div>
						<button
							className='fixed bottom-0 right-0 mb-10 mr-10  flex items-center justify-center p-2.5 text-white bg-blue-600 rounded-lg shadow-lg outline-none border-none hover:text-gray-300'
							onClick={() => setIsExpanded(false)}
						>
							<svg
								name='X'
								strokeWidth='2'
								className='fill-current text-gray-300 hover:text-white cursor-pointer'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								width='24'
								height='24'
							>
								<path
									fill-rule='evenodd'
									d='M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z'
								>
								</path>
							</svg>
						</button>
					</>
				)
				: (
					<button
						className='fixed bottom-0 right-0 mb-10 mr-10 flex items-center justify-center w-56 p-2.5 text-white bg-blue-600 rounded-lg shadow-lg outline-none border-none hover:text-gray-300'
						onClick={() => setIsExpanded(true)}
					>
						Book a coffee chat
					</button>
				)}
		</div>
	);
}

export default CalendlyWidget;
