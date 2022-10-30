/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';

import { UnknownPageProps } from '$fresh/server.ts';

import { Head } from '@/components/Head.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { Navbar } from '@/components/Navbar.tsx';

function NotFoundPage(PageProps: UnknownPageProps) {
	return (
		<>
			<Head PageProps={PageProps} />
			<div className='bg-gray-100 dark:bg-gray-900 font-[fira] text-gray-900 dark:text-gray-100 font-bold text-center'>
				<Navbar />

				<NoScript />

				<style jsx>
					{`
					/* Glitch effect by Felix Rilling
					* https://codepen.io/FelixRilling/pen/vNJoMy
					*/

					h1, h2 {
						font-size: 3rem;
						margin: 0;
						line-height: 0;
						animation: Glitch1 2.5s infinite;
					}

					h2:nth-child(2) {
						color: #67f3da;
						animation: Glitch2 2.5s infinite;
					}

					h2:nth-child(3) {
						color: #f16f6f;
						animation: Glitch3 2.5s infinite;
					}

					h3 {
						font-size: 3rem;
						margin: 0;
						line-height: 0;
						animation: Glitch1 2.5s infinite;
					}

					h3:nth-child(2) {
						color: #67f3da;
						animation: Glitch2 2.5s infinite;
					}

					h3:nth-child(3) {
						color: #f16f6f;
						animation: Glitch3 2.5s infinite;
					}

					h4 {
						font-size: 3rem;
						margin: 0;
						line-height: 0;
						animation: Glitch1 2.5s infinite;
					}

					h4:nth-child(2) {
						color: #67f3da;
						animation: Glitch2 2.5s infinite;
					}

					h4:nth-child(3) {
						color: #f16f6f;
						animation: Glitch3 2.5s infinite;
					}

					@keyframes Glitch1 {
						0% {
							transform: none;
							opacity: 1;
						}
						7% {
							transform: skew(-0.5deg, -0.9deg);
							opacity: 0.75;
						}
						10% {
							transform: none;
							opacity: 1;
						}
						27% {
							transform: none;
							opacity: 1;
						}
						30% {
							transform: skew(0.8deg, -0.1deg);
							opacity: 0.75;
						}
						35% {
							transform: none;
							opacity: 1;
						}
						52% {
							transform: none;
							opacity: 1;
						}
						55% {
							transform: skew(-1deg, 0.2deg);
							opacity: 0.75;
						}
						50% {
							transform: none;
							opacity: 1;
						}
						72% {
							transform: none;
							opacity: 1;
						}
						75% {
							transform: skew(0.4deg, 1deg);
							opacity: 0.75;
						}
						80% {
							transform: none;
							opacity: 1;
						}
						100% {
							transform: none;
							opacity: 1;
						}
					}

					@keyframes Glitch2 {
						0% {
							transform: none;
							opacity: 0.25;
						}
						7% {
							transform: translate(-2px, -3px);
							opacity: 0.5;
						}
						10% {
							transform: none;
							opacity: 0.25;
						}
						27% {
							transform: none;
							opacity: 0.25;
						}
						30% {
							transform: translate(-5px, -2px);
							opacity: 0.5;
						}
						35% {
							transform: none;
							opacity: 0.25;
						}
						52% {
							transform: none;
							opacity: 0.25;
						}
						55% {
							transform: translate(-5px, -1px);
							opacity: 0.5;
						}
						50% {
							transform: none;
							opacity: 0.25;
						}
						72% {
							transform: none;
							opacity: 0.25;
						}
						75% {
							transform: translate(-2px, -6px);
							opacity: 0.5;
						}
						80% {
							transform: none;
							opacity: 0.25;
						}
						100% {
							transform: none;
							opacity: 0.25;
						}
					}

					@keyframes Glitch3 {
						0% {
							transform: none;
							opacity: 0.25;
						}
						7% {
							transform: translate(2px, 3px);
							opacity: 0.5;
						}
						10% {
							transform: none;
							opacity: 0.25;
						}
						27% {
							transform: none;
							opacity: 0.25;
						}
						30% {
							transform: translate(5px, 2px);
							opacity: 0.5;
						}
						35% {
							transform: none;
							opacity: 0.25;
						}
						52% {
							transform: none;
							opacity: 0.25;
						}
						55% {
							transform: translate(5px, 1px);
							opacity: 0.5;
						}
						50% {
							transform: none;
							opacity: 0.25;
						}
						72% {
							transform: none;
							opacity: 0.25;
						}
						75% {
							transform: translate(2px, 6px);
							opacity: 0.5;
						}
						80% {
							transform: none;
							opacity: 0.25;
						}
						100% {
							transform: none;
							opacity: 0.25;
						}
					}
					`}
				</style>

				<div className='flex flex-col items-center justify-center h-screen'>
					<main>
						<div>
							<h1>
								HTTP Error 404
							</h1>
							<h2>
								HTTP Error 404
							</h2>
							<h2>
								HTTP Error 404
							</h2>
						</div>
						<br />
						<br />
						<div>
							<h3>
								Page not found
							</h3>
							<h3>
								Page not found
							</h3>
							<h3>
								Page not found
							</h3>
						</div>
						<br />
						<br />
						<br />
						<br />
						<div>
							<h4>
								:(
							</h4>
							<h4>
								:(
							</h4>
							<h4>
								:(
							</h4>
						</div>
					</main>
				</div>
			</div>
		</>
	);
}

export default NotFoundPage;
