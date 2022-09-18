/** @jsx h */
import { h } from 'preact';

function SocialLinks() {
	return (
		<div className='bg-opacity-20 bg-gray-500 px-2.5 rounded-md m-2.5 flex flex-row justify-center'>
			<a
				className='mx-1.5 outline-none text-gray-300 hover:bg-purple-700 hover:shadow-2xl hover:text-white p-2.5 rounded-md text-3xl'
				href='mailto:gutenfries@gmail.com'
				target='_blank'
				rel='noopener noreferrer'
			>
				<svg
					name='Mail'
					fill='currentColor'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					width='24'
					height='24'
				>
					<path
						fill-rule='evenodd'
						d='M1.75 3A1.75 1.75 0 000 4.75v14c0 .966.784 1.75 1.75 1.75h20.5A1.75 1.75 0 0024 18.75v-14A1.75 1.75 0 0022.25 3H1.75zM1.5 4.75a.25.25 0 01.25-.25h20.5a.25.25 0 01.25.25v.852l-10.36 7a.25.25 0 01-.28 0l-10.36-7V4.75zm0 2.662V18.75c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0L1.5 7.412z'
					>
					</path>
				</svg>
			</a>
			<a
				className='mx-1.5 outline-none text-gray-300 hover:bg-blue-500 hover:shadow-2xl hover:text-white p-2.5 rounded-md text-3xl'
				href='https://twitter.com/gutenfries'
				target='_blank'
				rel='noopener noreferrer'
			>
				<svg
					name='Twitter'
					fill='currentColor'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					width='24'
					height='24'
				>
					<path
						fill-rule='evenodd'
						d='M22.5 5.25a8.75 8.75 0 01-2.5.68 4.38 4.38 0 001.92-2.4 8.73 8.73 0 01-2.75 1.05 4.38 4.38 0 00-7.5 3.98 12.4 12.4 0 01-9-4.5 4.38 4.38 0 001.35 5.85 4.34 4.34 0 01-2-.55v.06a4.38 4.38 0 003.55 4.3 4.4 4.4 0 01-2 .08 4.38 4.38 0 004.08 3.03 8.8 8.8 0 01-5.5 1.9 12.4 12.4 0 006.5 1.9c7.8 0 12.1-6.5 12.1-12.1 0-.18 0-.36-.02-.54a8.85 8.85 0 002.17-2.25l-.01-.01z'
					>
					</path>
				</svg>
			</a>
			<a
				className='mx-1.5 outline-none text-gray-300 hover:bg-green-700 hover:shadow-2xl hover:text-white p-2.5 rounded-md text-3xl'
				href='peerlist.io/gutenfries'
				target='_blank'
				rel='noopener noreferrer'
			>
				<svg
					width='24'
					height='24'
					fill='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fill-rule='evenodd'
						d='m3.11 3.11c-1.57 1.57-2.25 4.25-2.25 8.89 0 4.65 0.682 7.33 2.25 8.89 1.57 1.57 4.25 2.25 8.89 2.25 4.65 0 7.32-0.68 8.89-2.25s2.25-4.25 2.25-8.89c0-4.65-0.682-7.33-2.25-8.89-1.57-1.57-4.25-2.25-8.89-2.25-4.65 0-7.33 0.68-8.89 2.25zm-3.11 8.89c0-9.33 2.67-12 12-12s12 2.67 12 12-2.67 12-12 12-12-2.67-12-12z'
					/>
					<path
						fill-rule='evenodd'
						d='m7.29 4.71h5.18c3.28 0 5.97 2.56 5.97 5.76s-2.69 5.76-5.97 5.76h-1.15v3.05h-4.02zm0.857 0.857v12.9h2.31v-3.05h2.01c2.84 0 5.11-2.21 5.11-4.9s-2.27-4.9-5.11-4.9zm2.31 2.19h2.01c1.53 0 2.8 1.2 2.8 2.71s-1.27 2.71-2.8 2.71h-2.01zm0.857 0.857v3.71h1.15c1.09 0 1.95-0.847 1.95-1.86 0-1.01-0.855-1.86-1.95-1.86z'
					/>
				</svg>
			</a>
			<a
				className='mx-1.5 outline-none text-gray-300 hover:bg-gray-700 hover:shadow-2xl hover:text-white p-2.5 rounded-md text-3xl'
				href='https://github.com/gutenfries'
				target='_blank'
				rel='noopener noreferrer'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='currentColor'
					size={24}
					viewBox='0 0 16 16'
					width='24'
					height='24'
				>
					<path
						fill-rule='evenodd'
						d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'
					>
					</path>
				</svg>
			</a>
			<a
				className='mx-1.5 outline-none text-gray-300 hover:bg-amber-600 hover:shadow-2xl hover:text-white p-2.5 rounded-md text-3xl'
				href='https://codepen.io/gutenfries'
				target='_blank'
				rel='noopener noreferrer'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				>
					<polygon points='12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2'></polygon>
					<line x1='12' y1='22' x2='12' y2='15.5'></line>
					<polyline points='22 8.5 12 15.5 2 8.5'></polyline>
					<polyline points='2 15.5 12 8.5 22 15.5'></polyline>
					<line x1='12' y1='2' x2='12' y2='8.5'></line>
				</svg>
			</a>
			<a
				className='mx-1.5 outline-none text-gray-300 hover:bg-blue-600 hover:shadow-2xl hover:text-white p-2.5 rounded-md text-3xl'
				href='https://wakatime.com/gutenfries'
				target='_blank'
				rel='noopener noreferrer'
			>
				<svg
					stroke='currentColor'
					fill='currentColor'
					width='24'
					height='24'
					viewBox='0 0 256 256'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d='M128,0 C57.308,0 0,57.308 0,128 C0,198.693 57.308,256 128,256 C198.693,256 256,198.693 256,128 C256,57.308 198.693,0 128,0 M128,33.805 C179.939,33.805 222.195,76.061 222.195,128 C222.195,179.94 179.939,222.195 128,222.195 C76.061,222.195 33.805,179.94 33.805,128 C33.805,76.061 76.061,33.805 128,33.805 M115.4993,155.6431 L115.3873,155.6431 C113.4353,155.6081 111.6083,154.6751 110.4343,153.1151 L81.5593,114.7321 C79.4553,111.9351 80.0173,107.9611 82.8143,105.8561 C85.6123,103.7511 89.5853,104.3131 91.6903,107.1111 L115.6833,139.0051 L122.5463,130.5271 C123.7493,129.0411 125.5603,128.1771 127.4723,128.1771 L127.4803,128.1771 C129.3973,128.1791 131.2093,129.0471 132.4103,130.5411 L139.0003,138.7281 L176.6923,90.1341 C178.8353,87.3681 182.8173,86.8651 185.5843,89.0111 C188.3493,91.1561 188.8533,95.1371 186.7073,97.9041 L144.1003,152.8371 C142.9143,154.3681 141.0883,155.2721 139.1503,155.2901 L139.0933,155.2901 C137.1743,155.2901 135.3583,154.4221 134.1553,152.9261 L127.4583,144.6071 L120.4253,153.2931 C119.2213,154.7811 117.4103,155.6431 115.4993,155.6431'>
					</path>
				</svg>
			</a>
		</div>
	);
}

export { SocialLinks };
