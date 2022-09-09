import { IS_BROWSER } from '$fresh/runtime.ts';
import { Configuration, setup } from 'twind';
import * as colors from 'twind/colors';

export * from 'twind';

export const config: Configuration = {
	mode: 'silent',
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'transparent': 'transparent',
				'current': 'currentColor',
				'amber': colors.amber,
				'black': colors.black,
				'blue': colors.blue,
				'blueGray': colors.blueGray,
				'coolGray': colors.coolGray,
				'cyan': colors.cyan,
				'emerald': colors.emerald,
				'fuchsia': colors.fuchsia,
				'gray': colors.gray,
				'green': colors.green,
				'indigo': colors.indigo,
				'lightBlue': colors.lightBlue,
				'lime': colors.lime,
				'orange': colors.orange,
				'pink': colors.pink,
				'purple': colors.purple,
				'red': colors.red,
				'rose': colors.rose,
				'sky': colors.sky,
				'teal': colors.teal,
				'trueGray': colors.trueGray,
				'violet': colors.violet,
				'warmGray': colors.warmGray,
				'white': colors.white,
				'yellow': colors.yellow,
			},
			fontFamily: {
				rounded: ['Nunito', 'sans-serif'],
			},
			borderWidth: {
				DEFAULT: '1px',
				'0': '0',
				'2': '2px',
				'3': '3px',
				'4': '4px',
				'6': '6px',
				'8': '8px',
			},
		},
	},
};

if (IS_BROWSER) setup(config);
