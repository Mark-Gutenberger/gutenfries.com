import { useEffect, useState } from 'preact/hooks';

import { asset } from '$fresh/runtime.ts';

interface TypingCodeBlockProps {
	lang: string;
	code: string;
	typingCode: string[];
}

const TypingCodeBlock = ({ lang, code, typingCode }: TypingCodeBlockProps) => {
	const TypingCode = ({ typingCode }: { typingCode: string[] }) => {
		const [typingIndex, setTypingIndex] = useState(0);
		const [typingPosition, setTypingPosition] = useState(0);
		const [isDeleting, setIsDeleting] = useState(false);
		const [isPaused, setIsPaused] = useState(false);

		useEffect(() => {
			const interval = setInterval(() => {
				if (!isPaused) {
					const currentTypingCode = typingCode[typingIndex];
					const typingLength = currentTypingCode.length;

					if (!isDeleting) {
						setTypingPosition((prevState) => prevState + 1);

						if (typingPosition === typingLength) {
							setIsPaused(true);
							setIsDeleting(true);
							setTimeout(() => setIsPaused(false), 1000);
						}
					} else {
						setTypingPosition((prevState) => prevState - 1);

						if (typingPosition === 0) {
							setTypingIndex((prevState) => (prevState + 1) % typingCode.length);
							setIsPaused(true);
							setIsDeleting(false);
							setTimeout(() => setIsPaused(false), 1000);
						}
					}
				}
			}, 100);

			return () => clearInterval(interval);
		}, [isDeleting, isPaused, typingIndex, typingPosition, typingCode]);

		return (
			<span className='token string'>
				{typingCode[typingIndex].substring(0, typingPosition)}
			</span>
		);
	};

	return (
		<pre className='text-xs sm:text-sm md:text-base w-full h-full'>
			<script src={asset('/js/prism.js')} />
			<link rel='stylesheet' href={asset('/styles/10x-dark.css')} />
			<code className={`language-${lang}`}>
				{code + ' '}
				<TypingCode typingCode={typingCode} />
			</code>
			<span className='token operator animate-ping'>|</span>
		</pre>
	);
};

export default TypingCodeBlock;
