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
				<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
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
				<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
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
				<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
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
				<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
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
				<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
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
				<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
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
				<desc>source: [Tabler Icons](https://tabler-icons.io) (modified)</desc>
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
				<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
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
				<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
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
				alt='Loading'
			>
				<title>Loading</title>
				<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
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
				<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
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
				<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
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
				<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<path d='M8 9l3 3l-3 3'></path>
				<line x1='13' y1='15' x2='16' y2='15'></line>
				<rect x='3' y='4' width='18' height='16' rx='2'></rect>
			</svg>
		);
	};

	static BlockQuote = (_: IconProps) => {
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
	};

	static Instagram = (_: IconProps) => {
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
	};

	static File = (_: IconProps) => {
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
	};

	static FileText = (_: IconProps) => {
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
	};

	static GitHub = (_: IconProps) => {
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
				alt='GitHub'
			>
				<title>GitHub</title>
				<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'>
				</path>
			</svg>
		);
	};

	static GooglePlay = (_: IconProps) => {
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
	};

	static VSCode = (_: IconProps) => {
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
	};

	static VisualStudio = (_: IconProps) => {
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
				alt='Visual Studio'
			>
				<title>Visual Studio</title>
				<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<path d='M4 8l2 -1l10 13l4 -2v-12l-4 -2l-10 13l-2 -1z'></path>
			</svg>
		);
	};

	static Phone = (_: IconProps) => {
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
				alt='Phone'
			>
				<title>Phone</title>
				<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<path d='M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2'>
				</path>
			</svg>
		);
	};

	static TikTok = (_: IconProps) => {
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
				alt='TikTok'
			>
				<title>TikTok</title>
				<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<path d='M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5'></path>
			</svg>
		);
	};

	static Article = (_: IconProps) => {
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
	};

	static Certificate = (_: IconProps) => {
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
	};

	static FileCertificate = (_: IconProps) => {
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
	};

	static Spotify = (_: IconProps) => {
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
	};

	static Tabler = (_: IconProps) => {
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
	};

	static Tailwind = (_: IconProps) => {
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
				alt='Tailwind'
			>
				<title>Tailwind</title>
				<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<path d='M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z'>
				</path>
			</svg>
		);
	};

	static Deno = (_: IconProps) => {
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
	};

	static World = (_: IconProps) => {
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
	};

	static Calendar = (_: IconProps) => {
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
	};

	static React = (_: IconProps) => {
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
	};

	static Code = (_: IconProps) => {
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
	};

	static Cookie = (_: IconProps) => {
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
	};

	static PC = (_: IconProps) => {
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
	};

	static History = (_: IconProps) => {
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
				alt='History'
			>
				<title>History</title>
				<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<polyline points='12 8 12 12 14 14'></polyline>
				<path d='M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5'></path>
			</svg>
		);
	};

	static Activity = (_: IconProps) => {
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
				alt='Activity'
			>
				<title>Activity</title>
				<desc>source: [Tabler Icons](https://tabler-icons.io)</desc>
				<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
				<path d='M3 12h4l3 8l4 -16l3 8h4'></path>
			</svg>
		);
	};

	static Home = (_: IconProps) => {
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
	};

	static FileDownload = (_: IconProps) => {
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
	};

	static RSS = (_: IconProps) => {
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
	};
}

export default Icons;
