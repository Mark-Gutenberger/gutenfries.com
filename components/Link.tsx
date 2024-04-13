import { ComponentChild } from 'preact';

interface LinkProps {
	/**
	 * The URL to link to
	 */
	href: string;
	/**
	 * whether to underline the link or not
	 */
	underline?: boolean;
	/**
	 * children to render inside the link
	 * @default href
	 */
	children?: ComponentChild;
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
 * <Link internal href='/about'>Internal Link</Link>
 * // link to an external page
 * <Link href='https://google.com'>External Link</Link>
 * // link to an internal page with underline
 * <Link href='/about' underline internal color>Colored Underlined internal Link</Link>
 */
export function Link(
	props: LinkProps,
) {
	// display the href value if text is failed to be passed to the component.
	if (!props.children) {
		props.children = props.href;
	}

	return (
		<a
			href={props.href}
			className={`hover:underline font-medium ${props.underline ? 'underline' : ''} ${
				props.className ?? ''
			} ${
				// if `color` is undefined or true, color the link
				props.color ?? true
					? 'hover:text-purple-600 transition active:text-purple-700 text-purple-500'
					: ''}`}
			target={props.internal ? undefined : '_blank'}
			rel={props.internal ? undefined : 'noopener noreferrer'}
		>
			{props.children}
		</a>
	);
}
