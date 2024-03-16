import { PageProps } from '$fresh/server.ts';

export default function App({ Component /* state */ }: PageProps) {
	return (
		<>
			{/* SSR for dark/light mode */}
			<script>
				{`
(function () {
	try {
		const mode = localStorage.getItem('theme');
		document.getElementsByTagName('html')[0].className = mode === 'dark' ? 'dark' : 'light';
	} catch (e) {
		console.error(e);
	}
})();

`}
			</script>
			<Component />
		</>
	);
}
