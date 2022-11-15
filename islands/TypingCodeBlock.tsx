import { useEffect } from 'preact/hooks';

import { asset } from '$fresh/runtime.ts';

/**
 * Creates a class that rotates the text in a given element and period,
 * as if the text were being typed
 */
class RotateText {
	/**
	 * The element to rotate the text in
	 */
	private el: Element;
	/**
	 * The text to rotate, represented as a string array
	 * in the order they should be rotated
	 */
	private toRotate: string[];
	/**
	 * The period of time to wait before rotating the next string, in ms
	 */
	private period: number;

	// internal members
	private txt: string;
	private loopNum: number;
	private isDeleting: boolean;
	private textToRotate: string[];

	constructor(el: Element, toRotate: string[], period: number) {
		this.el = el;
		this.toRotate = toRotate;
		this.period = period;
		this.txt = '';
		this.loopNum = 0;
		this.isDeleting = false;
		this.textToRotate = this.toRotate;
		this.tick();
	}

	tick() {
		const i = this.loopNum % this.textToRotate.length;
		const fullTxt = this.textToRotate[i];

		if (this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		}

		this.txt = fullTxt.substring(0, this.txt.length + 1);

		this.el.innerHTML = '<span className="wrap">' + this.txt + '</span>';

		let delta = 300 - Math.random() * 100;

		if (this.isDeleting) {
			delta /= 2;
		}

		if (!this.isDeleting && this.txt === fullTxt) {
			delta = this.period;
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt.length === 0) {
			this.isDeleting = false;
			this.loopNum++;
			delta = 500;
		}

		setTimeout(
			() => this.tick(),
			delta,
		);
	}
}

function TypingCodeBlock(
	{
		code,
		typingCode,
		initialTypingCode,
		language,
	}: {
		code: string[];
		typingCode: string[];
		initialTypingCode: string;
		language: string;
	},
) {
	const content = code.join('\n');

	useEffect(() => {
		const elements = document.getElementsByClassName('txt-rotate');
		for (let i = 0; i < elements.length; i++) {
			const textToRotate = elements[i].getAttribute('data-rotate');
			const period = elements[i].getAttribute('data-period');

			new RotateText(
				elements[i],
				JSON.parse(textToRotate ?? 'Error: No text to rotate'),
				parseInt(period ?? '2000'),
			);
		}
	}, []);

	return (
		<>
			<script
				src={asset('/js/prism.js')}
			/>

			<link
				rel='stylesheet'
				href={asset('/styles/10x-dark.css')}
			/>

			<pre className='text-base w-full h-full'>

				<code className={`language-${language}`}>
					{content + '\n'}
					{initialTypingCode + ' '}
				</code>

				<code className={`language-${language}`}>
					<span
						class='txt-rotate token string'
						data-rotate={JSON.stringify(typingCode)}
					/>
					<i
						class='txt-cursor'
						data-owner='txt-rotate'
					/>
				</code>
			</pre>
		</>
	);
}

export default TypingCodeBlock;
