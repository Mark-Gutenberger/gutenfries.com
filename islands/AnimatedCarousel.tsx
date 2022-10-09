/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';
import { useState } from 'preact/hooks';

interface AnimatedCarouselProps {
	idk?: string;
}

function AnimatedCarousel({}: AnimatedCarouselProps) {
	const [current, setCurrent] = useState(0);

	return (
		<>
			<i />
		</>
	);
}

export default AnimatedCarousel;
