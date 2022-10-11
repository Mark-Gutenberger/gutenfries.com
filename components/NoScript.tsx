/** @jsx h */
import { h } from 'preact';

function NoScript() {
	return (
		<noscript>
			<div className='flex flex-col items-center justify-center h-screen'>
				<h2 className='text-4xl font-bold text-center text-white'>
					Please enable JavaScript for the best experience using this website.
				</h2>
			</div>
		</noscript>
	);
}

export { NoScript };
