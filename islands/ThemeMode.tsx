import { IS_BROWSER } from '$fresh/runtime.ts';

import IconMoon from '@tabler/icons/moon.tsx';
import IconSun from '@tabler/icons/sun.tsx';
import { useSignal } from '@preact/signals';
import { useEffect } from 'preact/hooks';
import { JSX } from 'preact/jsx-runtime';

export const modes = ['dark', 'light'] as const;

export default function ThemeMode(): JSX.Element {
	const state = useSignal<(typeof modes)[number]>('light');

	/**
	 * Toggles the color mode.
	 * @param themeMode - Explicitly set a color mode.
	 * @returns The next color mode.
	 */
	function setThemeMode(themeMode: typeof modes[number]): typeof modes[number] {
		switch (themeMode) {
			case 'dark':
				document.documentElement.classList.add('dark');
				break;
			case 'light':
				document.documentElement.classList.remove('dark');
				break;
		}

		state.value = themeMode;
		globalThis.localStorage.theme = themeMode;

		return themeMode;
	}

	/**
	 * Detects the color mode based on the user's preference or the system's default.
	 * @returns The detected color mode ('dark' or 'light').
	 */
	function detectThemeMode(): typeof modes[number] {
		if (
			globalThis.localStorage.theme === 'dark' ||
			(!('theme' in globalThis.localStorage) &&
				globalThis.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			state.value = 'dark';
			document.documentElement.classList.add('dark');
			return 'dark' as typeof modes[number];
		} else {
			state.value = 'light';
			document.documentElement.classList.remove('dark');
			return 'light' as typeof modes[number];
		}
	}

	useEffect(() => {
		setThemeMode(detectThemeMode());
	}, []);

	if (!IS_BROWSER) return <button />;
	return (
		<button
			type='button'
			className='transition focus:outline-none block relative bg-gray-200 dark:bg-gray-800 mx-3 p-3 rounded-md cursor-pointer overflow-hidden group'
			onClick={() =>
				setThemeMode(
					state.value === 'dark' ? 'light' : 'dark',
				)}
		>
			<span
				className={'dark:bg-gray-200 bg-gray-800 absolute w-52 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 top-1/2 group-hover:h-52 group-hover:-translate-y-32 ease'}
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
