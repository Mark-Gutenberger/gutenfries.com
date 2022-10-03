import { Options } from '$fresh/plugins/twind.ts';
import * as colors from 'twind/colors';

export default {
	selfURL: import.meta.url,
	mode: 'silent',
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
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' },
				},
				'animate-gradient': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
			},
			animation: {
				'fade-in-0.5': 'fade-in 0.5s ease-in-out',
				'fade-out-0.5': 'fade-out 0.5s ease-in-out',
				'fade-in-1': 'fade-in 1s ease-in-out',
				'fade-out-1': 'fade-out 1s ease-in-out',
				'fade-in-1.5': 'fade-in 1.5s ease-in-out',
				'fade-out-1.5': 'fade-out 1.5s ease-in-out',
				'fade-in-2': 'fade-in 2s ease-in-out',
				'fade-out-2': 'fade-out 2s ease-in-out',
				'fade-in-2.5': 'fade-in 2.5s ease-in-out',
				'fade-out-2.5': 'fade-out 2.5s ease-in-out',
				'fade-in-3': 'fade-in 3s ease-in-out',
				'fade-out-3': 'fade-out 3s ease-in-out',
				'gradient-background': 'animate-gradient 3s ease infinite',
			},
		},
	},
} as Options;

export * from 'twind';
