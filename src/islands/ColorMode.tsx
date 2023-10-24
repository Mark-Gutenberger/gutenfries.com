import { useEffect } from 'preact/hooks';
import { useSignal } from '@preact/signals';
import IconMoon from '@tabler/icons/moon.tsx';
import IconSun from '@tabler/icons/sun.tsx';

const modes = ['dark', 'light'] as const;

export default function ColorMode() {
	const initialTheme: (typeof modes)[number] | undefined = globalThis.localStorage.colorMode;
	const state = useSignal<(typeof modes)[number]>(initialTheme || 'light');

	function detectMode() {
		if (
			globalThis.localStorage.colorMode === 'dark' ||
			(!('colorMode' in globalThis.localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			state.value = 'dark';
		} else {
			document.documentElement.classList.remove('dark');
			state.value = 'light';
		}
	}

	function toggle() {
		state.value = modes[(modes.indexOf(state.value) + 1) % modes.length];

		globalThis.localStorage.colorMode = state.value;

		if (
			globalThis.localStorage.colorMode === 'dark' ||
			(!('colorMode' in globalThis.localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}

	useEffect(detectMode, []);

	return (
		<button
			type='button'
			className='focus:outline-none'
			onClick={toggle}
		>
			{state.value === 'dark'
				? <IconSun className='w-8 h-8 text-yellow-400' />
				: <IconMoon className='w-8 h-8 text-purple-600' />}
		</button>
	);
}
