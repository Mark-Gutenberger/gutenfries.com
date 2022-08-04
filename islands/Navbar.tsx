/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';

interface NavbarProps {
	route: string | URL | URLPattern;
	theme: Record<string, string>;
}

function Navbar({ theme, route }: NavbarProps) {
	// TODO(@gutenfries): improve mobile responsiveness
	const t = theme;

	const navStyles =
		tw`font-rounded place-content-around flex bg-${t.LightBlue} border-b border-${t.Green} flex-wrap text-base items-center justify-between p-2`;
	const headerTitleStyles = tw`font-rounded font-extrabold text-${t.White} mx-2 text-xl`;
	const linkStyles = tw`font-rounded text-${t.Black} mx-1 font-bold hover:text-${t.Pink}`;
	const headerLogoStyles = linkStyles +
		`title-font flex relative inset-1 font-medium items-center mb-4`;
	const loginButtonStyles = tw`
		inline-flex items-center bg-${t.Green} border-3 border-${t.Green} py-1 px-3
		focus:outline-none hover:bg-${t.Pink} rounded text-base mt-4 md:mt-0 font-rounded`;

	return (
		<header>
			<nav class={navStyles}>
				<a class={headerLogoStyles} /* href='http://20.221.107.197/' */>
					{/* TODO(@gutenfries): change logo */}
					<img
						src='/logo.svg'
						width='50rem'
						height='50rem'
						alt='the fresh logo: a sliced lemon dripping with juice'
					/>
				</a>
				{/* <div> */}
				{/* <img src='/images/brush-stroke-banner-1.svg' alt='paint streak behind text' /> */}
				<h1 class={headerTitleStyles}>Marcus Gutenberger</h1>
				{/* </div> */}

				<a class={linkStyles} href='#'>First Link</a>
				<a class={linkStyles} href='#'>Second Link</a>
				<a class={linkStyles} href='#'>Third Link</a>
				<a class={linkStyles} href='#'>Fourth Link</a>
				<button class={loginButtonStyles}>
					Login
				</button>
			</nav>
		</header>
	);
}

export default Navbar;
