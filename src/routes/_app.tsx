import { AppProps } from '$fresh/server.ts';

export default function App({ Component /* state */
}: AppProps) {
	// store theme in state var

	return (
		<div class='wrapper'>
			<Component />
		</div>
	);
}
