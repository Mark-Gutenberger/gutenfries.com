/** @jsx h */
/** @jsxFrag Fragment */
import { Attributes, Fragment, h } from 'preact';
// import * as shims from '../static/fontawesome-6.1.2/metadata/shims.json' assert { type: 'json' };

interface IconProps {
	source: string;
	type: string;
}

function Icon({ source, type }: IconProps, { ...rest }: Attributes) {
	if (type === 'brand' || type === 'brands') {
		const source_ = `fa-brands ${source}`;

		return <i class={source_} {...rest}></i>;
	} else if (type === 'solid') {
		const source_ = `fa-solid ${source}`;

		return <i class={source_} {...rest}></i>;
	} else if (type === 'regular') {
		const source_ = `fa-regular ${source}`;

		return <i class={source_} {...rest}></i>;
	} else {
		return (
			<>
				<p>
					ERROR: invalid icon type
				</p>
				<script>
					Error('Invalid icon type');
				</script>
			</>
		);
	}
}

export default Icon;
