import { asset } from '$fresh/runtime.ts';
import IconDirectionsOff from '@tabler/icons/directions-off.tsx';

function NotFoundPage() {
	return (
		<section>
			<link
				rel='stylesheet'
				href={asset('/styles/animations/glitch.css')}
			/>

			<span>
				<h1>Error 404:</h1>
				<h2>Error 404:</h2>
				<h2>Error 404:</h2>
			</span>
			<br />
			<br />
			<span>
				<h3>Not Found</h3>
				<h3>Not Found</h3>
				<h3>Not Found</h3>
			</span>
			<br />
			<br />
			<br />
			<br />
			<span className='relative flex justify-center items-center'>
				<h4 className='z-10 absolute'>
					<i>
						<IconDirectionsOff size={64} />
					</i>
				</h4>
				<h4 className='z-20 absolute'>
					<i>
						<IconDirectionsOff size={64} />
					</i>
				</h4>
				<h4 className='z-30 absolute'>
					<i>
						<IconDirectionsOff size={64} />
					</i>
				</h4>
			</span>
		</section>
	);
}

export default NotFoundPage;
