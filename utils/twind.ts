import { IS_BROWSER } from '$fresh/runtime.ts';
import { Configuration, setup } from 'twind';

export * from 'twind';

export const config: Configuration = {
	mode: 'silent',
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				yellow: {
					'50': '#ffffe5',
					'100': '#ffffb7',
					'200': '#ffff89',
					'300': '#ffff5c',
					'400': '#ffff2e',
					'500': '#ffff00',
					'600': '#d2d300',
					'700': '#a6a600',
					'800': '#797a00',
					'900': '#4c4d00',
				},
				teal: {
					'50': '#ffffff',
					'100': '#e0fbf6',
					'200': '#c2f7ed',
					'300': '#a3f3e4',
					'400': '#85efdb',
					'500': '#66ebd2',
					'600': '#51d3bb',
					'700': '#3cbca4',
					'800': '#27a48c',
					'900': '#128c75',
				},
				lemon: {
					'50': '#ffffff',
					'100': '#fff8d2',
					'200': '#fff1a5',
					'300': '#ffe978',
					'400': '#ffe24b',
					'500': '#ffdb1e',
					'600': '#dabb17',
					'700': '#b59a0f',
					'800': '#8f7a08',
					'900': '#6a5900',
				},
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
