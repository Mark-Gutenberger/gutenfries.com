import { useEffect } from 'preact/hooks';

import { asset } from '$fresh/runtime.ts';

// yay object oriented programming
class RotateText {
	el: Element;
	toRotate: string[];
	period: number;
	txt: string;
	loopNum: number;
	isDeleting: boolean;
	textToRotate: string[];

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
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		this.el.innerHTML = '<span className="wrap">' + this.txt + '</span>';

		let delta = 300 - Math.random() * 100;

		if (this.isDeleting) {
			delta /= 2;
		}

		if (!this.isDeleting && this.txt === fullTxt) {
			delta = this.period;
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			this.loopNum++;
			delta = 500;
		}

		setTimeout(() => this.tick(), delta);
	}
}

function TypingCodeBlock(
	{ code, typingCode, initialTypingCode, language }: {
		code: string[];
		typingCode: string[];
		initialTypingCode: string;
		language: string;
	},
) {
	const content = code.join('\n');

	useEffect(() => {
		const elements = document.getElementsByClassName('txt-rotate');
		if (elements.length < 1) {
			const textToRotate = elements[0].getAttribute('data-rotate');
			const period = elements[0].getAttribute('data-period');
			if (textToRotate) {
				new RotateText(elements[0], JSON.parse(textToRotate), parseInt(period ?? '2000'));
			}
		} else if (elements.length > 0) {
			for (let i = 0; i < elements.length; i++) {
				const textToRotate = elements[i].getAttribute('data-rotate');
				const period = elements[i].getAttribute('data-period');
				if (textToRotate) {
					new RotateText(
						elements[i],
						JSON.parse(textToRotate),
						parseInt(period ?? '2000'),
					);
				}
			}
		} else {
			console.log(
				'Hello, We have been trying to reach you about your car\'s extended warranty.',
			);
		}
	}, []);

	return (
		<>
			<script
				src={asset('/prism/prism.js')}
			/>
			<link
				rel='stylesheet'
				href={asset('/prism/10x-dark.css')}
			/>
			<style jsx>
				{`
					@keyframes blink {
						0% {
							opacity: 0;
						}
						50% {
							opacity: 1;
						}
						100% {
							opacity: 0;
						}
					}
					.txt-cursor {
						white-space: nowrap;
						overflow: hidden;
						border-right: 0.2ch solid skyblue;
						animation: blink 0.75s steps(1) infinite normal;
					}
				`}
			</style>
			<pre className='text-base'>
				<code className={`language-${language}`}>
					{content + '\n'}
					{initialTypingCode + ' '}
				</code>
				<code className={`language-${language}`}>
					<span className='txt-rotate token string' data-rotate={JSON.stringify(typingCode)}></span>
					<i className='txt-cursor' data-owner='txt-rotate'></i>
				</code>
			</pre>
		</>
	);
}

export default TypingCodeBlock;
