import { useEffect, useState } from 'preact/hooks';
import Icons from '@/utils/Icons.tsx';

const Theme = () => {
	const [theme, setTheme] = useState<'light' | 'dark' | 'system'>();
	const [sysTheme, setSysTheme] = useState<boolean>(true);
	const [isOpen, setIsOpen] = useState(false);

	function CheckTheme(): void {
		// On page load or when changing themes, best to add inline in `head` to avoid FOUC
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			setTheme('dark');
		} else {
			setTheme('light');
		}

		setSysTheme(true);
	}

	useEffect(() => {
		CheckTheme();
	}, []);

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
		} else if (theme === 'light') {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
		} else if (theme === 'system') {
			localStorage.removeItem('theme');
			CheckTheme();
		}
	}, [theme]);

	return (
		<div>
			{isOpen && (
				<>
					<a
						type='button'
						className='flex p-4 cursor-pointer justify-center items-center bg-gray-800 w-20 h-20'
						onClick={() => {
							setTheme('dark');
							setSysTheme(false);
							setIsOpen(false);
						}}
					>
						<Icons.Moon
							className={`w-8 h-8 text-gray-200 active:text-purple-500 ${
								theme === 'dark' ? 'text-purple-500' : ''
							}`}
						/>
					</a>
					<a
						type='button'
						className='flex p-4 cursor-pointer justify-center items-center bg-gray-800 w-20 h-20'
						onClick={() => {
							setTheme('light');
							setSysTheme(false);
							setIsOpen(false);
						}}
					>
						<Icons.Sun
							className={`w-8 h-8 text-gray-200 active:text-yellow-500 ${
								theme === 'light' ? 'text-yellow-500' : ''
							}`}
						/>
					</a>
					<a
						type='button'
						className='flex p-4 rounded-b-lg cursor-pointer justify-center items-center bg-gray-800 w-20 h-20'
						onClick={() => {
							setTheme('system');
							setSysTheme(true);
							setIsOpen(false);
						}}
					>
						<Icons.DesktopComputer
							className={`active:text-gray-500 w-8 h-8 text-gray-200 ${
								sysTheme === true ? 'text-gray-500' : ''
							}`}
						/>
					</a>
				</>
			)}
			{!isOpen && (
				<>
					<a
						type='button'
						className='flex p-4 cursor-pointer justify-center items-center bg-gray-800 w-20 h-20'
						onClick={() => {
							setIsOpen(true);
						}}
					>
						{theme === 'dark' && !sysTheme
							? (
								<Icons.Moon
									className={`w-8 h-8 text-gray-200 active:text-purple-500 ${
										theme === 'dark' ? 'text-purple-500' : ''
									}`}
								/>
							)
							: theme === 'light' && !sysTheme
							? (
								<Icons.Sun
									className={`w-8 h-8 text-gray-200 active:text-yellow-500 ${
										theme === 'light' ? 'text-yellow-500' : ''
									}`}
								/>
							)
							: (
								<Icons.DesktopComputer
									className={`active:text-gray-500 w-8 h-8 text-gray-200 ${
										sysTheme === true ? 'text-gray-500' : ''
									}`}
								/>
							)}
					</a>
				</>
			)}
		</div>
	);
};

export default Theme;
