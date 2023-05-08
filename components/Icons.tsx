import { JSX } from 'preact';

interface IconProps {
	className?: string;
	stroke?: string;
	fill?: string;
}

export const IconDesktopComputer = (_?: IconProps) => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Desktop Computer'
	>
		<title>Desktop Computer</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<rect x='3' y='4' width='18' height='12' rx='1'></rect>
		<line x1='7' y1='20' x2='17' y2='20'></line>
		<line x1='9' y1='16' x2='9' y2='20'></line>
		<line x1='15' y1='16' x2='15' y2='20'></line>
	</svg>
);

export const IconApp = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='App'
	>
		<title>App</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<rect x='3' y='5' width='18' height='14' rx='2'></rect>
		<path d='M6 8h.01'></path>
		<path d='M9 8h.01'></path>
	</svg>
);

export const IconExternalLink = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='External Link'
	>
		<title>External Link</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5'></path>
		<line x1='10' y1='14' x2='20' y2='4'></line>
		<polyline points='15 4 20 4 20 9'></polyline>
	</svg>
);

export const IconUser = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='User'
	>
		<title>User</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<circle cx='12' cy='7' r='4'></circle>
		<path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2'></path>
	</svg>
);

export const IconAccessibility = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Accessibility'
	>
		<title>Accessibility</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<circle cx='12' cy='12' r='9'></circle>
		<path d='M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1'></path>
		<circle cx='12' cy='7.5' r='.5' fill='currentColor'></circle>
	</svg>
);

export const IconMail = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Mail'
	>
		<title>Mail</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<rect x='3' y='5' width='18' height='14' rx='2'></rect>
		<polyline points='3 7 12 13 21 7'></polyline>
	</svg>
);

export const IconTwitter = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Twitter'
	>
		<title>Twitter</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z'>
		</path>
	</svg>
);

export const IconPeerlist = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Peerlist'
	>
		<title>Peerlist</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io) (modified)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<rect x='4' y='4' width='16' height='16' rx='5'></rect>
		<path d='M10 12h2a2 2 0 1 0 0 -4h-2v8'></path>
	</svg>
);

export const IconGithub = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Github'
	>
		<title>Github</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'>
		</path>
	</svg>
);

export const IconLinkedIn = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='LinkedIn'
	>
		<title>LinkedIn</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<rect x='4' y='4' width='16' height='16' rx='2'></rect>
		<line x1='8' y1='11' x2='8' y2='16'></line>
		<line x1='8' y1='8' x2='8' y2='8.01'></line>
		<line x1='12' y1='16' x2='12' y2='11'></line>
		<path d='M16 16v-3a2 2 0 0 0 -4 0'></path>
	</svg>
);

export const IconCodepen = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Codepen'
	>
		<title>Codepen</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M3 15l9 6l9 -6l-9 -6l-9 6'></path>
		<path d='M3 9l9 6l9 -6l-9 -6l-9 6'></path>
		<line x1='3' y1='9' x2='3' y2='15'></line>
		<line x1='21' y1='9' x2='21' y2='15'></line>
		<line x1='12' y1='3' x2='12' y2='9'></line>
		<line x1='12' y1='15' x2='12' y2='21'></line>
	</svg>
);

export const IconWakatime = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'none'}
		fill={_?.fill ?? 'currentColor'}
		viewBox='0 0 24 24'
		width={24}
		height={24}
		xmlns='http://www.w3.org/2000/svg'
		alt='Wakatime'
	>
		<title>Wakatime</title>
		<desc>
			source: [Font Awesome](https://fontawesomeicons.com/svg/icons/wakatime) (modified)
		</desc>
		<path d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.824a9.176 9.176 0 1 1 0 18.352 9.176 9.176 0 0 1 0-18.352zm5.097 5.058c-.327 0-.61.19-.764.45-1.025 1.463-2.21 3.162-3.288 4.706l-.387-.636a.897.897 0 0 0-.759-.439.901.901 0 0 0-.788.492l-.357.581-1.992-2.943a.897.897 0 0 0-.761-.446c-.514 0-.903.452-.903.96a1 1 0 0 0 .207.61l2.719 3.96c.152.272.44.47.776.47a.91.91 0 0 0 .787-.483c.046-.071.23-.368.314-.504l.324.52c-.035-.047.076.113.087.13.024.031.054.059.078.085.019.019.04.036.058.052.036.033.08.056.115.08.025.016.052.028.076.04.029.015.06.024.088.035.058.025.122.027.18.04.031.004.064.003.092.005.29 0 .546-.149.707-.36 1.4-2 2.842-4.055 4.099-5.849A.995.995 0 0 0 18 8.842c0-.508-.389-.96-.903-.96' />
	</svg>
);

export const IconLoader_1 = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Loading'
	>
		<title>Loading</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9'></path>
		<path d='M17 12a5 5 0 1 0 -5 5'></path>
	</svg>
);

export const IconLoader_2 = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Loading'
	>
		<title>Loading</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<line x1='12' y1='6' x2='12' y2='3'></line>
		<line x1='6' y1='12' x2='3' y2='12'></line>
		<line x1='7.75' y1='7.75' x2='5.6' y2='5.6'></line>
	</svg>
);

export const IconLoader_3 = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Loading'
	>
		<title>Loading</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<line x1='12' y1='6' x2='12' y2='3'></line>
		<line x1='16.25' y1='7.75' x2='18.4' y2='5.6'></line>
		<line x1='18' y1='12' x2='21' y2='12'></line>
		<line x1='16.25' y1='16.25' x2='18.4' y2='18.4'></line>
		<line x1='12' y1='18' x2='12' y2='21'></line>
		<line x1='7.75' y1='16.25' x2='5.6' y2='18.4'></line>
		<line x1='6' y1='12' x2='3' y2='12'></line>
		<line x1='7.75' y1='7.75' x2='5.6' y2='5.6'></line>
	</svg>
);

export const IconSearch = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Search'
	>
		<title>Search</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<circle cx='10' cy='10' r='7'></circle>
		<line x1='21' y1='21' x2='15' y2='15'></line>
	</svg>
);

export const IconClose = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Close'
	>
		<title>Close</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<line x1='18' y1='6' x2='6' y2='18'></line>
		<line x1='6' y1='6' x2='18' y2='18'></line>
	</svg>
);

export const IconBorderAll = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Border All'
	>
		<title>BorderAll</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<rect x='4' y='4' width='16' height='16' rx='2'></rect>
		<line x1='4' y1='12' x2='20' y2='12'></line>
		<line x1='12' y1='4' x2='12' y2='20'></line>
	</svg>
);

export const IconTerminal = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Terminal'
	>
		<title>Terminal</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M8 9l3 3l-3 3'></path>
		<line x1='13' y1='15' x2='16' y2='15'></line>
		<rect x='3' y='4' width='18' height='16' rx='2'></rect>
	</svg>
);

export const IconBlockQuote = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='BlockQuote'
	>
		<title>Block Quote</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none' />
		<path d='M6 15h15' />
		<path d='M21 19h-15' />
		<path d='M15 11h6' />
		<path d='M21 7h-6' />
		<path d='M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2' />
		<path d='M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2' />
	</svg>
);

export const IconInstagram = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Instagram'
	>
		<title>Instagram</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<rect x='4' y='4' width='16' height='16' rx='4'></rect>
		<circle cx='12' cy='12' r='3'></circle>
		<line x1='16.5' y1='7.5' x2='16.5' y2='7.501'></line>
	</svg>
);

export const IconFile = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='File'
	>
		<title>File</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M14 3v4a1 1 0 0 0 1 1h4'></path>
		<path d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z'>
		</path>
	</svg>
);

export const IconFileText = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='File Text'
	>
		<title>File Text</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M14 3v4a1 1 0 0 0 1 1h4'></path>
		<path d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z'>
		</path>
		<path d='M9 17h6'></path>
		<path d='M9 13h6'></path>
	</svg>
);

export const IconGitHub = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='GitHub'
	>
		<title>GitHub</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'>
		</path>
	</svg>
);

export const IconGooglePlay = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Google Play'
	>
		<title>Google Play</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M4 3.71v16.58a0.7 .7 0 0 0 1.05 .606l14.622 -8.42a0.55 .55 0 0 0 0 -.953l-14.622 -8.419a0.7 .7 0 0 0 -1.05 .607z'>
		</path>
		<line x1='15' y1='9' x2='4.5' y2='20.5'></line>
		<line x1='4.5' y1='3.5' x2='15' y2='15'></line>
	</svg>
);

export const IconVSCode = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='VSCode'
	>
		<title>VSCode</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M16 3v18l4 -2.5v-13z'></path>
		<path d='M9.165 13.903l-4.165 3.597l-2 -1l4.333 -4.5m1.735 -1.802l6.932 -7.198v5l-4.795 4.141'>
		</path>
		<path d='M16 16.5l-11 -10l-2 1l13 13.5'></path>
	</svg>
);

export const IconVisualStudio = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Visual Studio'
	>
		<title>Visual Studio</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M4 8l2 -1l10 13l4 -2v-12l-4 -2l-10 13l-2 -1z'></path>
	</svg>
);

export const IconPhone = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Phone'
	>
		<title>Phone</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2'>
		</path>
	</svg>
);

export const IconTikTok = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='TikTok'
	>
		<title>TikTok</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5'></path>
	</svg>
);

export const IconArticle = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Article'
	>
		<title>Article</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<rect x='3' y='4' width='18' height='16' rx='2'></rect>
		<path d='M7 8h10'></path>
		<path d='M7 12h10'></path>
		<path d='M7 16h10'></path>
	</svg>
);

export const IconCertificate = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Certificate'
	>
		<title>Certificate</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<circle cx='15' cy='15' r='3'></circle>
		<path d='M13 17.5v4.5l2 -1.5l2 1.5v-4.5'></path>
		<path d='M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73'>
		</path>
		<line x1='6' y1='9' x2='18' y2='9'></line>
		<line x1='6' y1='12' x2='9' y2='12'></line>
		<line x1='6' y1='15' x2='8' y2='15'></line>
	</svg>
);

export const IconFileCertificate = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='File Certificate'
	>
		<title>File Certificate</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M14 3v4a1 1 0 0 0 1 1h4'></path>
		<path d='M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5'></path>
		<circle cx='6' cy='14' r='3'></circle>
		<path d='M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5'></path>
	</svg>
);

export const IconSpotify = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Spotify'
	>
		<title>Spotify</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<circle cx='12' cy='12' r='9'></circle>
		<path d='M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527'></path>
		<path d='M9 15c1.5 -1 4 -1 5 .5'></path>
		<path d='M7 9c2 -1 6 -2 10 .5'></path>
	</svg>
);

export const IconTabler = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Tabler'
	>
		<title>Tabler</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M8 9l3 3l-3 3'></path>
		<line x1='13' y1='15' x2='16' y2='15'></line>
		<rect x='4' y='4' width='16' height='16' rx='4'></rect>
	</svg>
);

export const IconTailwind = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Tailwind'
	>
		<title>Tailwind</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z'>
		</path>
	</svg>
);

export const IconDeno = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Deno'
	>
		<title>Deno</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<circle cx='12' cy='12' r='9'></circle>
		<path d='M13.47 20.882l-1.47 -5.882c-2.649 -.088 -5 -1.624 -5 -3.5c0 -1.933 2.239 -3.5 5 -3.5s4 1 5 3c.024 .048 .69 2.215 2 6.5'>
		</path>
		<path d='M12 11h.01'></path>
	</svg>
);

export const IconWorld = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='World'
	>
		<title>World</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<circle cx='12' cy='12' r='9'></circle>
		<line x1='3.6' y1='9' x2='20.4' y2='9'></line>
		<line x1='3.6' y1='15' x2='20.4' y2='15'></line>
		<path d='M11.5 3a17 17 0 0 0 0 18'></path>
		<path d='M12.5 3a17 17 0 0 1 0 18'></path>
	</svg>
);

export const IconCalendar = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Calendar'
	>
		<title>Calendar</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<rect x='4' y='5' width='16' height='16' rx='2'></rect>
		<line x1='16' y1='3' x2='16' y2='7'></line>
		<line x1='8' y1='3' x2='8' y2='7'></line>
		<line x1='4' y1='11' x2='20' y2='11'></line>
		<line x1='11' y1='15' x2='12' y2='15'></line>
		<line x1='12' y1='15' x2='12' y2='18'></line>
	</svg>
);

export const IconReact = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='React'
	>
		<title>React</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102'>
		</path>
		<path d='M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102'>
		</path>
		<path d='M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -1.998'>
		</path>
		<path d='M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 1.999'>
		</path>
		<path d='M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896'>
		</path>
		<path d='M11.998 18.574c1.926 1.893 3.821 2.768 5.002 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897'>
		</path>
		<path d='M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z'></path>
	</svg>
);

export const IconCode = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Code'
	>
		<title>Code</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<polyline points='7 8 3 12 7 16'></polyline>
		<polyline points='17 8 21 12 17 16'></polyline>
		<line x1='14' y1='4' x2='10' y2='20'></line>
	</svg>
);

export const IconCookie = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Cookie'
	>
		<title>Cookie</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M8 13v.01'></path>
		<path d='M12 17v.01'></path>
		<path d='M12 12v.01'></path>
		<path d='M16 14v.01'></path>
		<path d='M11 8v.01'></path>
		<path d='M13.148 3.476l2.667 1.104a4 4 0 0 0 4.656 6.14l.053 .132a3 3 0 0 1 0 2.296c-.497 .786 -.838 1.404 -1.024 1.852c-.189 .456 -.409 1.194 -.66 2.216a3 3 0 0 1 -1.624 1.623c-1.048 .263 -1.787 .483 -2.216 .661c-.475 .197 -1.092 .538 -1.852 1.024a3 3 0 0 1 -2.296 0c-.802 -.503 -1.419 -.844 -1.852 -1.024c-.471 -.195 -1.21 -.415 -2.216 -.66a3 3 0 0 1 -1.623 -1.624c-.265 -1.052 -.485 -1.79 -.661 -2.216c-.198 -.479 -.54 -1.096 -1.024 -1.852a3 3 0 0 1 0 -2.296c.48 -.744 .82 -1.361 1.024 -1.852c.171 -.413 .391 -1.152 .66 -2.216a3 3 0 0 1 1.624 -1.623c1.032 -.256 1.77 -.476 2.216 -.661c.458 -.19 1.075 -.531 1.852 -1.024a3 3 0 0 1 2.296 0z'>
		</path>
	</svg>
);

export const IconPC = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='PC'
	>
		<title>PC</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M3 5h6v14h-6z'></path>
		<path d='M12 9h10v7h-10z'></path>
		<path d='M14 19h6'></path>
		<path d='M17 16v3'></path>
		<path d='M6 13v.01'></path>
		<path d='M6 16v.01'></path>
	</svg>
);

export const IconHistory = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='History'
	>
		<title>History</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<polyline points='12 8 12 12 14 14'></polyline>
		<path d='M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5'></path>
	</svg>
);

export const IconActivity = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Activity'
	>
		<title>Activity</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M3 12h4l3 8l4 -16l3 8h4'></path>
	</svg>
);

export const IconHome = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Home'
	>
		<title>Home</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<polyline points='5 12 3 12 12 3 21 12 19 12'></polyline>
		<path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7'></path>
		<path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6'></path>
	</svg>
);

export const IconFileDownload = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='File Download'
	>
		<title>File Download</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M14 3v4a1 1 0 0 0 1 1h4'></path>
		<path d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z'>
		</path>
		<path d='M12 17v-6'></path>
		<path d='M9.5 14.5l2.5 2.5l2.5 -2.5'></path>
	</svg>
);

export const IconRSS = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='RSS'
	>
		<title>RSS</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<circle cx='5' cy='19' r='1'></circle>
		<path d='M4 4a16 16 0 0 1 16 16'></path>
		<path d='M4 11a9 9 0 0 1 9 9'></path>
	</svg>
);

export const IconQuote = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Quote'
	>
		<title>Quote</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5'>
		</path>
		<path d='M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5'>
		</path>
	</svg>
);

export const IconChevronDown = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Chevron Down'
	>
		<title>Chevron Down</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<polyline points='6 9 12 15 18 9'></polyline>
	</svg>
);

export const IconChevronLeft = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Chevron Left'
	>
		<title>Chevron Left</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<polyline points='15 6 9 12 15 18'></polyline>
	</svg>
);

export const IconChevronRight = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Chevron Right'
	>
		<title>Chevron Right</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<polyline points='9 6 15 12 9 18'></polyline>
	</svg>
);

export const IconChevronUp = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Chevron Up'
	>
		<title>Chevron Up</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<polyline points='6 15 12 9 18 15'></polyline>
	</svg>
);

export const IconCircle = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Circle'
	>
		<title>Circle</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<circle cx='12' cy='12' r='9'></circle>
	</svg>
);

export const IconPackage = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Package'
	>
		<title>Package</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<polyline points='12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3'></polyline>
		<line x1='12' y1='12' x2='20' y2='7.5'></line>
		<line x1='12' y1='12' x2='12' y2='21'></line>
		<line x1='12' y1='12' x2='4' y2='7.5'></line>
		<line x1='16' y1='5.25' x2='8' y2='9.75'></line>
	</svg>
);

export const IconFlutter = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Flutter'
	>
		<title>Flutter</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M7 14l-3 -3l8 -8h6z'></path>
		<path d='M14 21l-5 -5l5 -5h5l-5 5l5 5z'></path>
	</svg>
);

export const IconDocker = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Docker'
	>
		<title>Docker</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M22 12.54c-1.804 -.345 -2.701 -1.08 -3.523 -2.94c-.487 .696 -1.102 1.568 -.92 2.4c.028 .238 -.32 1.002 -.557 1h-14c0 5.208 3.164 7 6.196 7c4.124 .022 7.828 -1.376 9.854 -5c1.146 -.101 2.296 -1.505 2.95 -2.46z'>
		</path>
		<path d='M5 10h3v3h-3z'></path>
		<path d='M8 10h3v3h-3z'></path>
		<path d='M11 10h3v3h-3z'></path>
		<path d='M8 7h3v3h-3z'></path>
		<path d='M11 7h3v3h-3z'></path>
		<path d='M11 4h3v3h-3z'></path>
		<path d='M4.571 18c1.5 0 2.047 -.074 2.958 -.78'></path>
		<line x1='10' y1='16' x2='10' y2='16.01'></line>
	</svg>
);

export const IconC = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='C'
	>
		<title>C</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M18 9a5 5 0 0 0 -5 -5h-2a5 5 0 0 0 -5 5v6a5 5 0 0 0 5 5h2a5 5 0 0 0 5 -5'>
		</path>
	</svg>
);

export const IconSun = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Sun'
	>
		<title>Sun</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<circle cx='12' cy='12' r='4'></circle>
		<path d='M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7'>
		</path>
	</svg>
);

export const IconMoon = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Moon'
	>
		<title>Moon</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z'>
		</path>
	</svg>
);

export const IconDiscord = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Discord'
	>
		<title>Discord</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0'></path>
		<path d='M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0'></path>
		<path d='M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l.975 1.923a11.913 11.913 0 0 1 4.053 0l.972 -1.923c1.5 .16 3.043 .485 4.5 1.5c2 5.667 2.167 9.833 1.5 11.5c-.667 1.333 -2 3 -3.5 3c-.5 0 -2 -2 -2 -3'>
		</path>
		<path d='M7 16.5c3.5 1 6.5 1 10 0'></path>
	</svg>
);

export const IconPointer = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Pointer'
	>
		<title>Pointer</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M7.904 17.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l4.907 4.907a1.067 1.067 0 0 0 1.509 0l1.047 -1.047a1.067 1.067 0 0 0 0 -1.509l-4.907 -4.907l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563z'>
		</path>
	</svg>
);

export const IconLamp = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Lamp'
	>
		<title>Lamp</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M5 21h9'></path>
		<path d='M10 21l-7 -8l8.5 -5.5'></path>
		<path d='M13 14c-2.148 -2.148 -2.148 -5.852 0 -8c2.088 -2.088 5.842 -1.972 8 0l-8 8z'>
		</path>
		<path d='M11.742 7.574l-1.156 -1.156a2 2 0 0 1 2.828 -2.829l1.144 1.144'></path>
		<path d='M15.5 12l.208 .274a2.527 2.527 0 0 0 3.556 0c.939 -.933 .98 -2.42 .122 -3.4l-.366 -.369'>
		</path>
	</svg>
);

export const IconWrench = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Wrench'
	>
		<title>Wrench</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5'>
		</path>
	</svg>
);

export const IconMedal = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Medal'
	>
		<title>Medal</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M12 4v3m-4 -3v6m8 -6v6'></path>
		<path d='M12 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z'></path>
	</svg>
);

export const IconShoe = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Shoe'
	>
		<title>Shoe</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M4 6h5.426a1 1 0 0 1 .863 .496l1.064 1.823a3 3 0 0 0 1.896 1.407l4.677 1.114a4 4 0 0 1 3.074 3.89v2.27a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1z'>
		</path>
		<path d='M14 13l1 -2'></path>
		<path d='M8 18v-1a4 4 0 0 0 -4 -4h-1'></path>
		<path d='M10 12l1.5 -3'></path>
	</svg>
);

export const IconRust = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Rust'
	>
		<title>Rust</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M10.139 3.463c.473 -1.95 3.249 -1.95 3.722 0a1.916 1.916 0 0 0 2.859 1.185c1.714 -1.045 3.678 .918 2.633 2.633a1.916 1.916 0 0 0 1.184 2.858c1.95 .473 1.95 3.249 0 3.722a1.916 1.916 0 0 0 -1.185 2.859c1.045 1.714 -.918 3.678 -2.633 2.633a1.916 1.916 0 0 0 -2.858 1.184c-.473 1.95 -3.249 1.95 -3.722 0a1.916 1.916 0 0 0 -2.859 -1.185c-1.714 1.045 -3.678 -.918 -2.633 -2.633a1.916 1.916 0 0 0 -1.184 -2.858c-1.95 -.473 -1.95 -3.249 0 -3.722a1.916 1.916 0 0 0 1.185 -2.859c-1.045 -1.714 .918 -3.678 2.633 -2.633a1.914 1.914 0 0 0 2.858 -1.184z'>
		</path>
		<path d='M8 12h6a2 2 0 1 0 0 -4h-6v8v-4z'></path>
		<path d='M19 16h-2a2 2 0 0 1 -2 -2a2 2 0 0 0 -2 -2h-1'></path>
		<path d='M9 8h-4'></path>
		<path d='M5 16h4'></path>
	</svg>
);

export const IconStack = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Stack'
	>
		<title>Stack</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M12 6l-8 4l8 4l8 -4l-8 -4'></path>
		<path d='M4 14l8 4l8 -4'></path>
	</svg>
);

export const IconLeetCode = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='LeetCode'
	>
		<title>LeetCode</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M12 13h7.5'></path>
		<path d='M9.424 7.268l4.999 -4.999'></path>
		<path d='M16.633 16.644l-2.402 2.415a3.189 3.189 0 0 1 -4.524 0l-3.77 -3.787a3.223 3.223 0 0 1 0 -4.544l3.77 -3.787a3.189 3.189 0 0 1 4.524 0l2.302 2.313'>
		</path>
	</svg>
);

export const IconCPP = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='C++'
	>
		<title>C++</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M18 12h4'></path>
		<path d='M20 10v4'></path>
		<path d='M11 12h4'></path>
		<path d='M13 10v4'></path>
		<path d='M9 9a3 3 0 0 0 -3 -3h-.5a3.5 3.5 0 0 0 -3.5 3.5v5a3.5 3.5 0 0 0 3.5 3.5h.5a3 3 0 0 0 3 -3'>
		</path>
	</svg>
);

export const IconAmongUs = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Among Us'
	>
		<title>Among Us</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M10.646 12.774c-1.939 .396 -4.467 .317 -6.234 -.601c-2.454 -1.263 -1.537 -4.66 1.423 -4.982c2.254 -.224 3.814 -.354 5.65 .214c.835 .256 1.93 .569 1.355 3.281c-.191 1.067 -1.07 1.904 -2.194 2.088z'>
		</path>
		<path d='M5.84 7.132c.083 -.564 .214 -1.12 .392 -1.661c.456 -.936 1.095 -2.068 3.985 -2.456a22.464 22.464 0 0 1 2.867 .08c1.776 .14 2.643 1.234 3.287 3.368c.339 1.157 .46 2.342 .629 3.537v11l-12.704 -.019c-.552 -2.386 -.262 -5.894 .204 -8.481'>
		</path>
		<path d='M17 10c.991 .163 2.105 .383 3.069 .67c.255 .13 .52 .275 .534 .505c.264 3.434 .57 7.448 .278 9.825h-3.881'>
		</path>
	</svg>
);

export const IconSlice = (_?: IconProps): JSX.Element => (
	<svg
		className={_?.className ?? undefined}
		stroke={_?.stroke ?? 'currentColor'}
		fill={_?.fill ?? 'none'}
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		stroke-width='2'
		stroke-linecap='round'
		stroke-linejoin='round'
		alt='Slice'
	>
		<title>Slice</title>
		<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M3 19l15 -15l3 3l-6 6l2 2a14 14 0 0 1 -14 4'></path>
	</svg>
);
