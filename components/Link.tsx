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
	 * extra styles to apply to the link
	 */
	className?: string;
	/**
	 * whether to color the link or not
	 * @default true
	 */
	color?: boolean;
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
	{ href, children, u, internal, className, color }: LinkProps,
) {
	// display the href value if text is failed to be passed to the component.
	if (!children) {
		children = href;
	}

	return (
		<a
			href={href}
			className={`hover:underline ${u ? 'underline' : ''} ${className ?? ''} ${
				// if `color` is undefined or true, color the link
				color ?? true
					? 'hover:text-purple-600 active:text-purple-700 text-purple-500'
					: ''}`}
			target={internal ? undefined : '_blank'}
			rel={internal ? undefined : 'noopener noreferrer'}
		>
			{children}
		</a>
	);
}
