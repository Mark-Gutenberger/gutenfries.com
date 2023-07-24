import { useEffect, useState } from 'preact/hooks';

import IconMoon from '@tabler/icons/moon.tsx';
import IconSun from '@tabler/icons/sun.tsx';

const Theme = () => {
	const [darkMode, setDarkMode] = useState<boolean>(true);

	useEffect(() => {
		// On page load or when changing themes, best to add inline in `head` to avoid FOUC
		// ONLY run this once
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			setDarkMode(true);
		} else {
			setDarkMode(false);
		}

		if (darkMode) {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
		}
	}, []);

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
		}
	}, [darkMode]);

	return (
		<a
			type='button'
			className='flex p-4 cursor-pointer justify-center items-center bg-gray-800 w-20 h-20'
			onClick={() => {
				setDarkMode(!darkMode);
			}}
		>
			{darkMode
				? (
					<IconMoon className='w-8 h-8 text-gray-200 active:text-purple-500 hover:text-purple-300' />
				)
				: (
					<IconSun className='w-8 h-8 text-gray-200 active:text-yellow-500 hover:text-yellow-300' />
				)}
		</a>
	);
};

export default Theme;
