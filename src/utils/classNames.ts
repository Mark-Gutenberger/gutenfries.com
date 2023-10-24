/**
 * joins two or more JSX `className` properties
 */
export function classNames(...classes: string[]): string {
	return classes.filter(Boolean).join(' ');
}
