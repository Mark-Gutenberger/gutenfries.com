import { ComponentChildren, JSX } from 'preact';

interface LinkProps {
	/**
	 * The URL to link to
	 */
	href: string;
	/**
	 * whether to underline the link or not
	 */
	u?: boolean;
	/**
	 * children to render inside the link
	 * @default href
	 */
	children?: ComponentChildren;
	/**
	 * whether the link is ext or not
	 * @default false
	 */
	ext?: boolean;
	/**
	 * whether to add spaces before and after the link or not
	 * @default false
	 * @see noEndSpace @see noStartSpace
	 */
	noSpaces?: boolean;
	/**
	 * whether or not to add a space to the end of the link
	 * @default flase
	 */
	noEndSpace?: boolean;
	/**
	 * whether or not to add a space to the start of the link
	 * @default false
	 */
	noStartSpace?: boolean;
}

/**
 * Boilerplate code for HTML Anchor elements
 *
 * @note If you are rendered multiple children, use a span to contain them
 *
 * @example
 * // link to an internal page
 * <Link href='/about'>About</Link>
 * // link to an external page
 * <Link href='https://google.com' ext>About</Link>
 * // link to an internal page with underline
 * <Link href='/about' u>About</Link>
 */
export const Link = ({
	href,
	children,
	u,
	ext,
	noSpaces,
	noEndSpace,
	noStartSpace,
}: LinkProps): JSX.Element => {
	if (noEndSpace) {
		children = ` ${children}`;
	} else if (noStartSpace) {
		children = `${children} `;
	} else if (!noSpaces) {
		children = ` ${children} `;
	}

	{/* display the href value if text is failed to be passed to the component. */}
	if (!children) {
		children = href;
	}

	return (
		<a
			href={href}
			className={`text-blue-500 hover:text-blue-600 active:text-blue-700${(u
				? ' underline'
				: '')}`}
			target={ext ? '_blank' : undefined}
			rel={ext ? 'noopener' : undefined}
		>
			{children}
		</a>
	);
};
