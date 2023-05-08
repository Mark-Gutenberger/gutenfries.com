import { ComponentChildren } from 'preact';

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
	 * whether the link is internal or not
	 * @default false
	 */
	internal?: boolean;
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
	/**
	 * extra styles to apply to the link
	 */
	className?: string;
}

/**
 * Boilerplate code for HTML Anchor elements
 *
 * @note If you are rendered multiple children, use a span to contain them
 *
 * @example
 * // link to an internal page
 * <Link internal href='/about'>About</Link>
 * // link to an external page
 * <Link href='https://google.com' ext>About</Link>
 * // link to an internal page with underline
 * <Link href='/about' u internal>About</Link>
 */
export function Link(
	{ href, children, u, internal, noSpaces, noEndSpace, noStartSpace, className }: LinkProps,
) {
	if (noEndSpace) {
		children = ` ${children}`;
	} else if (noStartSpace) {
		children = `${children} `;
	} else if (!noSpaces) {
		children = ` ${children} `;
	}

	{
		/* display the href value if text is failed to be passed to the component. */
	}
	if (!children) {
		children = href;
	}

	return (
		<a
			href={href}
			className={`text-purple-500 hover:text-purple-600 active:text-purple-700${
				u ? ' underline' : ''
			} ${className ?? ''}`}
			target={internal ? undefined : '_blank'}
			rel={internal ? undefined : 'noopener noreferrer'}
		>
			{children}
		</a>
	);
}
