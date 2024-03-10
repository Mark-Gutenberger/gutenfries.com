import { asset } from '$fresh/runtime.ts';

import { Link } from '@/components/Link.tsx';
import IconBrandCodepen from '@tabler/icons/brand-codepen.tsx';
import IconBrandGit from '@tabler/icons/brand-git.tsx';
import IconBrandGithub from '@tabler/icons/brand-github.tsx';
import IconBrandInstagram from '@tabler/icons/brand-instagram.tsx';
import IconBrandLinkedIn from '@tabler/icons/brand-linkedin.tsx';
import IconBrandFacebook from '@tabler/icons/brand-facebook.tsx';
import IconCode from '@tabler/icons/code.tsx';
import IconCookie from '@tabler/icons/cookie.tsx';
import IconFileCertificate from '@tabler/icons/file-certificate.tsx';
import IconLetterW from '@tabler/icons/letter-w.tsx';
import IconRSS from '@tabler/icons/rss.tsx';
import IconSquareRoundedLetterP from '@tabler/icons/square-rounded-letter-p.tsx';

function Footer() {
	return (
		<footer className='bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200'>
			<ul className='flex flex-row pt-20 text-center text-xs sm:text-base jutify-around'>
				<li className='p-4 w-1/3'>
					<h3 className='mb-3 font-bold text-lg text-purple-500 tracking-widest'>
						SOCIAL
					</h3>
					<nav className='mb-5 list-none'>
						<ul>
							<li>
								<Link
									color={false}
									className='flex justify-center items-center'
									href='https://linkedin.com/in/gutenfries'
								>
									<span className='mr-1'>
										LinkedIn
									</span>
									<i className='inline-block w-5 h-5'>
										<IconBrandLinkedIn />
									</i>
								</Link>
							</li>
							<li>
								<Link
									color={false}
									className='flex justify-center items-center'
									href='https://peerlist.io/gutenfries'
								>
									<span className='mr-1'>
										Peerlist
									</span>
									<i className='inline-block w-5 h-5'>
										<IconSquareRoundedLetterP />
									</i>
								</Link>
							</li>
							<li>
								<Link
									color={false}
									href='https://instagram.com/gutenfries'
									className='flex justify-center items-center hover:text-underline'
								>
									<span className='mr-1'>
										Instagram
									</span>
									<i className='inline-block w-5 h-5'>
										<IconBrandInstagram />
									</i>
								</Link>
							</li>
							<li>
								<Link
									color={false}
									className='flex justify-center items-center'
									href='https://facebook.com/maybe.gutenfries'
								>
									<span className='mr-1'>
										Facebook
									</span>
									<i className='inline-block w-5 h-5'>
										<IconBrandFacebook />
									</i>
								</Link>
							</li>
						</ul>
					</nav>
				</li>
				<li className='p-4 w-1/3'>
					<h3 className='mb-3 font-bold text-lg text-purple-500 tracking-widest'>
						CODE
					</h3>
					<nav className='mb-5 list-none'>
						<ul>
							<li>
								<Link
									color={false}
									className='flex justify-center items-center'
									href='https://github.com'
								>
									<span className='mr-1'>
										GitHub
									</span>
									<i className='inline-block w-5 h-5'>
										<IconBrandGithub />
									</i>
								</Link>
							</li>
							<li>
								<Link
									color={false}
									className='flex justify-center items-center'
									href='https://wakatime.com/@gutenfries'
								>
									<span className='mr-1'>
										Wakatime
									</span>
									<IconLetterW className='inline-block w-4 h-4' />
								</Link>
							</li>
							<li>
								<Link
									color={false}
									className='flex justify-center items-center'
									href='https://codepen.io/gutenfries'
								>
									<span className='mr-1'>
										Codepen
									</span>
									<i className='inline-block w-5 h-5'>
										<IconBrandCodepen />
									</i>
								</Link>
							</li>
							<li>
								<Link
									color={false}
									className='flex justify-center items-center'
									href='https://leetcode.com/gutenfries'
								>
									<span className='mr-1'>
										Leetcode
									</span>
									<i className='inline-block w-5 h-5'>
										<IconCode />
									</i>
								</Link>
							</li>
						</ul>
					</nav>
				</li>

				<li className='p-4 w-1/3'>
					<h3 className='mb-3 font-bold text-lg text-purple-500 tracking-widest'>
						OTHER
					</h3>
					<nav className='mb-5 list-none'>
						<ul>
							<li>
								<Link
									color={false}
									className='flex justify-center items-center'
									href='/blog/feed.rss'
									internal
								>
									<span className='mr-1'>
										Feed
									</span>
									<i className='inline-block w-5 h-5'>
										<IconRSS />
									</i>
								</Link>
							</li>
							<li>
								<Link
									color={false}
									className='flex justify-center items-center'
									href='https://github.com/gutenfries/gutenfries.deno.dev'
								>
									<span className='mr-1'>
										Source Code
									</span>
									<i className='inline-block w-5 h-5'>
										<IconBrandGit />
									</i>
								</Link>
							</li>
							<li>
								<Link
									color={false}
									className='flex justify-center items-center'
									href='/license'
									internal
								>
									<span className='mr-1'>
										License
									</span>
									<i className='inline-block w-5 h-5'>
										<IconFileCertificate />
									</i>
								</Link>
							</li>
							<li>
								<Link
									color={false}
									className='flex justify-center items-center'
									href='/privacy-policy'
									internal
								>
									<span className='mr-1'>
										Privacy Policy
									</span>
									<i className='inline-block w-5 h-5'>
										<IconCookie />
									</i>
								</Link>
							</li>
						</ul>
					</nav>
				</li>
			</ul>

			<section className='flex flex-row flex-wrap justify-between items-center bg-gray-800 shadow-lg mx-auto px-6 py-4 w-full'>
				<span className='mt-2 w-1/3 text-center text-gray-400 text-sm md:text-left hover:text-underline'>
					<Link
						color={false}
						href='/license'
						internal
					>
						© {new Date().getFullYear()} Marc Gutenberger
					</Link>
				</span>
				<span className='inline-flex justify-center mt-2 w-1/3'>
					<Link
						color={false}
						href='https://fresh.deno.dev/'
					>
						<span className='sr-only'>
							Made with Fresh
						</span>
						<img
							src={asset('/images/made-with-fresh.svg')}
							alt='Made with Fresh'
						/>
					</Link>
				</span>
				<span className='md:text-right mt-2 w-1/3 text-center text-gray-400 text-sm'>
					Created with {'<'}3, and{' '}
					<Link
						color={false}
						href='https://deno.land'
					>
						Deno
					</Link>
				</span>
			</section>
		</footer>
	);
}

export { Footer };
