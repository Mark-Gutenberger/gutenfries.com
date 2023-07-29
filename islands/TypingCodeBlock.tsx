import { useEffect } from 'preact/hooks';

interface TypingCodeBlockProps {
	lang: string;
	code: string;
	typingCode: string[];
}

const TypingCodeBlock = ({ lang, code, typingCode }: TypingCodeBlockProps) => {
	/* const TypingCode = (typingCode: string[]): string => {
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

		return typingCode[typingIndex].substring(0, typingPosition);
	}; */
	const TypingCode = (typingCode: string[]) => {
		let typingIndex = 0;
		let typingPosition = 0;
		let isDeleting = false;
		let isPaused = false;

		const interval = setInterval(() => {
			if (!isPaused) {
				const currentTypingCode = typingCode[typingIndex];
				const typingLength = currentTypingCode.length;

				if (!isDeleting) {
					typingPosition++;

					if (typingPosition === typingLength) {
						isPaused = true;
						isDeleting = true;
						setTimeout(() => (isPaused = false), 1000);
					}
				} else {
					typingPosition--;

					if (typingPosition === 0) {
						typingIndex = (typingIndex + 1) % typingCode.length;
						isPaused = true;
						isDeleting = false;
						setTimeout(() => (isPaused = false), 1000);
					}
				}
			}
		}, 100);

		return () => {
			clearInterval(interval);
			return typingCode[typingIndex].substring(0, typingPosition);
		};
	};
	const typing = TypingCode(typingCode);

	useEffect(() => {
		// Print the typing animation every 100ms
		const interval = setInterval(() => {
			const el = document.getElementById('typing-code')!;
			const currentTyping = typing();
			if (currentTyping === typingCode[typingCode.length - 1]) {
				clearInterval(interval);
			}
			el.textContent = currentTyping;
		}, 100);
	}, []);

	return (
		<>
			<link
				rel='stylesheet'
				href='https://unpkg.com/@speed-highlight/core/dist/themes/atom-dark.css'
			/>
			<script type='module'>
				{`
					import { highlightAll } from 'https://unpkg.com/@speed-highlight/core/dist/index.js';
					highlightAll();
					`}
			</script>
			<div className={`text-xs sm:text-sm md:text-base w-full h-full shj-lang-${lang}`}>
				{code + ' '}
				<code id='typing-code' />
				<span className='shj-syn-oper animate-ping'>|</span>
			</div>
		</>
	);
};

export default TypingCodeBlock;
