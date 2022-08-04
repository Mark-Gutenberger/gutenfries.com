const theme: Record<string, string> = {};

// deno-lint-ignore prefer-const
let themeMode: string;

themeMode = 'dark';

// TODO(@gutenfries): figure out a way for deno to check for dark mode
// if (!window.matchMedia('(prefers-color-scheme: dark)').matches) {
// 	themeMode = 'light';
// }

switch (themeMode) {
	case 'dark':
		theme.theme = 'dark';
		theme.White = 'blue-50';
		theme.LightBlue = 'teal-500';
		theme.Black = 'gray-800';
		theme.Green = 'green-500';
		theme.Yellow = 'lemon-500';
		theme.Pink = 'red-300';
		break;

	case 'light':
		theme.theme = 'light';
		break;
}

export { theme };
