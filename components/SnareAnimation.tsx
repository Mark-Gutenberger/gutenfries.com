import { asset } from '$fresh/runtime.ts';

const SnareAnimation = () => {
	return (
		<>
			<link
				rel='stylesheet'
				href={asset('/styles/snare-animation.css')}
			/>

			<div className='sm:pt-24 pt-0 pb-1 flex flex-col justify-center bg-gray-800 rounded-lg w-full h-full'>
				<div className='mt-12 flex justify-center items-center'>
					<div class='left-stick'>
						<img
							className='select-none z-10'
							src={asset('/images/snare-animation-resources/stick.svg')}
							style={{ transform: 'scaleX(-1)' }}
							alt='left hand stick'
						/>
					</div>

					<div class='right-stick'>
						<img
							className='select-none z-10'
							src={asset('/images/snare-animation-resources/stick.svg')}
							alt='left hand stick'
						/>
					</div>
				</div>
				<div className='z-20 sm:mx-0 mx-16 mb-12  mt-4 flex justify-center'>
					<img
						className='select-none z-20'
						src={asset('/images/snare-animation-resources/snare-drum.svg')}
						alt='snare drum'
					/>
				</div>
			</div>
		</>
	);
};

export { SnareAnimation };
