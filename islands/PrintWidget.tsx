/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

interface PrintWidgetProps {
	/** * `src` The URL of the document to print */
	src: string;
}

function PrintWidget({ src }: PrintWidgetProps) {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);

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
			<button className='fixed bottom-0 right-0 mb-10 mr-10 flex items-center justify-center w-auto p-2.5 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg outline-none border-none hover:text-gray-300'>
				Print
			</button>
		</div>
	);
}

export default PrintWidget;
