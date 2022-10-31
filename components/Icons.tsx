interface IconProps {
	className?: string;
	stroke?: string;
	fill?: string;
}

class Icons {
	static App = (_: IconProps) => {
		return (
			<svg
				className={_.className ?? undefined}
				stroke={_.stroke ?? 'currentColor'}
				fill={_.fill ?? 'none'}
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
				<desc>source: [Tabler Icons](https://tablericons.com/)</desc>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<rect x='3' y='5' width='18' height='14' rx='2'></rect>
				<path d='M6 8h.01'></path>
				<path d='M9 8h.01'></path>
			</svg>
		);
	};

	static ExternalLink = (_: IconProps) => {
		return (
			<svg
				className={_.className ?? undefined}
				stroke={_.stroke ?? 'currentColor'}
				fill={_.fill ?? 'none'}
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
				<desc>source: [Tabler Icons](https://tablericons.com/)</desc>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<path d='M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5'></path>
				<line x1='10' y1='14' x2='20' y2='4'></line>
				<polyline points='15 4 20 4 20 9'></polyline>
			</svg>
		);
	};

	static User = (_: IconProps) => {
		return (
			<svg
				className={_.className ?? undefined}
				stroke={_.stroke ?? 'currentColor'}
				fill={_.fill ?? 'none'}
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
				<desc>source: [Tabler Icons](https://tablericons.com/)</desc>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<circle cx='12' cy='7' r='4'></circle>
				<path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2'></path>
			</svg>
		);
	};

	static Accessibility = (_: IconProps) => {
		return (
			<svg
				className={_.className ?? undefined}
				stroke={_.stroke ?? 'currentColor'}
				fill={_.fill ?? 'none'}
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
				<desc>source: [Tabler Icons](https://tablericons.com/)</desc>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<circle cx='12' cy='12' r='9'></circle>
				<path d='M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1'></path>
				<circle cx='12' cy='7.5' r='.5' fill='currentColor'></circle>
			</svg>
		);
	};

	static Mail = (_: IconProps) => {
		return (
			<svg
				className={_.className ?? undefined}
				stroke={_.stroke ?? 'currentColor'}
				fill={_.fill ?? 'none'}
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
				<desc>source: [Tabler Icons](https://tablericons.com/)</desc>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<rect x='3' y='5' width='18' height='14' rx='2'></rect>
				<polyline points='3 7 12 13 21 7'></polyline>
			</svg>
		);
	};

	static Twitter = (_: IconProps) => {
		return (
			<svg
				className={_.className ?? undefined}
				stroke={_.stroke ?? 'currentColor'}
				fill={_.fill ?? 'none'}
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
				<desc>source: [Tabler Icons](https://tablericons.com/)</desc>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<path d='M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z'>
				</path>
			</svg>
		);
	};

	static Peerlist = (_: IconProps) => {
		return (
			<svg
				className={_.className ?? undefined}
				stroke={_.stroke ?? 'currentColor'}
				fill={_.fill ?? 'none'}
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
				<desc>source: [Tabler Icons](https://tablericons.com/) (modified)</desc>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<rect x='4' y='4' width='16' height='16' rx='5'></rect>
				<path d='M10 12h2a2 2 0 1 0 0 -4h-2v8'></path>
			</svg>
		);
	};

	static Github = (_: IconProps) => {
		return (
			<svg
				className={_.className ?? undefined}
				stroke={_.stroke ?? 'currentColor'}
				fill={_.fill ?? 'none'}
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
				<desc>source: [Tabler Icons](https://tablericons.com/)</desc>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'>
				</path>
			</svg>
		);
	};

	static LinkedIn = (_: IconProps) => {
		return (
			<svg
				className={_.className ?? undefined}
				stroke={_.stroke ?? 'currentColor'}
				fill={_.fill ?? 'none'}
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
				<desc>source: [Tabler Icons](https://tablericons.com/)</desc>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<rect x='4' y='4' width='16' height='16' rx='2'></rect>
				<line x1='8' y1='11' x2='8' y2='16'></line>
				<line x1='8' y1='8' x2='8' y2='8.01'></line>
				<line x1='12' y1='16' x2='12' y2='11'></line>
				<path d='M16 16v-3a2 2 0 0 0 -4 0'></path>
			</svg>
		);
	};

	static Codepen = (_: IconProps) => {
		return (
			<svg
				className={_.className ?? undefined}
				stroke={_.stroke ?? 'currentColor'}
				fill={_.fill ?? 'none'}
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
				<desc>source: [Tabler Icons](https://tablericons.com/)</desc>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<path d='M3 15l9 6l9 -6l-9 -6l-9 6'></path>
				<path d='M3 9l9 6l9 -6l-9 -6l-9 6'></path>
				<line x1='3' y1='9' x2='3' y2='15'></line>
				<line x1='21' y1='9' x2='21' y2='15'></line>
				<line x1='12' y1='3' x2='12' y2='9'></line>
				<line x1='12' y1='15' x2='12' y2='21'></line>
			</svg>
		);
	};

	static Wakatime = (_: IconProps) => {
		return (
			<svg
				className={_.className ?? undefined}
				stroke={_.stroke ?? 'none'}
				fill={_.fill ?? 'currentColor'}
				viewBox='0 0 24 24'
				width={24}
				height={24}
				xmlns='http://www.w3.org/2000/svg'
				alt='Wakatime'
			>
				<title>Wakatime</title>
				<desc>
					source: [Font Awesome](https://fontawesomeicons.com/svg/icons/wakatime)
					(modified)
				</desc>
				<path d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.824a9.176 9.176 0 1 1 0 18.352 9.176 9.176 0 0 1 0-18.352zm5.097 5.058c-.327 0-.61.19-.764.45-1.025 1.463-2.21 3.162-3.288 4.706l-.387-.636a.897.897 0 0 0-.759-.439.901.901 0 0 0-.788.492l-.357.581-1.992-2.943a.897.897 0 0 0-.761-.446c-.514 0-.903.452-.903.96a1 1 0 0 0 .207.61l2.719 3.96c.152.272.44.47.776.47a.91.91 0 0 0 .787-.483c.046-.071.23-.368.314-.504l.324.52c-.035-.047.076.113.087.13.024.031.054.059.078.085.019.019.04.036.058.052.036.033.08.056.115.08.025.016.052.028.076.04.029.015.06.024.088.035.058.025.122.027.18.04.031.004.064.003.092.005.29 0 .546-.149.707-.36 1.4-2 2.842-4.055 4.099-5.849A.995.995 0 0 0 18 8.842c0-.508-.389-.96-.903-.96' />
			</svg>
		);
	};

	static Loader_1 = (_: IconProps) => {
		return (
			<svg
				className={_.className ?? undefined}
				stroke={_.stroke ?? 'currentColor'}
				fill={_.fill ?? 'none'}
				xmlns='http://www.w3.org/2000/svg'
				width={24}
				height={24}
				viewBox='0 0 24 24'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
				alt='Loader_1'
			>
				<title>Loader_1</title>
				<desc>source: [Tabler Icons](https://tablericons.com/)</desc>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<path d='M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9'></path>
				<path d='M17 12a5 5 0 1 0 -5 5'></path>
			</svg>
		);
	};

	static Loader_2 = (_: IconProps) => {
		return (
			<svg
				className={_.className ?? undefined}
				stroke={_.stroke ?? 'currentColor'}
				fill={_.fill ?? 'none'}
				xmlns='http://www.w3.org/2000/svg'
				width={24}
				height={24}
				viewBox='0 0 24 24'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
				alt='Loader_2'
			>
				<title>Loader_2</title>
				<desc>source: [Tabler Icons](https://tablericons.com/)</desc>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<line x1='12' y1='6' x2='12' y2='3'></line>
				<line x1='6' y1='12' x2='3' y2='12'></line>
				<line x1='7.75' y1='7.75' x2='5.6' y2='5.6'></line>
			</svg>
		);
	};

	static Loader_3 = (_: IconProps) => {
		return (
			<svg
				className={_.className ?? undefined}
				stroke={_.stroke ?? 'currentColor'}
				fill={_.fill ?? 'none'}
				xmlns='http://www.w3.org/2000/svg'
				width={24}
				height={24}
				viewBox='0 0 24 24'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
				alt='Loader_3'
			>
				<title>Loader_3</title>
				<desc>source: [Tabler Icons](https://tablericons.com/)</desc>
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
	};

	static Search = (_: IconProps) => {
		return (
			<svg
				className={_.className ?? undefined}
				stroke={_.stroke ?? 'currentColor'}
				fill={_.fill ?? 'none'}
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
				<desc>source: [Tabler Icons](https://tablericons.com/)</desc>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<circle cx='10' cy='10' r='7'></circle>
				<line x1='21' y1='21' x2='15' y2='15'></line>
			</svg>
		);
	};

	static Close = (_: IconProps) => {
		return (
			<svg
				className={_.className ?? undefined}
				stroke={_.stroke ?? 'currentColor'}
				fill={_.fill ?? 'none'}
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
				<desc>source: [Tabler Icons](https://tablericons.com/)</desc>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<line x1='18' y1='6' x2='6' y2='18'></line>
				<line x1='6' y1='6' x2='18' y2='18'></line>
			</svg>
		);
	};

	static BorderAll = (_: IconProps) => {
		return (
			<svg
				className={_.className ?? undefined}
				stroke={_.stroke ?? 'currentColor'}
				fill={_.fill ?? 'none'}
				xmlns='http://www.w3.org/2000/svg'
				width={24}
				height={24}
				viewBox='0 0 24 24'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
				alt='BorderAll'
			>
				<title>BorderAll</title>
				<desc>source: [Tabler Icons](https://tablericons.com/)</desc>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<rect x='4' y='4' width='16' height='16' rx='2'></rect>
				<line x1='4' y1='12' x2='20' y2='12'></line>
				<line x1='12' y1='4' x2='12' y2='20'></line>
			</svg>
		);
	};

	static Terminal = (_: IconProps) => {
		return (
			<svg
				className={_.className ?? undefined}
				stroke={_.stroke ?? 'currentColor'}
				fill={_.fill ?? 'none'}
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
				<desc>source: [Tabler Icons](https://tablericons.com/)</desc>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<path d='M8 9l3 3l-3 3'></path>
				<line x1='13' y1='15' x2='16' y2='15'></line>
				<rect x='3' y='4' width='18' height='16' rx='2'></rect>
			</svg>
		);
	};
}

export default Icons;
