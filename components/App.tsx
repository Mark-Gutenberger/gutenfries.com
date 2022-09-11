/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from 'preact';

interface AppProps {
	children?:
		| preact.AnyComponent[]
		| preact.AnyComponent
		| preact.VNode[]
		| preact.VNode
		| Element[]
		| Element;
}

const App = ({ children }: AppProps) => {
	return (
		<>
			{/* scripts to run main content load */}
			{/* end scripts */}
			{children}
			{/* scripts to run after page paint */}
			<script>feather.replace()</script>
			{/* end scripts */}
		</>
	);
};

export { App };
