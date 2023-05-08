import {
	IconArticle,
	IconCalendar,
	IconCode,
	IconCodepen,
	IconCookie,
	IconDeno,
	IconDiscord,
	IconFileCertificate,
	IconFileText,
	IconGitHub,
	IconGooglePlay,
	IconInstagram,
	IconLinkedIn,
	IconMail,
	IconPeerlist,
	IconPhone,
	IconReact,
	IconRSS,
	IconSpotify,
	IconTabler,
	IconTailwind,
	IconTikTok,
	IconWakatime,
	IconWorld,
} from '@/components/Icons.tsx';

import { asset } from '$fresh/runtime.ts';

function Footer() {
	return (
		<footer className='bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200'>
			<section className='container p-12 pt-20 mx-auto'>
				<ul className='flex flex-wrap text-center -mb-10 -mx-4'>
					<li className='p-4 lg:w-1/6 md:w-1/2 w-full px-4'>
						<h3 className='font-bold text-lg text-purple-500 tracking-widest mb-3'>
							SOCIAL
						</h3>
						<nav className='list-none mb-5'>
							<ul>
								<li>
									<a
										href='https://instagram.com/gutenfries'
										className='hover:text-underline flex items-center justify-center'
										target='_blank'
										rel='noopener'
									>
										<span className='mr-1'>
											Instagram
										</span>
										<IconInstagram className='inline-block h-5 w-5' />
									</a>
								</li>

								<li>
									<a
										className='hover:text-underline flex items-center justify-center'
										href='https://tiktok.com/@gutenfries'
										target='_blank'
										rel='noopener'
									>
										<span className='mr-1'>
											TikTok
										</span>
										<IconTikTok className='inline-block h-5 h-5' />
									</a>
								</li>
								<li>
									<a
										className='hover:text-underline flex items-center justify-center'
										href='https://open.spotify.com/user/toxxf9ydhuutj64csrjyio7oq?si=08312a08a8b24068'
										target='_blank'
										rel='noopener'
									>
										<span className='mr-1'>
											Spotify
										</span>
										<IconSpotify className='inline-block h-5 w-5' />
									</a>
								</li>
								<li>
									<a
										className='hover:text-underline flex items-center justify-center'
										href='https://discord.com/users/1007032871892025435'
										target='_blank'
										rel='noopener'
									>
										<span className='mr-1'>
											Discord
										</span>
										<IconDiscord className='inline-block h-5 w-5' />
									</a>
								</li>
							</ul>
						</nav>
					</li>
					<li className='p-4 lg:w-1/6 md:w-1/2 w-full px-4'>
						<h3 className='font-bold text-lg text-purple-500 tracking-widest mb-3'>
							CONTACT
						</h3>
						<nav className='list-none mb-5'>
							<ul>
								<li>
									<a
										className='hover:text-underline flex items-center justify-center'
										href='mailto:gutenfries@gmail.com'
										target='_blank'
										rel='noopener'
									>
										<span className='mr-1'>
											Email
										</span>
										<IconMail className='inline-block h-5 h-5' />
									</a>
								</li>
								<li>
									<a
										className='hover:text-underline flex items-center justify-center'
										href='tel:+19202843760'
										target='_blank'
										rel='noopener'
									>
										<span className='mr-1'>
											Mobile
										</span>
										<IconPhone className='inline-block h-5 h-5' />
									</a>
								</li>
								<li>
									<a
										className='hover:text-underline flex items-center justify-center'
										href='https://calendly.com/gutenfries'
										target='_blank'
										rel='noopener'
									>
										<span className='mr-1'>
											Calendly
										</span>
										<IconCalendar className='inline-block h-5 h-5' />
									</a>
								</li>
							</ul>
						</nav>
					</li>

					<li className='p-4 lg:w-1/6 md:w-1/2 w-full px-4'>
						<h3 className='font-bold text-lg text-purple-500 tracking-widest mb-3'>
							PROFESSIONAL
						</h3>
						<nav className='list-none mb-5'>
							<ul>
								<li>
									<a
										className='hover:text-underline flex items-center justify-center'
										href='https://linkedin.com/in/gutenfries'
										target='_blank'
										rel='noopener'
									>
										<span className='mr-1'>
											LinkedIn
										</span>
										<IconLinkedIn className='inline-block h-5 w-5' />
									</a>
								</li>
								<li>
									<a
										className='hover:text-underline flex items-center justify-center'
										href='https://peerlist.io/gutenfries'
										target='_blank'
										rel='noopener'
									>
										<span className='mr-1'>
											Peerlist
										</span>
										<IconPeerlist className='inline-block h-5 w-5' />
									</a>
								</li>
								<li>
									<a
										className='hover:text-underline flex items-center justify-center'
										href='/resume'
										target='_blank'
									>
										<span className='mr-1'>
											Resume
										</span>
										<IconFileText className='inline-block h-5 w-5' />
									</a>
								</li>
								<li>
									<a
										className='hover:text-underline flex items-center justify-center'
										href='https://g.dev/gutenfries'
										target='_blank'
										rel='noopener'
									>
										<span className='mr-1'>
											Google Dev
										</span>
										<IconGooglePlay className='inline-block h-5 w-5' />
									</a>
								</li>
							</ul>
						</nav>
					</li>
					<li className='p-4 lg:w-1/6 md:w-1/2 w-full px-4'>
						<h3 className='font-bold text-lg text-purple-500 tracking-widest mb-3'>
							CODE
						</h3>
						<nav className='list-none mb-5'>
							<ul>
								<li>
									<a
										className='hover:text-underline flex items-center justify-center'
										href='https://github.com'
										target='_blank'
										rel='noopener'
									>
										<span className='mr-1'>
											GitHub
										</span>
										<IconGitHub className='inline-block h-5 w-5' />
									</a>
								</li>
								<li>
									<a
										className='hover:text-underline flex items-center justify-center'
										href='https://wakatime.com/@gutenfries'
										target='_blank'
										rel='noopener'
									>
										<span className='mr-1'>
											Wakatime
										</span>
										<IconWakatime className='inline-block h-4 w-4' />
									</a>
								</li>
								<li>
									<a
										className='hover:text-underline flex items-center justify-center'
										href='https://codepen.io/gutenfries'
										target='_blank'
										rel='noopener'
									>
										<span className='mr-1'>
											Codepen
										</span>
										<IconCodepen className='inline-block h-5 w-5' />
									</a>
								</li>
							</ul>
						</nav>
					</li>

					<li className='p-4 lg:w-1/6 md:w-1/2 w-full px-4'>
						<h3 className='font-bold text-lg text-purple-500 tracking-widest mb-3'>
							OTHER
						</h3>
						<nav className='list-none mb-5'>
							<ul>
								<li>
									<a
										className='hover:text-underline flex items-center justify-center'
										href='/blog'
									>
										<span className='mr-1'>
											Blog
										</span>
										<IconArticle className='inline-block h-5 w-5' />
									</a>
								</li>
								<li>
									<a
										className='hover:text-underline flex items-center justify-center'
										href='/blog/feed.rss'
									>
										<span className='mr-1'>
											Feed
										</span>
										<IconRSS className='inline-block h-5 w-5' />
									</a>
								</li>
								<li>
									<a
										className='hover:text-underline flex items-center justify-center'
										href='https://github.com/gutenfries/gutenfries.deno.dev'
										target='_blank'
										rel='noopener'
									>
										<span className='mr-1'>
											Source Code
										</span>
										<IconCode className='inline-block h-5 w-5' />
									</a>
								</li>
								<li>
									<a
										className='hover:text-underline flex items-center justify-center'
										href='/license'
										target='_blank'
										rel='noopener'
									>
										<span className='mr-1'>
											License
										</span>
										<IconFileCertificate className='inline-block h-5 w-5' />
									</a>
								</li>
								<li>
									<a
										className='hover:text-underline flex items-center justify-center'
										href='/privacy-policy'
										target='_blank'
										rel='noopener'
									>
										<span className='mr-1'>
											Privacy Policy
										</span>
										<IconCookie className='inline-block h-5 w-5' />
									</a>
								</li>
							</ul>
						</nav>
					</li>
					<li className='p-4 lg:w-1/6 md:w-1/2 w-full px-4'>
						<h3 className='font-bold text-lg text-purple-500 tracking-widest mb-3'>
							RESOURCES
						</h3>
						<nav className='list-none mb-5'>
							<ul>
								<li>
									<a
										className='hover:text-underline flex items-center justify-center'
										href='https://deno.land'
										target='_blank'
										rel='noopener'
									>
										<span className='mr-1'>
											Deno
										</span>
										<IconDeno className='inline-block h-5 w-5' />
									</a>
								</li>
								<li>
									<a
										className='hover:text-underline flex items-center justify-center'
										href='https://deno.dev'
										target='_blank'
										rel='noopener'
									>
										<span className='mr-1'>
											Deno Deploy
										</span>
										<IconWorld className='inline-block h-5 w-5' />
									</a>
								</li>
								<li>
									<a
										className='hover:text-underline flex items-center justify-center'
										href='https://preactjs.com'
										target='_blank'
										rel='noopener'
									>
										<span className='mr-1'>
											Preact
										</span>
										<IconReact className='inline-block h-5 w-5' />
									</a>
								</li>
								<li>
									<a
										className='hover:text-underline flex items-center justify-center'
										href='https://tailwindcss.com'
										target='_blank'
										rel='noopener'
									>
										<span className='mr-1'>
											Tailwind CSS
										</span>
										<IconTailwind className='inline-block h-5 w-5' />
									</a>
								</li>
								<li>
									<a
										className='hover:text-underline flex items-center justify-center'
										href='https://tabler-icons.io'
										target='_blank'
										rel='noopener'
									>
										<span className='mr-1'>
											Tabler Icons
										</span>
										<IconTabler className='inline-block h-5 w-5' />
									</a>
								</li>
							</ul>
						</nav>
					</li>
				</ul>
			</section>

			<section className='w-full mr-auto p-4 flex flex-wrap flex-col sm:flex-row shadow-lg bg-gray-800'>
				<span className='hover:text-underline text-lg mt-2 text-sm text-center sm:text-left text-gray-400'>
					<a
						href='/license'
						className='ml-1'
					>
						© {new Date().getFullYear()} Marc Gutenberger - @gutenfries
					</a>
				</span>
				<span className='inline-flex sm:mx-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
					<a
						href='https://fresh.deno.dev/'
						target='_blank'
						rel='noopener'
					>
						<span className='sr-only'>
							Made with Fresh
						</span>
						<img
							src={asset('/images/made-with-fresh.svg')}
							alt='Made with Fresh'
						/>
					</a>
				</span>
				<span className='hover:text-underline sm:ml-auto mt-2 sm:w-auto w-full sm:text-left text-center text-gray-400 text-sm'>
					Created with {'<'}3 and
					<a
						href='https://deno.land'
						className='ml-1'
						target='_blank'
						rel='noopener'
					>
						Deno
					</a>
				</span>
			</section>
		</footer>
	);
}

export { Footer };
