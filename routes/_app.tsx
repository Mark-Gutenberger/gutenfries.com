import { PageProps } from '$fresh/server.ts';

export default function App({ Component /* state */ }: PageProps) {
	return (
		<>
			<link rel='stylesheet' href='/styles/tailwind.css' />
			<Component />
		</>
	);
}
