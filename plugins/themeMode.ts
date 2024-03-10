import { Plugin, PluginRenderResult } from '$fresh/server.ts';

function themeMode(): Plugin {
	const main = `data:application/javascript, export default function(state) {
		const theme = window.localStorage.getItem('theme');
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	};`;

	return {
		name: 'themeMode',
		entrypoints: { 'main': main },
		render(ctx) {
			ctx.render();

			return {
				scripts: [{ entrypoint: 'main', state: [] }],
			} as PluginRenderResult;
		},
	} as Plugin;
}

export default themeMode;
