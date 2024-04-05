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

import { JSX } from 'preact/jsx-runtime';

interface FooterItem {
	displayName: string;
	link: string;
	icon: JSX.Element;
}

const footerItems: Record<string, FooterItem[]> = {
	social: [
		{
			displayName: 'LinkedIn',
			link: 'https://linkedin.com/in/gutenfries',
			icon: <IconBrandLinkedIn size={20} />,
		},
		{
			displayName: 'Peerlist',
			link: 'https://peerlist.io/gutenfries',
			icon: <IconSquareRoundedLetterP size={20} />,
		},
		{
			displayName: 'Instagram',
			link: 'https://instagram.com/gutenfries',
			icon: <IconBrandInstagram size={20} />,
		},
		{
			displayName: 'Facebook',
			link: 'https://facebook.com/maybe.gutenfries',
			icon: <IconBrandFacebook size={20} />,
		},
	],
	code: [
		{
			displayName: 'GitHub',
			link: 'https://github.com',
			icon: <IconBrandGithub size={20} />,
		},
		{
			displayName: 'Wakatime',
			link: 'https://wakatime.com/@gutenfries',
			icon: <IconLetterW className='inline-block w-4 h-4' />,
		},
		{
			displayName: 'Codepen',
			link: 'https://codepen.io/gutenfries',
			icon: <IconBrandCodepen size={20} />,
		},
		{
			displayName: 'Leetcode',
			link: 'https://leetcode.com/gutenfries',
			icon: <IconCode size={20} />,
		},
	],
	other: [
		{
			displayName: 'Feed',
			link: '/blog/feed.rss',
			icon: <IconRSS size={20} />,
		},
		{
			displayName: 'Source Code',
			link: 'https://github.com/gutenfries/gutenfries.deno.dev',
			icon: <IconBrandGit size={20} />,
		},
		{
			displayName: 'License',
			link: '/license',
			icon: <IconFileCertificate size={20} />,
		},
		{
			displayName: 'Privacy Policy',
			link: '/privacy-policy',
			icon: <IconCookie size={20} />,
		},
	],
};

function Footer() {
	return (
		<footer className='bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition'>
			<ul className='flex flex-row p-3 text-center text-xs sm:text-base jutify-around'>
				{Object.entries(footerItems).map(([key, items]) => (
					<li key={key} className='p-3 w-1/3'>
						<h3 className='mb-2 font-bold text-lg tracking-widest animation-gradient-text'>
							{key.toUpperCase()}
						</h3>
						<ul>
							{items.map((item) => (
								<li>
									<Link
										color={false}
										className='flex justify-center items-center'
										href={item.link}
									>
										<span className='mr-1'>
											{item.displayName}
										</span>
										<i className='inline-block'>
											{item.icon}
										</i>
									</Link>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>

			<section className='flex flex-row flex-wrap justify-between items-center bg-gray-800 shadow-lg px-6 py-4 w-full h-20'>
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
