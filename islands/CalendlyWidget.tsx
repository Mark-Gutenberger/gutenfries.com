/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import Icons from '@/components/Icons.tsx';

interface CalendlyWidgetProps {
	minWidth: string | number;
	height: string | number;
	url: string;
}

function CalendlyWidget({ minWidth, height, url }: CalendlyWidgetProps) {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	// if minWidth or height is a number, convert it to a string with 'px' at the end
	minWidth = typeof minWidth === 'number' ? `${minWidth}px` : minWidth;
	height = typeof height === 'number' ? `${height}px` : height;

	useEffect(() => {
		const head = document.querySelector('head');
		const script = document.createElement('script');
		script.setAttribute('src', '/calendly/widget.min.js');
		script.setAttribute('type', 'text/javascript');
		// script.setAttribute('async', 'true');
		head?.appendChild(script);
	}, [isExpanded === true]);

	return (
		<div>
			{isExpanded
				? (
					<>
						<div
							className='p-2.5 calendly-inline-widget shadow-md rounded-lg'
							data-url={url}
							style={{ minWidth: minWidth, height: height }}
						/>
						<button
							type='button'
							className='fixed bottom-0 left-0 mb-10 ml-10 flex items-center justify-center p-2.5 bg-gray-700 hover:bg-transparent border-4 border-transparent hover:border-gray-700 backdrop-filter backdrop-blur-md text-xl font-semibold rounded-lg shadow-lg text-gray-300 hover:text-gray-50'
							onClick={() => setIsExpanded(false)}
						>
							<Icons.Close className='fill-current text-gray-50 hover:text-gray-700 cursor-pointer' />
							<span className='sr-only'>Close</span>
						</button>
					</>
				)
				: (
					<button
						type='button'
						className='fixed bottom-0 right-0 mb-10 mr-10 flex items-center justify-center p-2 bg-gray-700 hover:bg-transparent border-4 border-transparent hover:border-gray-700 backdrop-filter backdrop-blur-md text-xl font-semibold rounded-lg shadow-lg text-gray-300 hover:text-gray-50'
						onClick={() => setIsExpanded(true)}
					>
						Book a coffee chat
					</button>
				)}
		</div>
	);
}

export default CalendlyWidget;
