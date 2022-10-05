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
			<button className='fixed bottom-0 right-0 mb-[3.75rem] mr-[3.75rem] flex items-center justify-center py-2 px-4 text-white bg-[#006bff] hover:bg-transparent border-4 border-transparent hover:border-[#006bff] backdrop-filter backdrop-blur-md text-xl font-semibold rounded-lg shadow-lg  hover:text-gray-300'>
				Print
			</button>
		</div>
	);
}

export default PrintWidget;
