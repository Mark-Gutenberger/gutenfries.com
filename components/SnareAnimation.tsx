import { asset } from '$fresh/runtime.ts';

const SnareAnimation = () => {
	return (
		<>
			<link
				rel='stylesheet'
				href={asset('/styles/animations/drum.css')}
			/>

			<div className='flex justify-center items-center mt-12'>
				<div className='left-stick'>
					<img
						className='z-10 select-none'
						src={asset('/images/snare-animation-resources/stick.svg')}
						style={{ transform: 'scaleX(-1)' }}
						alt='left hand stick'
					/>
				</div>

				<div className='right-stick'>
					<img
						className='z-10 select-none'
						src={asset('/images/snare-animation-resources/stick.svg')}
						alt='left hand stick'
					/>
				</div>
			</div>
			<div className='z-20 flex justify-center mx-16 sm:mx-0 mt-4 mb-12'>
				<img
					className='z-20 select-none'
					src={asset('/images/snare-animation-resources/snare-drum.svg')}
					alt='snare drum'
				/>
			</div>
		</>
	);
};

export { SnareAnimation };
