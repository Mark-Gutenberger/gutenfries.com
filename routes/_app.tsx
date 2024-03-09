import { PageProps } from '$fresh/server.ts';
import { useEffect } from 'preact/hooks';
import { modes } from '@/islands/ThemeMode.tsx';
import { useSignal } from '@preact/signals';

export default function App({ Component /* state */ }: PageProps) {
	return (
		<>
			<link rel='stylesheet' href='/styles/tailwind.css' />
			<Component />
		</>
	);
}
