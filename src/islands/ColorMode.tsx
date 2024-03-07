import { useEffect } from 'preact/hooks';
import { useSignal } from '@preact/signals';
import IconMoon from '@tabler/icons/moon.tsx';
import IconSun from '@tabler/icons/sun.tsx';
import { classNames } from '@/src/utils/classNames.ts';

const modes = ['dark', 'light'] as const;

export default function ColorMode() {
	const state = useSignal<(typeof modes)[number]>('light');

	function detectColorMode() {
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

	function toggleColorMode() {
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

	useEffect(detectColorMode, []);

	return (
		<button
			type='button'
			className='focus:outline-none dark:bg-gray-800 bg-gray-200 rounded-md p-3 mx-3 block overflow-hidden relative group cursor-pointer'
			onClick={toggleColorMode}
		>
			<span
				className={classNames(
					state.value === 'dark' ? 'bg-gray-200' : 'bg-gray-800',
					'absolute w-52 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 top-1/2 group-hover:h-52 group-hover:-translate-y-32 ease',
				)}
			/>
			<span
				className={'relative transition duration-300 ease'}
			>
				{state.value === 'dark'
					? <IconSun className='w-8 h-8 text-yellow-400' />
					: <IconMoon className='w-8 h-8 text-purple-700' />}
			</span>
		</button>
	);
}
