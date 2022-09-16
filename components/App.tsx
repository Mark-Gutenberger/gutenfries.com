import { ComponentChildren } from 'preact';

interface AppProps {
	children?: ComponentChildren;
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
